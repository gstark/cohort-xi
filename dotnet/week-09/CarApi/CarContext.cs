using System;
using CarApi.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace CarApi
{
    public partial class CarContext : DbContext
    {
        public CarContext()
        {
        }

        public CarContext(DbContextOptions<CarContext> options)
            : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseNpgsql("server=localhost;database=CarsDatabase");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Car>().HasData(
                new Car { Id = 1, Color = "Blue", Make = "Benz", Model="Mercedes", Price = 50000, Year=2019},
                new Car { Id = 2, Color = "Red", Make = "BMW", Model="M3", Price = 17000, Year=1999},
                new Car { Id = 3, Color = "Green", Make = "Moz", Model="Turbo", Price = 35000, Year=1988},
                new Car { Id = 4, Color = "Shiny", Make = "Toyota", Model="Camry", Price = 75000, Year=1967}
            );
        }

        public DbSet<Car> Car { get; set; }
    }
}
