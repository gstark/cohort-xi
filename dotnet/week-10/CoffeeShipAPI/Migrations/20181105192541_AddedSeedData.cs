using Microsoft.EntityFrameworkCore.Migrations;

namespace CoffeeShipAPI.Migrations
{
    public partial class AddedSeedData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Franchises",
                columns: new[] { "Id", "Brand", "BrandColor", "IsLocal" },
                values: new object[] { -1, "StarBucks", 3, false });

            migrationBuilder.InsertData(
                table: "Franchises",
                columns: new[] { "Id", "Brand", "BrandColor", "IsLocal" },
                values: new object[] { -2, "Kahwa", 2, true });

            migrationBuilder.InsertData(
                table: "Franchises",
                columns: new[] { "Id", "Brand", "BrandColor", "IsLocal" },
                values: new object[] { -3, "Bikery", 7, true });

            migrationBuilder.InsertData(
                table: "Locations",
                columns: new[] { "Id", "Address", "City", "FranchiseId", "ImageUrl", "PhoneNumber", "PriceRange", "Rating", "State", "Zip" },
                values: new object[,]
                {
                    { -1, "123 Fake St", "Tampa", -1, "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png", "8138675309", 1, 1, "FL", "12345" },
                    { -2, "456 Over There Ave", "Tampa", -1, "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png", "5555555555", 1, 1, "FL", "12345" },
                    { -3, "789 Nope Blvd", "St Pete", -1, "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png", "4563452341", 1, 1, "FL", "34135" },
                    { -4, "123 Fake St", "Tampa", -2, "https://2015.tampa.wordcamp.org/files/2015/09/KahwaFinal_noBean-1000x991.jpg", "8138675309", 0, 3, "FL", "33645" },
                    { -5, "123 Fake St", "Tampa", -2, "https://2015.tampa.wordcamp.org/files/2015/09/KahwaFinal_noBean-1000x991.jpg", "8138675309", 0, 3, "FL", "12345" },
                    { -6, "123 Fake St", "St Pete", -3, "https://s3-media2.fl.yelpcdn.com/bphoto/_-S7SNvGJFEPNMrRvxAgPQ/348s.jpg", "8138675309", 2, 5, "FL", "33645" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Locations",
                keyColumn: "Id",
                keyValue: -6);

            migrationBuilder.DeleteData(
                table: "Locations",
                keyColumn: "Id",
                keyValue: -5);

            migrationBuilder.DeleteData(
                table: "Locations",
                keyColumn: "Id",
                keyValue: -4);

            migrationBuilder.DeleteData(
                table: "Locations",
                keyColumn: "Id",
                keyValue: -3);

            migrationBuilder.DeleteData(
                table: "Locations",
                keyColumn: "Id",
                keyValue: -2);

            migrationBuilder.DeleteData(
                table: "Locations",
                keyColumn: "Id",
                keyValue: -1);

            migrationBuilder.DeleteData(
                table: "Franchises",
                keyColumn: "Id",
                keyValue: -3);

            migrationBuilder.DeleteData(
                table: "Franchises",
                keyColumn: "Id",
                keyValue: -2);

            migrationBuilder.DeleteData(
                table: "Franchises",
                keyColumn: "Id",
                keyValue: -1);
        }
    }
}
