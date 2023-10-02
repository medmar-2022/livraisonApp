using System.Collections.Generic;
using System.Threading.Tasks;
using livrasonApp.API.Models;
using livrasonAPP.API.Models;
using Microsoft.EntityFrameworkCore;


namespace livrasonAPP.API.Data
{
    public class CommandRepository :ICommandRepository
    {
        private readonly DataContext _context;
        public CommandRepository(DataContext context)
        {
            _context = context;

        }
        public void Add<T>(T entity) where T : class 
        {
           _context.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }

        public async Task<IEnumerable<Reclamation>> GetRec()
        {
            var reclams=await _context.Reclamations.ToListAsync();
           return reclams;
        }

        public Task<Coli> GetColi(int id)
        {
            var coli=_context.Colis.FirstOrDefaultAsync(c=>c.ColiId==id);
            return coli;
        }

        public async Task<IEnumerable<Coli>> GetColis()
        {
           var colis=await _context.Colis.ToListAsync();
           return colis;
        }

        public async Task<User> GetReclam(int id)
        {
            
              var reclam = await _context.Users.Include(u=>u.Reclamations).FirstOrDefaultAsync(u=>u.UserId==id);
            return reclam;
        }

        public async Task<IEnumerable<Reclamation>> GetReclams()
        {
            var reclams = await _context.Reclamations.ToListAsync();
           return reclams ;
        }

        public async Task<User> GetUser(int id)
        {
              var user = await _context.Users.Include(u=>u.Colis).FirstOrDefaultAsync(u=>u.UserId==id);
            return user;
        }

        public async Task<IEnumerable<User>> GetUsers()
        {
            var users = await _context.Users.Include(u=>u.Colis).ToListAsync();
           return users;
        }

        public async Task<Coli> RegisterCommand(Coli coli)
        {
           
        
              await _context.Colis.AddAsync(coli);
            await _context.SaveChangesAsync();
            return coli;
        

        }

        public async Task<Reclamation> RegisterReclam(Reclamation reclamation)
        {
           await _context.Reclamations.AddAsync(reclamation);
            await _context.SaveChangesAsync();
            return reclamation;  
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync()>0;
        }

        Task<IEnumerable<User>> ICommandRepository.GetReclams()
        {
            throw new NotImplementedException();
        }

        public async Task<Reclamation> GetReclamForAdmin(int id)
        {
           var reclam= await _context.Reclamations.FirstOrDefaultAsync(u=>u.ReclamId==id);
                return reclam;
        }

       
    }
}