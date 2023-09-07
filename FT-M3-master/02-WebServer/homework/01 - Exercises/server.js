const { isUtf8 } = require("buffer");
const { log } = require("console");
var fs = require("fs");
var http = require("http");
/* ⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️ */
/* AQUÍ DEBAJO PUEDES ESCRIBIR LA CONSTANTE DEL PUERTO */
const path = require('path')
const PORT = 3001;
const pathDogsData = path.join(__dirname,'utils','dogsData.json')
const pathAllDogs = path.join(__dirname,'utils','allDogs.html')
http.createServer((req,res)=>{
  console.log(`Server raised in port ${PORT}`);
  //Crear las rutas
  if(req.url==='/api'){
    fs.readFile(pathDogsData,(err,data)=>{
      if(err){
        res.writeHead(404,{'Content-type':'text-plain'})
        res.end('json not found')
      }
      else{
        res.writeHead(200,{'Content-type':'application/json'})
        res.end(data)
      }
    })
    return;
  }
  else if(req.url==='/allDogs'){
    fs.readFile(pathAllDogs,'UTF8',(err,data)=>{
      if(err){
        res.writeHead(404,{'Content-type':'text-plain'})
        res.end('html not found')
      }
      else{
        res.writeHead(200,{'Content-Type':'text/html'})
        res.end(data)
      }
    })
    return;
  }
  else if(req.url==='/favicon.ico'){
    res.writeHead(200,{'Content-type':'text-plain'})
    res.end('')
  }
  else{
    res.writeHead(404,{'Content-Type':'text/plain'})
    res.end('Route not found')
  }
}).listen(PORT,'localhost')

/* ⚠️ LA LÍNEA SIGUIENTE TIENE QUE QUEDAR COMO ESTÁ PARA PODER EXPORTAR EL SERVIDOR ⚠️ */
module.exports =
  /* AQUÍ DEBAJO YA PUEDES ESCRIBIR TÚ CÓDIGO REEMPLAZANDO EL VALOR DE NULL POR EL SERVIDOR */
  null;
