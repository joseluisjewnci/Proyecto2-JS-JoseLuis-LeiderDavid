const { productos } = require("./productos");
const { totalInventario, totalVentas } = require("./ventas");

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
  const caro = obtenerMasCaro();
  const barato = obtenerMasBarato();
  const vendido = obtenerMasVendido();

  console.log("=== REPORTE FINAL ===");
  console.log(`Más caro: ${caro.nombre}`);
  console.log(`Más barato: ${barato.nombre}`);
  console.log(`Más vendido: ${vendido.nombre}`);
  console.log(`Total inventario: $${totalInventario()}`);
  console.log(`Total ventas: $${totalVentas()}`);
}

module.exports = {
  nombresYPrecios,
  ordenarPorPrecio,
  buscarProducto,
  verificarStock,
  obtenerMasCaro,
  obtenerMasBarato,
  obtenerMasVendido,
  reporteFinal
};