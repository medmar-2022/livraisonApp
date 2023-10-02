using livrasonApp.API.Models;

namespace livrasonAPP.API.Data
{
    public interface IAuthRepository
    {
         Task<User> Register (User user);
         Task<User> Login(string email,string password);
         Task<bool> UserExists(string email);
    }
}