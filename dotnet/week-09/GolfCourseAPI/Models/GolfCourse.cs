namespace GolfCourseAPI.Models
{
    public class GolfCourse
    {
        public int Id { get; set; }
        // Number of Holes
        public int NumberOfHoles { get; set; } = 18;
        // Par
        public int Par {get;set;} = 72;
        // Location 
        public string Location { get; set; }
        // Rank
        public string Rank { get; set; }

        // TotalYards
        public double TotalYards { get; set; } = 5800;
        
        // Name
        public string Name { get; set; }
    }
}