const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function preguntar(texto) {
  return new Promise(resolve => {
    rl.question(texto, respuesta => resolve(respuesta));
  });
}

const productos = [
  { id: 1, nombre: "Mouse", categoria: "Periferico", precio: 50000, stock: 10, ventas: 12 },
  { id: 2, nombre: "Teclado", categoria: "Periferico", precio: 120000, stock: 5, ventas: 7 },
  { id: 3, nombre: "Monitor", categoria: "Pantalla", precio: 800000, stock: 2, ventas: 4 },
  { id: 4, nombre: "USB", categoria: "Accesorio", precio: 30000, stock: 0, ventas: 15 },
  { id: 5, nombre: "Diadema", categoria: "Audio", precio: 90000, stock: 8, ventas: 6 }
];

// FUNCIONES

function mostrarProductos() {
  productos.forEach(p => {
    console.log(`${p.nombre} | ${p.categoria} | $${p.precio} | Stock: ${p.stock} | Ventas: ${p.ventas}`);
  });
}

function stockBajo() {
  return productos.filter(p => p.stock > 0 && p.stock <= 5);
}

function agotados() {
  return productos.filter(p => p.stock === 0);
}

function totalInventario() {
  return productos.reduce((acc, p) => acc + p.precio * p.stock, 0);
}

function totalVentas() {
  return productos.reduce((acc, p) => acc + (p.precio * p.ventas), 0);
}

function nombresYPrecios() {
  return productos.map(p => `${p.nombre}: $${p.precio}`);
}

function ordenarPorPrecio() {
  return [...productos].sort((a, b) => a.precio - b.precio);
}

function buscarProducto(nombre) {
  return productos.find(p => p.nombre.toLowerCase() === nombre.toLowerCase());
}

function verificarStock() {
  return {
    hayAgotados: productos.some(p => p.stock === 0),
    todosConStock: productos.every(p => p.stock > 0)
  };
}

function obtenerMasCaro() {
  return [...productos].sort((a, b) => b.precio - a.precio)[0];
}

function obtenerMasBarato() {
  return [...productos].sort((a, b) => a.precio - b.precio)[0];
}

function obtenerMasVendido() {
  return [...productos].sort((a, b) => b.ventas - a.ventas)[0];
}

function reporteFinal() {
  console.log("\n=== REPORTE FINAL ===");
  console.log("Más caro:", obtenerMasCaro().nombre);
  console.log("Más barato:", obtenerMasBarato().nombre);
  console.log("Más vendido:", obtenerMasVendido().nombre);
  console.log("Total inventario:", totalInventario());
  console.log("Total ventas:", totalVentas());
}

// MENÚ

async function iniciarSistema() {
  let opcion = "";

  while (opcion !== "14") {
    opcion = await preguntar(
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
      "14. Salir\n> "
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
        const nombre = await preguntar("Nombre del producto: ");
        console.log(buscarProducto(nombre) || "No encontrado");
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
      case "14":
        console.log("Sistema finalizado");
        rl.close();
        break;
      default:
        console.log("Opción inválida");
    }
  }
}

iniciarSistema();