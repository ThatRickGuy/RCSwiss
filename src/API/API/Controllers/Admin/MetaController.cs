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
  public class MetaController : ApiController
  {

    IMetaRepository _MetaRepository;

    public MetaController(IMetaRepository metaRepository)
    {
      _MetaRepository = metaRepository;
    }

    // GET: api/Meta
    public IEnumerable<Meta> Get()
    {
      return _MetaRepository.GetAllMetas();
    }

    // GET: api/Meta/5
    public Meta Get(string id)
    {
      return _MetaRepository.GetById(new Guid(id));
    }

    // POST: api/Meta
    public void Post([FromBody]Meta value)
    {
      _MetaRepository.CreateMeta(value);
    }

    // PUT: api/Meta/5
    public void Put(string id, [FromBody]Meta value)
    {
      _MetaRepository.UpdateMeta(new Guid(id), value);
    }

    // DELETE: api/Meta/5
    public void Delete(string id)
    {
      _MetaRepository.DeleteMeta(new Guid(id));
    }
  }
}
