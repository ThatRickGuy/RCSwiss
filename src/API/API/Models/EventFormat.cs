using System;
using System.Collections.Generic;

namespace API.Models
{
  public class EventFormat
  {
    public Guid FormatID { get; set; }
    public string Name { get; set; }
    public virtual List<Scenario> Scenarios { get; set; }
  }
}
