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
  public class SearchController : ControllerBase
  {


    [HttpGet]

    public ActionResult Get([FromQuery] String searchTerm)
    {
      var db = new CoffeeShopFinderContext();

      //connect to database v
      var results = db.Locations.Include(i => i.Franchise)
      .Where(w =>
      w.Franchise.Brand.ToLower().Contains(searchTerm.ToLower()) ||
      w.City.ToLower().Contains(searchTerm.ToLower()) ||
      w.Zip.Contains(searchTerm)
      );







      // query for locations that have where brand/city/zip contains search term
      return Ok(results);



      // return results 
    }

  }



}


