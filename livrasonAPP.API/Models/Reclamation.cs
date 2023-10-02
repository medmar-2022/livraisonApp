
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using livrasonApp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace livrasonAPP.API.Models{
    
    
    public class Reclamation {
         [Key]
        public int ReclamId { get; set; }
        public DateTime DateRecl{ get; set; }
        public string ? TitreRecl { get; set; }
       public string ? MessRecl{ get; set; }
       public string ? RepenseRecl { get; set; }
       public string Situation { get; set; }
       public int UserId { get; set; }
      
      
       
       
    
  
       
        
    }
}