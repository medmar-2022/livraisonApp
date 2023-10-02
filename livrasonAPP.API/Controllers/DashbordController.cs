using AutoMapper;
using livrasonAPP.API.Data;
using livrasonAPP.API.Dtos;
using livrasonAPP.API.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace livrasonAPP.API.Controllers{
     [AllowAnonymous]
    [Route("api/[controller]")]
    [ApiController]
    public class DashbordController:ControllerBase{
        private readonly ICommandRepository _repo;
        private readonly IMapper _mapper;
          public DashbordController(ICommandRepository repo, IMapper mapper)
        {
            _mapper = mapper;
            _repo = repo;
           

        }
         [HttpGet("count/{id}")]
        public async Task<IActionResult> Getcont(int id)
        {
             var user=await _repo.GetUser(id);

            var userToReturn =_mapper.Map<UserForListDto>(user);
            var coli=userToReturn.Colis;
          //var dashbordData=new DashbordData{};
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
             [HttpGet("{id}")]
        public async Task<IActionResult> GetcontPer(int id)
        {
             var user=await _repo.GetUser(id);

            var userToReturn =_mapper.Map<UserForListDto>(user);
            var coli=userToReturn.Colis;
            var count=new Count{
             SommColiLiv= coli.Where(b=>b.SituationColi.Contains("livrée"))
             .Where(b=>b.DateRamassage.Month == DateTime.Now.Month  ).Count(),
             SommColiAtt=coli.Where(b=>b.SituationColi.Contains("en attente"))
             .Where(b=>b.DateRamassage.Month == DateTime.Now.Month  ).Count(),
             SommColiFac=coli.Where(b=>b.SituationColi.Contains("facturée")).
             Where(b=>b.DateRamassage.Month == DateTime.Now.Month  ).Count(),
             SommColiEnv=coli.Where(b=>b.SituationColi.Contains("envoyée")).
             Where(b=>b.DateRamassage.Month == DateTime.Now.Month  ).Count(),
             SommColiRet=coli.Where(b=>b.SituationColi.Contains("retournée")).
             Where(b=>b.DateRamassage.Month == DateTime.Now.Month  ).Count(),
            SomCount=coli.Where(b=>b.DateRamassage.Month == DateTime.Now.Month  ).Count()
            };
            
            // var v= new List<int>{SommColiLiv,SommColiAtt};l
             
            return Ok(count);
        }

           
           
            // var v= new List<int>{SommColiLiv,SommColiAtt};
             
            
        }

      
    }
