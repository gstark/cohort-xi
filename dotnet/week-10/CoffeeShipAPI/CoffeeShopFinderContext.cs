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
        {}

        public DbSet<Location> Locations { get; set; }
        public DbSet<Franchise> Franchises { get; set; }

    }
}
