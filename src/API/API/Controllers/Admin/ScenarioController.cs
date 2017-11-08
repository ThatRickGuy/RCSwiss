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
  public class ScenarioController : ApiController
  {
    IScenarioRepository _scenarioRepository;

    public ScenarioController(IScenarioRepository scenarioRepository)
    {
      _scenarioRepository = scenarioRepository;
    }

    // GET: api/Scenario
    public IEnumerable<Scenario> Get()
    {
      return _scenarioRepository.GetAllScenarios();
    }

    // GET: api/Scenario/5
    public Scenario Get(string id)
    {
      return _scenarioRepository.GetById(new Guid(id));
    }

    // POST: api/Scenario
    public void Post([FromBody]Scenario value)
    {
      _scenarioRepository.CreateScenario(value);
    }

    // PUT: api/Scenario/5
    public void Put(string id, [FromBody]Scenario value)
    {
      _scenarioRepository.UpdateScenario(new Guid(id), value);
    }

    // DELETE: api/Scenario/5
    public void Delete(string id)
    {
      _scenarioRepository.DeleteScenario(new Guid(id));
    }
  }
}
