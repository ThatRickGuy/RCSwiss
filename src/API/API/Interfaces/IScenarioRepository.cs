using System;
using System.Collections.Generic;
using API.Models;

namespace API.Interfaces
{
  public interface IScenarioRepository
  {
    void CreateScenario(Scenario entity);
    void DeleteScenario(Guid id);
    IEnumerable<Scenario> GetAllScenarios();
    Scenario GetById(Guid id);
    void UpdateScenario(Guid id, Scenario entity);
  }
}
