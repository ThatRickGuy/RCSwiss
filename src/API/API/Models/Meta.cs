using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace API.Models
{
  public class Meta
  {
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.None)]
    public Guid MetaID { get; set; }

    [MaxLength(50)]
    [Required]
    public string Country { get; set; }

    [MaxLength(50)]
    [Required]
    public string Province { get; set; }

    [MaxLength(50)]
    [Required]
    public string City { get; set; }
  }
}
