using API.Models;
using System;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Threading;
using System.Threading.Tasks;

namespace API.Interfaces
{
  interface IAdminDBContext: IDisposable
  {
    DbSet<EventFormat> EventFormats { get; set; }
    DbSet<Scenario> Scenarios { get; set; }
    DbSet<Faction> Factions { get; set; }
    DbSet<Meta> Metas { get; set; }

    int SaveChanges();
  }
}
