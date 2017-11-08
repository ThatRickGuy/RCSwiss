using System;
using System.Collections.Generic;
using API.Models;

namespace API.Interfaces
{
  public interface IMetaRepository
  {
    void CreateMeta(Meta entity);
    void DeleteMeta(Guid id);
    IEnumerable<Meta> GetAllMetas();
    Meta GetById(Guid id);
    void UpdateMeta(Guid id, Meta entity);
  }
}
