﻿// <auto-generated />
using GolfCourseAPI;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace GolfCourseAPI.Migrations
{
    [DbContext(typeof(GolfCourseContext))]
    [Migration("20181029184700_AdddedSeedData")]
    partial class AdddedSeedData
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn)
                .HasAnnotation("ProductVersion", "2.1.4-rtm-31024")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            modelBuilder.Entity("GolfCourseAPI.Models.GolfCourse", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Location");

                    b.Property<string>("Name");

                    b.Property<int>("NumberOfHoles");

                    b.Property<int>("Par");

                    b.Property<string>("Rank");

                    b.Property<double>("TotalYards");

                    b.HasKey("Id");

                    b.ToTable("GolfCourse");

                    b.HasData(
                        new { Id = 12, Name = "Harrisburg", NumberOfHoles = 18, Par = 72, TotalYards = 5800.0 },
                        new { Id = 11, Name = "Boise", NumberOfHoles = 18, Par = 72, TotalYards = 5800.0 },
                        new { Id = 10, Name = "New Orleans", NumberOfHoles = 18, Par = 72, TotalYards = 5800.0 }
                    );
                });
#pragma warning restore 612, 618
        }
    }
}
