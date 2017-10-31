using System;
using System.Collections.Generic;
using API.Models;

namespace API.Interfaces
{
  public interface IFactionRepository
  {
    void CreateFaction(Faction entity);
    void DeleteFaction(Guid id);
    IEnumerable<Faction> GetAllFactions();
    Faction GetById(Guid id);
    void UpdateFaction(Guid id, Faction entity);
  }
}
