const url='https://antoni1830.github.io/Bazu-tours/hoteles.json'
fetch(url)
.then(response => response.json())
.then(data =>{
    let element=document.getElementById('content9')
    element.innerHTML=`<img src='${data.imagen1}'>
    <h3>Catedral de Milan</h3>
    <p>Milan Cathedral is a Gothic cathedral located in the city of the same name.</p>`

    let element2=document.getElementById('content2')
    element2.innerHTML=`<img src='${data.imagen2}'>
    <h3>Coliseo de Romaaaaa</h3>
    <p>Located in the Piazza del Duomo in Pisa, in the city of the same name, a municipality in the Italian region of Tuscany and capital of the province of the same name in Italy.</p>`

    console.log(data)
    
} )
.catch(err=>console.log(err))