using System;

namespace CoffeeShipAPI.Models
{
    public class Review
    {
        public int Id { get; set; }
        public string Content { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.Now;

        public string UserId { get; set; }
        public string ReviewerName { get; set; }
        public string ReviewerPhoto { get; set; }

        public int LocationId { get; set; }
        public Location Location { get; set; }

    }
}