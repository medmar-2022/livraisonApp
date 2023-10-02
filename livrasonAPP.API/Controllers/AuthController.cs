
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using livrasonApp.API.Models;
using livrasonAPP.API.Data;
using livrasonAPP.API.Dtos;
using Microsoft.AspNetCore.Authorization;

using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace livrasonAPP.API.Controllers{
  [AllowAnonymous]
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController:ControllerBase{
         private readonly IAuthRepository _repo;
         private readonly IConfiguration _config;
        public AuthController(IAuthRepository repo, IConfiguration config)
        {
            _config = config;
            _repo = repo;

        }
         [HttpPost("register")]
        public async Task<IActionResult> Register(UserForRegisterDto userForRegisterDto)
        {

            
            if (await _repo.UserExists(userForRegisterDto.Email))
                return BadRequest("ce email exicte déja");
            var userToCreate = new User
            {
                Email= userForRegisterDto.Email,
                Password=userForRegisterDto.Password,
                StoreName=userForRegisterDto.StoreName,
                Ville=userForRegisterDto.Ville,
                Telephone=userForRegisterDto.Telephone,
                RipUrl=userForRegisterDto.RipUrl,
                CinUrl=userForRegisterDto.CinUrl
            };

            var CreatedUser = await _repo.Register(userToCreate);
            return StatusCode(201);
        }
           [HttpPost("login")]
        public async Task<IActionResult> Login(UserForLoginDto userForLoginDto)
        {
              var userFromRepo = await _repo.Login(userForLoginDto.email, userForLoginDto.password);
            if (userFromRepo == null) return Unauthorized();
            var claims = new[]{
                new Claim(ClaimTypes.NameIdentifier,userFromRepo.UserId.ToString()),
                new Claim(ClaimTypes.Name,userFromRepo.StoreName)
            };
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config.GetSection("AppSettings:Token").Value));
            var creds= new SigningCredentials(key,SecurityAlgorithms.HmacSha512);
               var tokenDescripror = new SecurityTokenDescriptor{
            Subject = new ClaimsIdentity(claims),
            Expires=DateTime.Now.AddDays(1),
            SigningCredentials=creds
            };
              var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.CreateToken(tokenDescripror);
            return Ok(new{
                token=tokenHandler.WriteToken(token)
            });
        }
        }
    }
