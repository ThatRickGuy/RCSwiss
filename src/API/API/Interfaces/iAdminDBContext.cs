using API.Models;
using System.Data.Entity;

namespace API.Interfaces
{
  interface IIAdminDBContext
  {
    DbSet<EventFormat> EventFormats { get; set; }
    DbSet<Scenario> Scenarios { get; set; }
    DbSet<Faction> Factions { get; set; }
    DbSet<Meta> Metas { get; set; }

    int SaveChanges();

  }
}
