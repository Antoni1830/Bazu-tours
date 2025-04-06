// script.js

// Inicializar el carrito
let carrito = [];
let total = 0;

// Función para agregar un producto al carrito
function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio: parseFloat(precio) });
    total += parseFloat(precio);
    actualizarCarrito();
}

// Función para actualizar la visualización del carrito
function actualizarCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');
    listaCarrito.innerHTML = ''; // Limpiar la lista actual

    carrito.forEach((producto) => {
        const li = document.createElement('li');
        li.textContent = `${producto.nombre} - $${producto.precio.toFixed(2)}`;
        listaCarrito.appendChild(li);
    });

    document.getElementById('total').textContent = `Total: $${total.toFixed(2)}`;
}

// Agregar eventos a los botones de "Añadir al carrito"
document.querySelectorAll('.producto button').forEach((button) => {
    button.addEventListener('click', () => {
        const nombre = button.getAttribute('data-nombre');
        const precio = button.getAttribute('data-precio');
        agregarAlCarrito(nombre, precio);
    });
});