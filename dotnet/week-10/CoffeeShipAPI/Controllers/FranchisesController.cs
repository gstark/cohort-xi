using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CoffeeShipAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FranchisesController : ControllerBase
    {
        [HttpGet("{brand}/locations")]
        public ActionResult GetAction([FromRoute] string brand)
        {
            var db = new CoffeeShopFinderContext();
            var results = db.Franchises
                .Include(i => i.Locations)
                .FirstOrDefault(w => w.Brand.ToLower() == brand.ToLower());
            if (results == null)
            {
                return NotFound(new {message =$"Brand {brand} was not found. Use the GET /franchises to get a list of brands"});
            }
            return Ok(results);
        }
    }
}