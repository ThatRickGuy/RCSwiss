using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace API.Models
{
  public class Meta
  {
    public Guid MetaID { get; set; }
    public string Country { get; set; }
    public string Province { get; set; }
    public string City { get; set; }
  }
}
