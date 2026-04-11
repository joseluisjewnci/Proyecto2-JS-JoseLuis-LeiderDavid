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
  return productos.reduce((acc, p) => acc + p.ventas, 0);
}