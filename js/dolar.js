const button = document.getElementById("getDollar");
const resultDiv = document.getElementById("dollarResult");

button.addEventListener("click", () => {
    const queryURL = 'https://ve.dolarapi.com/v1/dolares/oficial'; // URL de la API

    fetch(queryURL)
        .then(response => response.json())
        .then(data => {
            const compra = data.promedio;
            const fechaActualizacion = new Date(data.fechaActualizacion).toLocaleString('es-MX');
            resultDiv.innerHTML = `Precio de Oficial: Bs${compra}<br>Última actualización: ${fechaActualizacion}`;
        })
        .catch(error => {
            resultDiv.innerHTML = "Error al obtener los datos. Intenta de nuevo más tarde.";
        });
});