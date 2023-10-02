using livrasonApp.API.Models;
using livrasonAPP.API.Dtos;
using Microsoft.EntityFrameworkCore;

namespace livrasonAPP.API.Data{
    public class AuthRepository : IAuthRepository
    {
         private readonly DataContext _context;
             public AuthRepository(DataContext context)
        {
            _context = context;

        }
        public async Task<User> Login(string email, string password)
        {
             var user = await _context.Users.FirstOrDefaultAsync(x =>x.Email == email && x.Password==password);
             
            if(user==null)return null;
            
            return user;
        }

        public async Task<User> Register(User user)
        {
              await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();
            return user;
        }

        public async Task<bool> UserExists(string email)
        {
              if(await _context.Users.AnyAsync(x=>x.Email==email))return true;
            return false;
        }
    }
}