using System;
using CoffeeShipAPI.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace CoffeeShipAPI
{
    public partial class CoffeeShopFinderContext : DbContext
    {
        public CoffeeShopFinderContext()
        {
        }

        public CoffeeShopFinderContext(DbContextOptions<CoffeeShopFinderContext> options)
            : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseNpgsql("server=localhost;database=CoffeeShopFinder");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Franchies
            modelBuilder.Entity<Franchise>().HasData(
                new Franchise { Id = -1, Brand = "StarBucks", BrandColor = Colors.GREEN, IsLocal = false },
                new Franchise { Id = -2, Brand = "Kahwa", BrandColor = Colors.YELLOW, IsLocal = true },
                new Franchise { Id = -3, Brand = "Bikery", BrandColor = Colors.BLACK, IsLocal = true }
            );
            /// locations
            modelBuilder.Entity<Location>().HasData(
                new Location { FranchiseId = -1, Address = "123 Fake St", City = "Tampa", Zip = "12345", Id = -1, PhoneNumber = "8138675309", PriceRange = PriceRange.MEDIUM, State = "FL", ImageUrl = "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png" },
                new Location { FranchiseId = -1, Address = "456 Over There Ave", City = "Tampa", Zip = "12345", Id = -2, PhoneNumber = "5555555555", PriceRange = PriceRange.MEDIUM,  State = "FL", ImageUrl = "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png" },
                new Location { FranchiseId = -1, Address = "789 Nope Blvd", City = "St Pete", Zip = "34135", Id = -3, PhoneNumber = "4563452341", PriceRange = PriceRange.MEDIUM, State = "FL", ImageUrl = "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png" },
                new Location { FranchiseId = -2, Address = "123 Fake St", City = "Tampa", Zip = "33645", Id = -4, PhoneNumber = "8138675309", PriceRange = PriceRange.LOW, State = "FL", ImageUrl = "https://2015.tampa.wordcamp.org/files/2015/09/KahwaFinal_noBean-1000x991.jpg" },
                new Location { FranchiseId = -2, Address = "123 Fake St", City = "Tampa", Zip = "12345", Id = -5, PhoneNumber = "8138675309", PriceRange = PriceRange.LOW, State = "FL", ImageUrl = "https://2015.tampa.wordcamp.org/files/2015/09/KahwaFinal_noBean-1000x991.jpg" },
                new Location { FranchiseId = -3, Address = "123 Fake St", City = "St Pete", Zip = "33645", Id = -6, PhoneNumber = "8138675309", PriceRange = PriceRange.HIGH, State = "FL", ImageUrl = "https://s3-media2.fl.yelpcdn.com/bphoto/_-S7SNvGJFEPNMrRvxAgPQ/348s.jpg" }

            );
        }

        public DbSet<Location> Locations { get; set; }
        public DbSet<Franchise> Franchises { get; set; }
        public DbSet<Review> Reviews { get; set; }
        public DbSet<Rating> Ratings { get; set; }

    }
}
