const url ='https://antoni1830.github.io/Bazu-tours/hoteles.json'
fetch(url)
.then(response => response.json())
.then(data =>{

    let element=document.getElementById('lol2')
    element.innerHTML=`<img src='${data.imagen}'></img>`
    console.log(data)
} )
.catch(err=>console.log(err))