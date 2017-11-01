using API.DataAccess;
using API.Interfaces;
using API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace API.Repositories
{
  public class FactionRepository : IFactionRepository, IDisposable
  {

    private AdminDBContext _db = new AdminDBContext();

    public void CreateFaction(Faction entity)
    {
      _db.Factions.Add(entity);
      _db.SaveChanges();
    }

    public void DeleteFaction(Guid id)
    {
      var faction = new Faction() { FactionID = id };
      _db.Factions.Attach(faction);
      _db.Factions.Remove(faction);
      _db.SaveChanges();
    }

    public void Dispose()
    {
      if (_db != null)
      {
        _db.Dispose();
        _db = null;
      }
    }

    public IEnumerable<Faction> GetAllFactions()
    {
      return (from f in _db.Factions select f).ToArray();
    }

    public Faction GetById(Guid id)
    {
      return (from f in _db.Factions where f.FactionID == id select f).FirstOrDefault();
    }

    public void UpdateFaction(Guid id, Faction entity)
    {
      var currentEntity = _db.Factions.Find(id);
      if (currentEntity == null)
      {
        return;
      }

      _db.Entry<Faction>(currentEntity).CurrentValues.SetValues(entity);
      _db.SaveChanges();
    }

  }
}
