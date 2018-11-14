using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CoffeeShipAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CoffeeShipAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LocationsController : ControllerBase
    {
        [HttpGet]
        public ActionResult GetAction()
        {
            var db = new CoffeeShopFinderContext();
            return Ok(db.Locations.Include(i => i.Franchise).OrderBy(o => o.Zip));
        }
        [HttpGet("{id}")]
        public ActionResult GetALocation([FromRoute] int id)
        {
            var db = new CoffeeShopFinderContext();
            return Ok(db.Locations
            .Include(i => i.Franchise)
            .SingleOrDefault(s => s.Id == id));
        }


        [HttpGet("{id}/reviews")]
        public ActionResult PostReview([FromRoute] int id)
        {
            var db = new CoffeeShopFinderContext();
            var results = db.Reviews.Where(w => w.LocationId == id).OrderByDescending(o => o.CreatedAt);
            return Ok(results);
        }

        [HttpGet("{id}/reviews/{userId}")]
        public ActionResult GetUserReview([FromRoute] int id, [FromRoute] string userId)
        {
            // query the review table to get the firstordefault (f => f.locationId && f.userId )
            var db = new CoffeeShopFinderContext();
            var review = db.Reviews.FirstOrDefault(f => f.LocationId == id && f.UserId == userId);
            // if (found)
            if (review != null)
            {
                return Ok(new { wasFound = true, review });
            }
            else
            {
                return Ok(new { wasFound = false });
            }
            // return that 
            // else return a not found message

        }

        [HttpPost("{id}/reviews")]
        [Authorize]
        public ActionResult PostReview([FromRoute] int id, [FromBody] Review review)
        {
            var db = new CoffeeShopFinderContext();
            review.LocationId = id;
            var userId = User.Claims.First( f=> f.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Value;
            review.UserId = userId;
            db.Reviews.Add(review);
            db.SaveChanges();
            return Ok(review);
        }

        [HttpPost("{id}/ratings")]
        public ActionResult AddRating([FromRoute] int id, [FromBody] Rating rating)
        {
            var db = new CoffeeShopFinderContext();
            rating.LocationId = id;
            db.Ratings.Add(rating);
            db.SaveChanges();
            // update the average
            // sum the numbers, divide by lenght
            var average = db.Ratings.Average(a => a.Score);
            // update the location with the average
            var shop = db.Locations.SingleOrDefault(sh => sh.Id == id);
            shop.AverageRating = (float)average;
            db.SaveChanges();

            return Ok(new { rating = average });
        }




    }
}