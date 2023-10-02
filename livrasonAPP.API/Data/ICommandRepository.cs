using livrasonApp.API.Models;
using livrasonAPP.API.Models;

namespace livrasonAPP.API.Data{
    public interface ICommandRepository{
          
          Task<IEnumerable<User>> GetUsers();
         
         Task<User> GetUser(int id);
         

         Task<Coli> RegisterCommand (Coli coli);
         Task<Reclamation> RegisterReclam (Reclamation reclamation);
         Task<IEnumerable<User>> GetReclams();
          Task<User> GetReclam (int id );
         Task<IEnumerable<Coli>> GetColis();
         Task<IEnumerable<Reclamation>> GetRec();
         Task<Reclamation>GetReclamForAdmin(int id);
         Task<Coli> GetColi(int id);
          Task<bool> SaveAll();
    }
}