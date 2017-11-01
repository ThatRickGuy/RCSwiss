using API.DataAccess;
using API.Interfaces;
using API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace API.Repositories
{
  public class EventFormatRepository : IEventFormatRepository, IDisposable
  {

    private AdminDBContext _db = new AdminDBContext();    

    public void CreateEvent(EventFormat entity)
    {
      _db.EventFormats.Add(entity);
      _db.SaveChanges();
    }

    public void DeleteEvent(Guid id)
    {
      EventFormat customer = new EventFormat() { FormatID = id };
      _db.EventFormats.Attach(customer);
      _db.EventFormats.Remove(customer);
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

    public IEnumerable<EventFormat> GetAllEvents()
    {
      return (from ef in _db.EventFormats select ef).ToArray();
    }

    public EventFormat GetById(Guid id)
    {
      return (from ef in _db.EventFormats where ef.FormatID == id select ef).FirstOrDefault();
    }

    public void UpdateEvent(Guid id, EventFormat entity)
    {
      var currentEntity = _db.EventFormats.Find(id);
      if (currentEntity == null)
      {
        return;
      }

      _db.Entry<EventFormat>(currentEntity).CurrentValues.SetValues(entity);
      _db.SaveChanges();
    }
  }
}
