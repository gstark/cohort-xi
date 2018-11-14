using Microsoft.EntityFrameworkCore.Migrations;

namespace CoffeeShipAPI.Migrations
{
    public partial class AddedReviewUserFeilds : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ReviewerName",
                table: "Reviews",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ReviewerPhoto",
                table: "Reviews",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UserId",
                table: "Reviews",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ReviewerName",
                table: "Reviews");

            migrationBuilder.DropColumn(
                name: "ReviewerPhoto",
                table: "Reviews");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Reviews");
        }
    }
}
