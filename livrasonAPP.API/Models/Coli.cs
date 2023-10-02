using System.ComponentModel.DataAnnotations.Schema;
using livrasonApp.API.Models;

namespace livrasonAPP.API.Models{
    public class Coli {
        public int ColiId { get; set; }
        public DateTime DateRamassage{ get; set; }
        public string ClientName { get; set; }
       public string ClientTele{ get; set; }
       public string ClientVille { get; set; }
       public string? ClientAdress { get; set; }
       public int Montant { get; set; }
       public string SituationColi { get; set; }
       public DateTime DateLivraison { get; set; }
       public int UserId { get; set; }
       
       
     
    
  
       
        
    }
}