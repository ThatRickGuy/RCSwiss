using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace API.Models
{
  public class Meta
  {
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public Guid MetaID { get; set; }

    public string Country { get; set; }

    public string Province { get; set; }

    public string City { get; set; }
  }
}
