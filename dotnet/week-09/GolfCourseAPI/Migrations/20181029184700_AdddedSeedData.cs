using Microsoft.EntityFrameworkCore.Migrations;

namespace GolfCourseAPI.Migrations
{
    public partial class AdddedSeedData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "GolfCourse",
                columns: new[] { "Id", "Location", "Name", "NumberOfHoles", "Par", "Rank", "TotalYards" },
                values: new object[] { 12, null, "Harrisburg", 18, 72, null, 5800.0 });

            migrationBuilder.InsertData(
                table: "GolfCourse",
                columns: new[] { "Id", "Location", "Name", "NumberOfHoles", "Par", "Rank", "TotalYards" },
                values: new object[] { 11, null, "Boise", 18, 72, null, 5800.0 });

            migrationBuilder.InsertData(
                table: "GolfCourse",
                columns: new[] { "Id", "Location", "Name", "NumberOfHoles", "Par", "Rank", "TotalYards" },
                values: new object[] { 10, null, "New Orleans", 18, 72, null, 5800.0 });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "GolfCourse",
                keyColumn: "Id",
                keyValue: 10);

            migrationBuilder.DeleteData(
                table: "GolfCourse",
                keyColumn: "Id",
                keyValue: 11);

            migrationBuilder.DeleteData(
                table: "GolfCourse",
                keyColumn: "Id",
                keyValue: 12);
        }
    }
}
