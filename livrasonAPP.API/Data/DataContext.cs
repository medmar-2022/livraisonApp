using livrasonApp.API.Models;
using livrasonAPP.API.Models;
using Microsoft.EntityFrameworkCore;
namespace livrasonAPP.API.Data
{
    public class DataContext:DbContext
    {
         public DataContext(DbContextOptions<DataContext> options) : base(options) { }
           public DbSet<User> Users { get; set; }
           public DbSet<Coli> Colis { get; set; }
            public DbSet<Reclamation> Reclamations { get; set; }
         /* protected override void OnModelCreating(ModelBuilder modelBuilder)
{
     
         modelBuilder.Entity<Reclamation>()
            .HasOne<User>(s => s.User)
            .WithMany(g => g.Reclamations)
            .HasPrincipalKey(g=>g.UserId);
            
       
        
}*/
    
    }
   
}