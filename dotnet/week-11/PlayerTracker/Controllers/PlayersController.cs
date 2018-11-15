using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace PlayerTracker.Controllers
{
    [Route("api/[controller]")]
    public class PlayersController : Controller
    {

        [HttpGet]
        public ActionResult GetAction(){
            var db = new PlayerTrackerContext();
            return Ok(db.Players.OrderByDescending(o => o.LastInitiative).ThenBy(t => t.PlayerName));
        }

        [HttpPost]
        public ActionResult Post([FromBody]Models.Player player)
        {
            var db = new PlayerTrackerContext();
            db.Players.Add(player);
            db.SaveChanges();
            return Ok(player);
        }

        [HttpDelete("{playerId}")]
        public ActionResult Delete([FromRoute]int playerId){
            var db = new PlayerTrackerContext();
            var player = db.Players.FirstOrDefault(f => f.Id == playerId);
            db.Players.Remove(player);
            db.SaveChanges();
            return Ok();
        }
    }
}