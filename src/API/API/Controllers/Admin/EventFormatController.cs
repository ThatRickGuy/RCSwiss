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
  public class EventFormatController : ApiController
  {

    IEventFormatRepository _EventFormatRepository;

    public EventFormatController(IEventFormatRepository EventFormatRepository)
    {
      _EventFormatRepository = EventFormatRepository;
    }

    // GET: api/EventFormat
    public IEnumerable<EventFormat> Get()
    {

      return _EventFormatRepository.GetAllEvents();
    }

    // GET: api/EventFormat/5
    public EventFormat Get(string id)
    {
      return _EventFormatRepository.GetById(new Guid(id));
      }

    // POST: api/EventFormat
    public void Post([FromBody]EventFormat value)
    {
      _EventFormatRepository.CreateEvent(value);
    }

    // PUT: api/EventFormat/5
    public void Put(string id, [FromBody]EventFormat value)
    {
      _EventFormatRepository.UpdateEvent(new Guid(id),value);
    }

    // DELETE: api/EventFormat/5
    public void Delete(string id)
    {
      _EventFormatRepository.DeleteEvent(new Guid(id));
    }
  }
}
