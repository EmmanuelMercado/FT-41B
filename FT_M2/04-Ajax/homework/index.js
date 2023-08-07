let crearElemento = function(tipo,data){
    let nuevoElemento = document.createElement(tipo)
    return nuevoElemento
}
let amigoId = document.getElementById("input")
let listadoAmigos = document.getElementById("lista")
let amigoIdBorrar = document.getElementById("inputDelete")
document.getElementById("boton").addEventListener("click",function(){
    $.get("http://localhost:5000/amigos",function(data){
        //console.log(data);
        //console.log(amigoId.value);
        listadoAmigos.innerHTML = ''
        for(let i=0;i<data.length;i++){
            let lista = crearElemento("li")
            lista.textContent=data[i].name
            listadoAmigos.appendChild(lista)
        }
    })
})


document.querySelector("#search").addEventListener("click",function(){
    console.log(amigoId.value);
    // $.get("http://localhost:5000/amigos"),function(data){
    //     console.log(data);
    // }
    $.get("http://localhost:5000/amigos",function(data){
        let amigoEncontrado = document.getElementById("amigo")
        if(data[amigoId.value])amigoEncontrado.textContent=data[amigoId.value].name
        else amigoEncontrado.textContent = 'Amigo no encontrado'

    })
})

/* 
 $.ajax({
    url: url,
    type: 'DELETE',
    contentType: 'application/json', // Si el servidor espera JSON
    // Agrega otros encabezados según sea necesario (por ejemplo, tokens de autenticación)
    success: function(data) {
      console.log('Eliminación exitosa:', data); // Aquí puedes manejar la respuesta del servidor después de borrar el recurso
    },
    error: function(error) {
      console.error('Error al borrar:', error); // Aquí puedes manejar errores, si los hay
    }
  });
*/
document.querySelector("#delete").addEventListener("click",function(){
    //console.log(amigoId.value);
    // $.get("http://localhost:5000/amigos"),function(data){
    //     console.log(data);
    // }
    console.log("http://localhost:5000/amigos/"+amigoIdBorrar.value)
    $.ajax({
        url: "http://localhost:5000/amigos/"+amigoIdBorrar.value,
        type: 'DELETE',
        contentType: 'application/json', // Si el servidor espera JSON
        // Agrega otros encabezados según sea necesario (por ejemplo, tokens de autenticación)
        success: function(data) {
          console.log('Eliminación exitosa de :'); // Aquí puedes manejar la respuesta del servidor después de borrar el recurso
        },
        error: function(error) {
          console.error('Error al borrar:', error); // Aquí puedes manejar errores, si los hay
        }
      });
})

//console.log(crearElemento("li"));
