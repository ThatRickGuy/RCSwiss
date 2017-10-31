using API.Interfaces;
using API.Models;
using System.Data.Entity;

namespace API.DataAccess
{
  public class AdminDBContext : DbContext, IIAdminDBContext
  {
    public DbSet<EventFormat> EventFormats { get; set; }
    public DbSet<Scenario> Scenarios { get; set; }
    public DbSet<Faction> Factions { get; set; }
    public DbSet<Meta> Metas { get; set; }

    public AdminDBContext()
      : base("RCSwissAdmin")
    {
    }
  }
}
