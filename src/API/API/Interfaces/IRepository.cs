using API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace API.Interfaces
{

  // DO NOT DIRECTLY USE THIS INTERFACE
  // This is used for code generation purposes; once a repository is created, remove this interface, customize the repository, and create a new repository

   abstract class EntityBase

  {

    public Guid Id { get; protected set; }

  }

   interface IRepository<T> where T : EntityBase

  {
    IEnumerable<T> Get();

    T GetById(Guid id);

    void Create(T entity);

    void Delete(Guid id);

    void Delete(T entity);

    void Update(Guid id, T entity);

    void Update(T entity);
  }
}
