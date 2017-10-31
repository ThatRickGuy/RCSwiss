using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace API.Models
{
  public class EventFormat
  {
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public Guid FormatID { get; set; }

    public string Name { get; set; }

    public virtual List<Scenario> Scenarios { get; set; }
  }
}
