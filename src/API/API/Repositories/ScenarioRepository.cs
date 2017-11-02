using API.DataAccess;
using API.Interfaces;
using API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace API.Repositories
{
  public class ScenarioRepository : IScenarioRepository, IDisposable
  {

    private AdminDBContext _db = new AdminDBContext();

    public void CreateScenario(Scenario entity)
    {
      _db.Scenarios.Add(entity);
      _db.SaveChanges();
    }

    public void DeleteScenario(Guid id)
    {
      Scenario scenario = new Scenario() { ScenarioID = id };
      _db.Scenarios.Attach(scenario);
      _db.Scenarios.Remove(scenario);
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

    public IEnumerable<Scenario> GetAllScenarios()
    {
      return (from s in _db.Scenarios select s).ToArray();
    }

    public Scenario GetById(Guid id)
    {
      return (from s in _db.Scenarios where s.ScenarioID == id select s).FirstOrDefault();
    }

    public void UpdateScenario(Guid id, Scenario entity)
    {
      var currentEntity = _db.Scenarios.Find(id);
      if (currentEntity == null)
      {
        return;
      }

      _db.Entry<Scenario>(currentEntity).CurrentValues.SetValues(entity);
      _db.SaveChanges();
    }

  }
}
