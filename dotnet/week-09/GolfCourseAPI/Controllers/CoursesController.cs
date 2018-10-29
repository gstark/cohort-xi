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
    public class CoursesController : ControllerBase
    {
        [HttpGet]
        public ActionResult<IEnumerable<GolfCourse>> Get()
        {
            var db = new GolfCourseContext();
            return db.GolfCourse;
        }

        [HttpPost]
        public ActionResult<GolfCourse> Post([FromBody] GolfCourse golfCourse)
        {
            // add to my databse
            var db = new GolfCourseContext();
            db.GolfCourse.Add(golfCourse);
            db.SaveChanges();
            // return the newly created golf course
            return golfCourse;
        }


    }
}