const http = require ('http');

http
.createServer((request,response)=>{
    // response.writeHead(200,{
    //     "Content-type": "text/plain"})
    // response.end("Holi! Creaste tu primer server")
    // console.log(request.url);//Aqui llega todo lo de despues del url

    if(request.url==='/users'){
        response.writeHead()
    }

})
.listen(3001, "localhost")