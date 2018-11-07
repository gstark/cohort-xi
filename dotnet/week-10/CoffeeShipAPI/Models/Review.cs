using System;

namespace CoffeeShipAPI.Models
{
    public class Review
    {
        public int Id { get; set; }
        public string Content { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.Now;

        public int LocationId { get; set; }
        public Location Location { get; set; }

    }
}