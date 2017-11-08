using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace API.Models
{
  public class EventFormat
  {
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.None)]
    public Guid FormatID { get; set; }

    [MaxLength(50)]
    [Required]
    public string Name { get; set; }

    public virtual List<Scenario> Scenarios { get; set; }
  }
}
