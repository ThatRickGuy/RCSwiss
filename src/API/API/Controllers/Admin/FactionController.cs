using API.Interfaces;
using API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace API.Controllers.Admin
{
  public class FactionController : ApiController
  {

    IFactionRepository _FactionRepository;

    public FactionController(IFactionRepository factionRepository)
    {
      _FactionRepository = factionRepository;
    }

    // GET: api/Faction
    public IEnumerable<Faction> Get()
    {
      return _FactionRepository.GetAllFactions();
    }

    // GET: api/Faction/5
    public Faction Get(string id)
    {
      return _FactionRepository.GetById(new Guid(id));
    }

    // POST: api/Faction
    public void Post([FromBody]Faction value)
    {
      _FactionRepository.CreateFaction(value);
    }

    // PUT: api/Faction/5
    public void Put(string id, [FromBody]Faction value)
    {
      _FactionRepository.UpdateFaction(new Guid(id), value);
    }

    // DELETE: api/Faction/5
    public void Delete(string id)
    {
      _FactionRepository.DeleteFaction(new Guid(id));
    }
  }
}
