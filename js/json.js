const url='https://antoni1830.github.io/Bazu-tours/hoteles.json'
fetch(url)
.then(response => response.json())
.then(data =>{
    let element=document.getElementById('content9')
    element.innerHTML=`<img src='${data.imagen9}'>
    <h3>Catedral de Milan</h3>
    <p>Milan Cathedral is a Gothic cathedral located in the city of the same name.</p>`

    let element2=document.getElementById('content2')
    element2.innerHTML=`<img src='${data.imagen2}'>
    <h3>${data.nombre2}</h3>
    <p>${data.ubicacion2}</p>`

    let element3=document.getElementById('content3')
    element2.innerHTML=`<img src='${data.imagen3}'>
    <h3>${data.nombre3}</h3>
    <p>${data.ubicacion3}</p>`

    let element4=document.getElementById('content4')
    element4.innerHTML=`<img src='${data.imagen4}'>
    <h3>${data.nombre4}</h3>
    <p>${data.ubicacion4}</p>`
    
    console.log(data)
    
} )
.catch(err=>console.log(err))