using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GolfCourseAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace GolfCourseAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SearchController : ControllerBase
    {
        [HttpGet]
        public IQueryable<GolfCourse> Search(string name = null, string rank = null)
        {
            // query the database for golf course name that contain the search term

            var db = new GolfCourseContext();

            var results = db
                .GolfCourse
                .AsQueryable();
                // .Where(course => 
                //     course.Name.ToLower().Contains(name.ToLower())
                //     &&
                //     course.Rank.ToLower().Contains(rank.ToLower())
                //     );
            if (name != null){
                results = results
                .Where(course => course.Name.ToLower().Contains(name.ToLower()));
            }

            if (rank != null){
                results = results
                .Where(course => course.Rank.ToLower().Contains(rank.ToLower()));

            }

            return results;
        }
    }
}