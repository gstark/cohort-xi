namespace CoffeeShipAPI.Models
{
    public class Rating
    {
        public int Id { get; set; }
        public int Score { get; set; }
        public int LocationId { get; set; }
        public Location Location { get; set; }
    }
}