using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace API.Models
{
  public class Scenario
  {
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.None)]
    public Guid ScenarioID { get; set; }

    [MaxLength(50)]
    [Required]
    public string Name { get; set; }
  }
}
