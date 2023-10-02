namespace livrasonAPP.API.Dtos
{
   public class ColiForUpdateDto{
   
         public string ClientName { get; set; }
       public string ClientTele{ get; set; }
       public string ClientVille { get; set; }
       public string? ClientAdress { get; set; }
        public string SituationColi { get; set; }
       public DateTime DateLivraison { get; set; }
       public int Montant { get; set; }
   } 
}