using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApi.Models;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class ProductoController : ControllerBase
    {
        private readonly TestingContext _dbContext;

        public ProductoController(TestingContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        [Route("Lista")]

        public async Task<IActionResult> Lista()
        {
            List<Producto> lista= await _dbContext.Productos.OrderByDescending(c => c.Id).ToListAsync();
            return StatusCode(StatusCodes.Status200OK, lista);
        }

        [HttpPost]
        [Route("Guardar")]

        public async Task<IActionResult> Guardar([FromBody] Producto requese)
        {
            await _dbContext.Productos.AddAsync(requese);
            await _dbContext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "Ok");
        }

        [HttpPut]
        [Route("Editar")]

        public async Task<IActionResult> Editar([FromBody] Producto requese)
        {
            _dbContext.Productos.Update(requese);
            await _dbContext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "Ok");
        }

        [HttpDelete]
        [Route("Eliminar/{id:int")]

        public async Task<IActionResult> Eliminar(int id)
        {
            Producto producto = _dbContext.Productos.Find(id);

            _dbContext.Productos.Remove(producto);
            await _dbContext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "Ok");
        }

    }
}
