using livrasonAPP.API.Models;
using Newtonsoft.Json;

namespace livrasonAPP.API.Data{
       public class TrialData{
        private readonly DataContext _context;
        public TrialData(DataContext context)
        {
            _context = context;

        }
        public void TrialColis()
        {
          var coliData = System.IO.File.ReadAllText("Data/ColiTrialData.json");
            var colis = JsonConvert.DeserializeObject<List<Coli>>(coliData);
            foreach (var coli in colis)
            {
                
                _context.Add(coli);

            }
            _context.SaveChanges();  
        }

       }
}