using AutoMapper;
using livrasonAPP.API.Data;
using livrasonAPP.API.Dtos;
using livrasonAPP.API.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace livrasonAPP.API.Controllers{
     //[Authorize]
    [AllowAnonymous]
    [Route("api/[controller]")]
    [ApiController]
    public class ReclamController:ControllerBase{
        private readonly ICommandRepository _repo;
        private readonly IMapper _mapper;
        private readonly IWebHostEnvironment _webHostEnvironment;
        private readonly IConfiguration _configuration;
        private readonly DataContext _context;
        public ReclamController(ICommandRepository repo, IMapper mapper,IWebHostEnvironment webHostEnvironment,IConfiguration configuration,DataContext context)
        {
            _mapper = mapper;
            _repo = repo;
           _webHostEnvironment=webHostEnvironment;
           _configuration=configuration;
           _context=context;

        }
        [HttpPost("add")]
        public async Task<IActionResult>AddReclam(ReclamForRegisterDto reclamForRegisterDto){
         var reclam=new Reclamation{
            DateRecl=DateTime.Today,
            TitreRecl =reclamForRegisterDto.TitreRecl,
            MessRecl=reclamForRegisterDto.MessRecl,
            UserId =reclamForRegisterDto.UserId,
            Situation="en traitement"
         };
         await _repo.RegisterReclam(reclam);
              var userFromRepo = await _repo.GetReclam(reclam.UserId) ;
              
              userFromRepo.Reclamations.Add(reclam);
              return Ok();
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetUserReclams(int id)
    
        {

            var user=await _repo.GetReclam(id);

            var userToReturn =_mapper.Map<UserForListDto>(user);
           // id = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value) ;
            var reclamUser=userToReturn.Reclamations; 
           
            return Ok(reclamUser);
        }
         [HttpGet("reclams/{id}")]
        public async Task<IActionResult> Getreclams(int id)
        {
           /* var  userId=int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);
           if ( userId==null)
                return Unauthorized("fffff");*/
            var user=await _repo.GetReclam(id);

           // var userToReturn =_mapper.Map<UserForListDto>(user);
           // id = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value) ;
             var coli=user.Reclamations;
           
            return Ok(user);
        }
       
        [HttpGet()]
        public IEnumerable<Coli>GetContacts()
        {
            List<Coli>colis=new List<Coli>();
            using(StreamReader reader=new StreamReader($"{_webHostEnvironment.ContentRootPath}/Data/ColiTrialData.json"))
            {
                colis=JsonConvert.DeserializeObject<List<Coli>>(reader.ReadToEnd());
                  foreach (var coli in colis)
            {
                
                _context.AddAsync(coli);

            }
            _context.SaveChanges();  
               return colis;
            }
        }
    }
}