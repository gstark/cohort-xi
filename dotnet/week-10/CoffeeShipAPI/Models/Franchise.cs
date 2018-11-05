using System.Collections.Generic;

namespace CoffeeShipAPI.Models
{
    public class Franchise
    {
        public int Id { get; set; }

        public string Brand { get; set; }

        public bool IsLocal { get; set; }
        public Colors BrandColor { get; set; }

        public List<Location> Locations { get; set; } = new List<Location>();
    }
}