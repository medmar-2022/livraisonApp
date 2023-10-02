using livrasonApp.API.Models;
using livrasonAPP.API.Models;

namespace livrasonAPP.API.Dtos{
    public class UserForDetailsDto{

       public int UserId { get; set; }
       
        public string StoreName { get; set; }
        public string Ville { get; set; }
        public string Telephone { get; set; }
          public ICollection<ColiForRegisterDto> Colis { get; set; }
       
    
       
    }
}