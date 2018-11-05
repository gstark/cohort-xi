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
    public class LocationsController : ControllerBase
    {
        [HttpGet]
        public ActionResult GetAction()
        {
            var db = new CoffeeShopFinderContext();
            return Ok(db.Locations.Include(i => i.Franchise).OrderBy(o => o.Zip));
        }
    }
}