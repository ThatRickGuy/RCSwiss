using API.DataAccess;
using API.Interfaces;
using API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace API.Repositories
{
  public class MetaRepository : IMetaRepository, IDisposable
  {

    private AdminDBContext _db = new AdminDBContext();

    public void CreateMeta(Meta entity)
    {
      _db.Metas.Add(entity);
      _db.SaveChanges();
    }

    public void DeleteMeta(Guid id)
    {
      var meta = new Meta() { MetaID = id };
      _db.Metas.Attach(meta);
      _db.Metas.Remove(meta);
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

    public IEnumerable<Meta> GetAllMetas()
    {
      return (from m in _db.Metas select m).ToArray();
    }

    public Meta GetById(Guid id)
    {
      return (from m in _db.Metas where m.MetaID == id select m).FirstOrDefault();
    }

    public void UpdateMeta(Guid id, Meta entity)
    {
      var currentEntity = _db.Metas.Find(id);
      if (currentEntity == null)
      {
        return;
      }

      _db.Entry<Meta>(currentEntity).CurrentValues.SetValues(entity);
      _db.SaveChanges();
    }

  }
}
