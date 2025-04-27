using System;
using System.Collections.Generic;

namespace WebApi.Models
{
    public partial class Cliente
    {
        public Cliente()
        {
            Pedidos = new HashSet<Pedido>();
        }

        public int Id { get; set; }
        public string Nombre { get; set; } = null!;
        public string Email { get; set; } = null!;

        public virtual ICollection<Pedido> Pedidos { get; set; }
    }
}
