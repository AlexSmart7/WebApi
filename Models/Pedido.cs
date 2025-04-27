using System;
using System.Collections.Generic;

namespace WebApi.Models
{
    public partial class Pedido
    {
        public int Id { get; set; }
        public int? ClienteId { get; set; }
        public DateTime? Fecha { get; set; }
        public decimal? Total { get; set; }

        public virtual Cliente? Cliente { get; set; }
    }
}
