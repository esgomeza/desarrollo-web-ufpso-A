const productos = [
{
nombre: "Laptop",
precio: "$3000",
descripcion: "Laptop para programar"
},
{
nombre: "Mouse",
precio: "$50",
descripcion: "Mouse inalámbrico"
},
{
nombre: "Teclado",
precio: "$120",
descripcion: "Teclado mecánico"
}
];

window.addEventListener("DOMContentLoaded", () => {

const contenedor = document.getElementById("catalogo");

productos.forEach(producto => {

const tarjeta = document.createElement("product-card");

tarjeta.setAttribute("nombre", producto.nombre);
tarjeta.setAttribute("precio", producto.precio);
tarjeta.setAttribute("descripcion", producto.descripcion);

contenedor.appendChild(tarjeta);

});

});