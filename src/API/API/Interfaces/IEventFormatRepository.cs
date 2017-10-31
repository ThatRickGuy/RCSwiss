using System;
using System.Collections.Generic;
using API.Models;

namespace API.Interfaces
{
  public interface IEventFormatRepository
  {
    void CreateEvent(EventFormat entity);
    void DeleteEvent(Guid id);
    IEnumerable<EventFormat> GetAllEvents();
    EventFormat GetById(Guid id);
    void UpdateEvent(Guid id, EventFormat entity);
  }
}
