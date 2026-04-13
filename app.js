const prompt = require("prompt-sync")();

const { mostrarProductos } = require("./productos");
const { stockBajo, agotados, totalInventario, totalVentas } = require("./ventas");
const {
  nombresYPrecios,
  ordenarPorPrecio,
  buscarProducto,
  verificarStock,
  obtenerMasCaro,
  obtenerMasBarato,
  obtenerMasVendido,
  reporteFinal
} = require("./reportes");

function iniciarSistema() {
  let opcion = "";

  while (opcion !== "0") {
    opcion = prompt(
      "\nMENÚ\n" +
      "1. Mostrar productos\n" +
      "2. Stock bajo\n" +
      "3. Agotados\n" +
      "4. Nombres y precios\n" +
      "5. Total inventario\n" +
      "6. Total ventas\n" +
      "7. Buscar producto\n" +
      "8. Verificar stock\n" +
      "9. Producto más caro\n" +
      "10. Producto más barato\n" +
      "11. Producto más vendido\n" +
      "12. Ordenar por precio\n" +
      "13. Reporte final\n" +
      "0. Salir\n"
    );

    switch (opcion) {
      case "1":
        mostrarProductos();
        break;
      case "2":
        console.log(stockBajo());
        break;
      case "3":
        console.log(agotados());
        break;
      case "4":
        console.log(nombresYPrecios().join("\n"));
        break;
      case "5":
        console.log("Total inventario:", totalInventario());
        break;
      case "6":
        console.log("Total ventas:", totalVentas());
        break;
      case "7":
        const nombre = prompt("Nombre: ");
        console.log(buscarProducto(nombre));
        break;
      case "8":
        console.log(verificarStock());
        break;
      case "9":
        console.log(obtenerMasCaro());
        break;
      case "10":
        console.log(obtenerMasBarato());
        break;
      case "11":
        console.log(obtenerMasVendido());
        break;
      case "12":
        console.log(ordenarPorPrecio());
        break;
      case "13":
        reporteFinal();
        break;
      case "0":
        console.log("Sistema finalizado");
        break;
      default:
        console.log("Opción inválida");
    }
  }
}

module.exports = { iniciarSistema };