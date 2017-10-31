using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace API.Models
{
  public class EventFormat
  {
    public Guid FormatID { get; set; }
    public string Name { get; set; }
    public virtual List<Scenario> Scenarios { get; set; }
  }
}
