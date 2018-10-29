using System;
using GolfCourseAPI.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace GolfCourseAPI
{
    public partial class GolfCourseContext : DbContext
    {
        public GolfCourseContext()
        {
        }

        public GolfCourseContext(DbContextOptions<GolfCourseContext> options)
            : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseNpgsql("server=localhost;database=GolfCourses");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<GolfCourse>().HasData(

                new GolfCourse{ Id =12, Name = "Harrisburg"}, 
                new GolfCourse{ Id =11, Name = "Boise"}, 
                new GolfCourse{ Id =10, Name = "New Orleans"}
            );

        }


        public DbSet<GolfCourse> GolfCourse { get; set; }
    }
}
