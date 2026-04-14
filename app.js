function stockBajo(){
  return productos.filter(p => p.stock > 0 && p.stock <=5);
}
function agotado (){
  return productos.filter(p=> p.stock ===0);
}

function totalnventario(){
  return productos.reduce((acc,p) => acc + p.precio * p.stock, 0);

}

function totalventas(){
  return productos.reduce((acc,p)=> acc + p.ventas, 0);
}

