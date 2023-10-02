
using livrasonAPP.API.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using livrasonAPP.API.Models;
using livrasonAPP.API.Dtos;
using System.Security.Claims;
using Microsoft.EntityFrameworkCore;
using AutoMapper;
using livrasonApp.API.Models;

namespace livrasonAPP.API.Controllers{
   //[Authorize]
    [AllowAnonymous]
    [Route("api/[controller]")]
    [ApiController]
    public class CommandController:ControllerBase{
    

    
      private readonly ICommandRepository _repo;
        private readonly IMapper _mapper;
        
        public CommandController(ICommandRepository repo, IMapper mapper)
        {
            _mapper = mapper;
            _repo = repo;
           

        }
        [HttpPost("add")]
           public async Task<IActionResult>AddCommand(ColiForRegisterDto coliForRegisterDto )
        {
              
              var colii=new Coli{
                
              UserId= coliForRegisterDto.UserId,
              ClientName=coliForRegisterDto.ClientName,
              ClientTele=coliForRegisterDto.ClientTele,
              ClientVille=coliForRegisterDto.ClientVille,
              ClientAdress=coliForRegisterDto.ClientAdress,
              Montant=coliForRegisterDto.Montant,
              SituationColi="en attente",
              DateRamassage=DateTime.Now.Date
              };
              await _repo.RegisterCommand(colii);
              var userFromRepo = await _repo.GetUser(colii.UserId) ;
              var userToReturn =_mapper.Map<UserForListDto>(userFromRepo);
           
           
             
              //var coli = _mapper.Map<Coli>(coliForRegisterDto);
                
        userToReturn.Colis.Add(colii);
              
             //var coli = _mapper.Map<Coli>(coliForRegisterDto);
            // var colii=  _repo.RegisterCommand(coliForRegisterDto);
            return Ok();
                 

           
  
            // Retourne la réponse avec la commande ajoutée et le code de statut 201
        }
          [HttpGet]
        public async Task<IActionResult> GetUsers()
        {
            var users = await _repo.GetUsers();
            
            var usersToReturn = _mapper.Map<IEnumerable<UserForListDto>>(users);
            return Ok(usersToReturn);
        }
          
            /*var cid=int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);
            if ( userId !=cid)
                return Unauthorized();

                  var userFromRepo = await _repo.GetUser(userId);
                   var coli = _mapper.Map<Coli>(commandFoRegisterDto);
                   userFromRepo.Colis.Add(coli);
                    if (await _repo.SaveAll())
            {
                
                return Ok();
            }

            return BadRequest(" erreur  ");
            
          
        }*/
            [HttpGet("{id}")]
        public async Task<IActionResult> Getuser(int id)
    
        {

            var user=await _repo.GetUser(id);

            var userToReturn =_mapper.Map<UserForListDto>(user);
           // id = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value) ;
             
           
            return Ok(userToReturn);
        }
        [HttpGet("coli/{id}")]
        public async Task<IActionResult> Getcoli(int id)
        {
           /* var  userId=int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);
           if ( userId==null)
                return Unauthorized("fffff");*/
            var user=await _repo.GetUser(id);

            var userToReturn =_mapper.Map<UserForListDto>(user);
           // id = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value) ;
             var coli=userToReturn.Colis;
             var colis = from s in coli
                   select s;
                   colis=colis.OrderByDescending(s=>s.ColiId).ToList();
           //var SommColi=colis.Where(b=>b.SituationColi.Contains("livrée")).Count();
          
            return Ok(colis);
            
        }
        [HttpGet("count/{id}")]
        public async Task<IActionResult> Getcont(int id)
        {
             var user=await _repo.GetUser(id);

            var userToReturn =_mapper.Map<UserForListDto>(user);
            var coli=userToReturn.Colis;
            var count=new Count{
             SommColiLiv= coli.Where(b=>b.SituationColi.Contains("livrée")).Count(),
             SommColiAtt=coli.Where(b=>b.SituationColi.Contains("en attente")).Count(),
             SommColiFac=coli.Where(b=>b.SituationColi.Contains("facturée")).Count(),
             SommColiEnv=coli.Where(b=>b.SituationColi.Contains("envoyée")).Count(),
             SommColiRet=coli.Where(b=>b.SituationColi.Contains("retournée")).Count(),
            };
            
            // var v= new List<int>{SommColiLiv,SommColiAtt};l
             
            return Ok(count);
        }
    }
    
}
