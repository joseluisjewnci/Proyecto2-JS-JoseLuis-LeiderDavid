
function clasificarPrecio(precio) {
  switch (true) {
    case precio < 50000:
      return "Económico";
    case precio <= 150000:
      return "Medio";
    default:
      return "Premium";
  }
}

function iniciarSistema() {
  limpiar();
  let opcion = "";

  while (opcion !== "0") {
    opcion = prompt(
      "MENÚ" +
      "\n1. Mostrar productos" +
      "\n2. Stock bajo" +
      "\n3. Agotados" +
      "\n4. Nombres y precios" +
      "\n5. Total inventario" +
      "\n6. Buscar producto" +
      "\n7. Verificar stock" +
      "\n8. Reporte final" +
      "\n0. Salir"
    );

    switch (opcion) {
      case "1":
        mostrarProductos();
        break;
      case "2":
        salida(JSON.stringify(stockBajo(), null, 2));
        break;
      case "3":
        salida(JSON.stringify(agotados(), null, 2));
        break;
      case "4":
        salida(nombresYPrecios().join("\n"));
        break;
      case "5":
        salida(`Total inventario: $${totalInventario()}`);
        break;
      case "6":
        const nombre = prompt("Ingrese el nombre del producto");
        salida(JSON.stringify(buscarProducto(nombre), null, 2));
        break;
      case "7":
        verificarStock();
        break;
      case "8":
        reporteFinal();
        break;
      case "0":
        salida("Sistema finalizado");
        break;
    }
  }
} 