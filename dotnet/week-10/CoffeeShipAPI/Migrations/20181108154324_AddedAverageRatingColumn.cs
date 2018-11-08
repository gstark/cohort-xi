using Microsoft.EntityFrameworkCore.Migrations;

namespace CoffeeShipAPI.Migrations
{
    public partial class AddedAverageRatingColumn : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<float>(
                name: "AverageRating",
                table: "Locations",
                nullable: false,
                defaultValue: 0f);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AverageRating",
                table: "Locations");
        }
    }
}
