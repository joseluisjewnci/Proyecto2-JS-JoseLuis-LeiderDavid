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
  const hayAgotados = productos.some(p => p.stock === 0);
  const todosConStock = productos.every(p => p.stock > 0);

  salida(`¿Hay agotados?: ${hayAgotados}`);
  salida(`¿Todos tienen stock?: ${todosConStock}`);
}

function reporteFinal() {
  const masCaro = [...productos].sort((a, b) => b.precio - a.precio)[0];
  const masBarato = [...productos].sort((a, b) => a.precio - b.precio)[0];
  const masVendido = [...productos].sort((a, b) => b.ventas - a.ventas)[0];

  salida("=== REPORTE FINAL ===");
  salida(`Producto más caro: ${masCaro.nombre}`);
  salida(`Producto más barato: ${masBarato.nombre}`);
  salida(`Producto más vendido: ${masVendido.nombre}`);
  salida(`Valor total inventario: $${totalInventario()}`);
}