
const productos = [
  { id: 1, nombre: "Mouse", categoria: "Periferico", precio: 50000, stock: 10, ventas: 12 },
  { id: 2, nombre: "Teclado", categoria: "Periferico", precio: 120000, stock: 5, ventas: 7 },
  { id: 3, nombre: "Monitor", categoria: "Pantalla", precio: 800000, stock: 2, ventas: 4 },
  { id: 4, nombre: "USB", categoria: "Accesorio", precio: 30000, stock: 0, ventas: 15 },
  { id: 5, nombre: "Diadema", categoria: "Audio", precio: 90000, stock: 8, ventas: 6 }
];

function mostrarSalida(texto) {
  document.getElementById("salida").textContent += texto + "\n";
}

function limpiarSalida() {
  document.getElementById("salida").textContent = "";
}

function mostrarProductos() {
  productos.forEach(p => {
    mostrarSalida(`${p.nombre} - $${p.precio} - Stock: ${p.stock} - Ventas: ${p.ventas}`);
  });
}

function stockBajo() {
  return productos.filter(p => p.stock > 0 && p.stock <= 5);
}

function agotados() {
  return productos.filter(p => p.stock === 0);
}

function nombresYPrecios() {
  return productos.map(p => `${p.nombre}: $${p.precio}`);
}

function totalInventario() {
  return productos.reduce((acc, p) => acc + p.precio * p.stock, 0);
}

function totalVentas() {
  return productos.reduce((acc, p) => acc + p.ventas, 0);
}

function ordenarPorPrecio() {
  return [...productos].sort((a, b) => a.precio - b.precio);
}

function buscarProducto(nombre) {
  return productos.find(p => p.nombre.toLowerCase() === nombre.toLowerCase());
}

function verificarStock() {
  const hayAgotados = productos.some(p => p.stock === 0);
  const todosConStock = productos.every(p => p.stock > 0);
  return { hayAgotados, todosConStock };
}

function clasificarPrecio(precio) {
  let nivel;
  switch (true) {
    case precio < 50000:
      nivel = "Económico";
      break;
    case precio <= 150000:
      nivel = "Medio";
      break;
    default:
      nivel = "Premium";
  }
  return nivel;
}

function reporteFinal() {
  const masCaro = [...productos].sort((a, b) => b.precio - a.precio)[0];
  const masBarato = [...productos].sort((a, b) => a.precio - b.precio)[0];
  const masVendido = [...productos].sort((a, b) => b.ventas - a.ventas)[0];

  mostrarSalida("=== REPORTE FINAL ===");
  mostrarSalida(`Producto más caro: ${masCaro.nombre}`);
  mostrarSalida(`Producto más barato: ${masBarato.nombre}`);
  mostrarSalida(`Producto más vendido: ${masVendido.nombre}`);
  mostrarSalida(`Valor total inventario: $${totalInventario()}`);
  mostrarSalida(`Total unidades vendidas: ${totalVentas()}`);
  mostrarSalida(`Cantidad agotados: ${agotados().length}`);
}

function iniciarSistema() {
  limpiarSalida();

  let opcion = "1";

  while (opcion !== "0") {
    opcion = prompt(
      `MENÚ\n1. Mostrar productos\n2. Stock bajo\n3. Agotados\n4. Nombres y precios\n5. Total inventario\n6. Buscar producto\n7. Reporte final\n0. Salir`
    );

    switch (opcion) {
      case "1":
        mostrarProductos();
        break;
      case "2":
        mostrarSalida(JSON.stringify(stockBajo(), null, 2));
        break;
      case "3":
        mostrarSalida(JSON.stringify(agotados(), null, 2));
        break;
      case "4":
        mostrarSalida(nombresYPrecios().join("\n"));
        break;
      case "5":
        mostrarSalida(`$${totalInventario()}`);
        break;
      case "6":
        const nombre = prompt("Ingrese producto a buscar");
        const encontrado = buscarProducto(nombre);
        mostrarSalida(encontrado ? JSON.stringify(encontrado, null, 2) : "No encontrado");
        break;
      case "7":
        reporteFinal();
        break;
      case "0":
        mostrarSalida("Sistema finalizado");
        break;
      default:
        mostrarSalida("Opción inválida");
    }
  }
}
