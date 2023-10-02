using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace livrasonAPP.API.Migrations
{
    /// <inheritdoc />
    public partial class DbCr : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    UserId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    StoreName = table.Column<string>(type: "TEXT", nullable: false),
                    Email = table.Column<string>(type: "TEXT", nullable: false),
                    Password = table.Column<string>(type: "TEXT", maxLength: 8, nullable: false),
                    Ville = table.Column<string>(type: "TEXT", nullable: false),
                    Telephone = table.Column<string>(type: "TEXT", nullable: false),
                    RipUrl = table.Column<string>(type: "TEXT", nullable: false),
                    CinUrl = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.UserId);
                });

            migrationBuilder.CreateTable(
                name: "Colis",
                columns: table => new
                {
                    ColiId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    DateRamassage = table.Column<DateTime>(type: "TEXT", nullable: false),
                    ClientName = table.Column<string>(type: "TEXT", nullable: false),
                    ClientTele = table.Column<string>(type: "TEXT", nullable: false),
                    ClientVille = table.Column<string>(type: "TEXT", nullable: false),
                    ClientAdress = table.Column<string>(type: "TEXT", nullable: true),
                    Montant = table.Column<int>(type: "INTEGER", nullable: false),
                    SituationColi = table.Column<string>(type: "TEXT", nullable: false),
                    DateLivraison = table.Column<DateTime>(type: "TEXT", nullable: false),
                    UserId = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Colis", x => x.ColiId);
                    table.ForeignKey(
                        name: "FK_Colis_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Reclamations",
                columns: table => new
                {
                    ReclamId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    DateRecl = table.Column<DateTime>(type: "TEXT", nullable: false),
                    TitreRecl = table.Column<string>(type: "TEXT", nullable: true),
                    MessRecl = table.Column<string>(type: "TEXT", nullable: true),
                    RepenseRecl = table.Column<string>(type: "TEXT", nullable: true),
                    Situation = table.Column<string>(type: "TEXT", nullable: false),
                    UserId = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Reclamations", x => x.ReclamId);
                    table.ForeignKey(
                        name: "FK_Reclamations_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Colis_UserId",
                table: "Colis",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Reclamations_UserId",
                table: "Reclamations",
                column: "UserId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Colis");

            migrationBuilder.DropTable(
                name: "Reclamations");

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
