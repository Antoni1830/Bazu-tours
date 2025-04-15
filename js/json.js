// Función para cargar el archivo JSON
fetch('hoteles.json')
.then(response => response.json())
.then(data => {
    const contenedor = document.getElementById('hoteles');
    data.forEach(hotel => {
        const div = document.createElement('div');
        div.className = 'hotel';
        div.innerHTML = `
            <h2>${hotel.nombre}</h2>
            <p>Ubicación: ${hotel.ubicacion}</p>
            <img src="${hotel.imagen}" alt="${hotel.nombre}">
        `;
        contenedor.appendChild(div);
    });
})
.catch(error => console.error('Error al cargar el JSON:', error));