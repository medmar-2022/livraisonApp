
using AutoMapper;
using livrasonAPP.API.Data;
using livrasonAPP.API.Dtos;
using livrasonAPP.API.Models;
using Microsoft.AspNetCore.Mvc;

namespace livrasonAPP.API.Controllers
{
     [Route("api/[controller]")]
    [ApiController]
    public class AdminController:ControllerBase{
         private readonly ICommandRepository _repo;
        private readonly IMapper _mapper;
         public AdminController(ICommandRepository repo, IMapper mapper)
        {
            _mapper = mapper;
            _repo = repo;
           

        }
[HttpPut("{id}")]
public async Task<IActionResult>UpdateColi(int id,ColiForUpdateDto coliForUpdateDto){
var coli=await _repo.GetColi(id);
_mapper.Map(coliForUpdateDto,coli);
if(await _repo.SaveAll()){
    return Ok();
}
throw new Exception("erreur data base");
}

[HttpPut("updateuser/{id}")]
public async Task<IActionResult>UpdateUser(int id,UserForUpdateDto userForUpdateDto){
var user=await _repo.GetUser(id);
_mapper.Map(userForUpdateDto,user);
if(await _repo.SaveAll()){
    return Ok();
}
throw new Exception("erreur data base");
}

[HttpPut("updatereclam/{id}")]
public async Task<IActionResult>UpdateReclam(int id,ReclamForUpdateDto reclamForUpdateDto){
var reclam=await _repo.GetReclamForAdmin(id);
_mapper.Map(reclamForUpdateDto,reclam);
if(await _repo.SaveAll()){
    return Ok();
}
throw new Exception("erreur data base");
}

[HttpGet("getcolis")]
public async Task<IActionResult>GetColis(){
    var colis=await _repo.GetColis();
     var colisToReturn = from s in colis
                   select s;
                   colis=colis.OrderByDescending(s=>s.ColiId).ToList();
     return Ok(colis) ;    
    
}
[HttpGet("getcount")]
 public async Task<IActionResult> Getcont()
        {
          var coli=await _repo.GetColis();
        
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
        [HttpGet("data")]
        public async Task<IActionResult> Getdata()
        {
            
           var coli=await _repo.GetColis();
          
            var d=DateTime.Now.Month +1;
            var v1= new List<int>{};
            var v2= new List<int>{};
             var v3= new List<int>{};
            for (int i=1;i<d ;i++){
              
                v1.Add(coli.Where(b=>b.SituationColi.Contains("livrée"))
              .Where(b=>b.DateRamassage.Month == i).Count());
              v2.Add(coli.Where(b=>b.SituationColi.Contains("facturée"))
              .Where(b=>b.DateRamassage.Month == i).Count());
              v3.Add(coli.Where(b=>b.SituationColi.Contains("retournée"))
              .Where(b=>b.DateRamassage.Month == i).Count());
            }
            var dashbordData=new DashbordData{
              CountLivData=v1,
              CountFacData=v2,
              CountRetData=v3,
             
            };
            
            return Ok(dashbordData);
            
            }
            [HttpGet("users")]
            public async Task<IActionResult>GetUsers(){
                var users=await _repo.GetUsers();
                var usersToReturn=_mapper.Map<IEnumerable<UsersForAdminDto>>(users);
                return Ok(usersToReturn);

            }
            [HttpGet("reclamation")]
            public async Task<IActionResult>Getreclams(){
              var reclams=await _repo.GetRec();
               var reclamsToReturn = from s in reclams
                   select s;
                   reclams=reclams.OrderByDescending(s=>s.ReclamId).ToList();
     return Ok(reclams) ;    
            }
        }
    }
