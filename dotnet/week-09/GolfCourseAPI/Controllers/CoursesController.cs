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

        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            // Remove the item from the database
            var db = new GolfCourseContext();
            var course = db.GolfCourse.FirstOrDefault(c => c.Id == id);
            if (course == null)
            {
                return NotFound();
            }
            db.GolfCourse.Remove(course);
            // Save the changes 
            db.SaveChanges();
            // return ????
            return Ok();
        
        }


    }
}