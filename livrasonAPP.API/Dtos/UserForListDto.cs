using livrasonAPP.API.Models;

namespace livrasonAPP.API.Dtos{
    public class UserForListDto{
         public int UserId { get; set; }
       
        public string StoreName { get; set; }
        public string Ville { get; set; }
        public string Telephone { get; set; }
        public ICollection<Coli> Colis { get; set; }
        public ICollection<Reclamation> Reclamations { get; set; }
    }
}