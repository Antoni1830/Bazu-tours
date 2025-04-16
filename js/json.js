const url='https://antoni1830.github.io/Bazu-tours/hoteles.json'
fetch(url)
.then(response => response.json())
.then(data =>{
    let element1=document.getElementById('content1')
    element1.innerHTML=`<img src='${data.imagen1}'>
    <h2>${data.nombre1}</h2>
    <p>${data.ubicacion1}</p>
    `

    let element2=document.getElementById('content2')
    element2.innerHTML=`<img src='${data.imagen2}'>
    <h2>${data.nombre2}</h2>
    <p>${data.ubicacion2}</p>
    `
    
    let element3=document.getElementById('content3')
    element3.innerHTML=`<img src='${data.imagen3}'>
    <h2>${data.nombre3}</h2>
    <p>${data.ubicacion3}</p>
    `
    let element4=document.getElementById('content4')
    element4.innerHTML=`<img src='${data.imagen4}'>
    <h2>${data.nombre4}</h2>
    <p>${data.ubicacion4}</p>
    `
    let element5=document.getElementById('content5')
    element5.innerHTML=`<img src='${data.imagen5}'>
    <h2>${data.nombre5}</h2>
    <p>${data.ubicacion5}</p>
    `
    let element6=document.getElementById('content6')
    element6.innerHTML=`<img src='${data.imagen6}'>
    <h2>${data.nombre6}</h2>
    <p>${data.ubicacion6}</p>
    `
    let element7=document.getElementById('content7')
    element7.innerHTML=`<img src='${data.imagen7}'>
    <h2>${data.nombre7}</h2>
    <p>${data.ubicacion7}</p>
    `
    let element8=document.getElementById('content8')
    element8.innerHTML=`<img src='${data.imagen8}'>
    <h2>${data.nombre8}</h2>
    <p>${data.ubicacion8}</p>
    `
    let element9=document.getElementById('content9')
    element9.innerHTML=`<img src='${data.imagen9}'>
    <h2>${data.nombre9}</h2>
    <p>${data.ubicacion9}</p>
    `

    
    console.log(data)
    
} )
.catch(err=>console.log(err))