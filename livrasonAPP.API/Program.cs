using livrasonAPP.API.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Microsoft.OpenApi.Models;
using livrasonAPP.API.Helpers;
using AutoMapper;
using System.Text.Json.Serialization;

internal class Program
{
    private static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        // Add services to the container.
        builder.Services.AddDbContext<DataContext>(x => x.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection")));
        builder.Services.AddControllers().AddJsonOptions(x =>
                        x.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles);
        builder.Services.AddCors();
        builder.Services.AddTransient<TrialData>();
        builder.Services.AddAutoMapper(typeof(AutoMapperProfiles));
        builder.Services.AddScoped<IAuthRepository, AuthRepository>();
        builder.Services.AddScoped<ICommandRepository, CommandRepository>();


        builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                    .AddJwtBearer(Options =>
                    {
                        Options.TokenValidationParameters = new TokenValidationParameters
                        {
                            ValidateIssuerSigningKey = true,
                            IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(builder.Configuration.GetSection("AppSettings:Token").Value)),
                            ValidateIssuer = false,
                            ValidateAudience = false

                        };
                    });

        // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen(
            options =>
            {
                options.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
                {
                    Description = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIyIiwidW5pcXVlX25hbWUiOiJlbGFsaWFAZ21haWwuY29tIiwibmJmIjoxNjgwNzQ3NDA3LCJleHAiOjE2ODA4MzM4MDcsImlhdCI6MTY4MDc0NzQwN30.num5gK94mt-P46eRQag7LLpsJpfIVXTSCTFxXX84_1hBVQQGWEwloDWW4MN82i1HnMdfSgR5xIqYTm53jSnqqg",
                    In = ParameterLocation.Header,
                    Name = "Authorization",
                    BearerFormat = "JWT",

                    Type = SecuritySchemeType.Http,
                    Scheme = "bearer"
                });
                options.AddSecurityRequirement(new OpenApiSecurityRequirement
            {
        {
            new OpenApiSecurityScheme
            {
                Reference = new OpenApiReference
                {
                    Type=ReferenceType.SecurityScheme,
                    Id="Bearer"
                }
            },
            new string[]{}
        }
            });
            }
         );

        var app = builder.Build();
     




        // Configure the HTTP request pipeline.
        if (app.Environment.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI();
        }
           void MyClass(TrialData trialData)
    {
        trialData.TrialColis();
    }
        app.UseCors(x => x.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());
        app.UseAuthentication();
        //app.UseHttpsRedirection();


        app.UseAuthorization();

        app.MapControllers();

        app.Run();
    }

   
}