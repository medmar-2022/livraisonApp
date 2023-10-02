using System.ComponentModel.DataAnnotations;
using livrasonAPP.API.Models;

namespace livrasonApp.API.Models
{
    public class User {
        public int UserId { get; set; }
        [Required]
        public string StoreName { get; set; }
        [Required]
        public string Email { get; set; }
        [StringLength(8,MinimumLength=6,ErrorMessage="Choisir un password de 6 a 8 caractere")]
        [Required]
        public string Password { get; set; }
        public string Ville { get; set; }
        public string Telephone { get; set; }
        public string  RipUrl{ get; set; }
        public string CinUrl { get; set; }
       public ICollection<Coli> Colis { get; set; }
       public ICollection<Reclamation> Reclamations { get; set; }
    }
}