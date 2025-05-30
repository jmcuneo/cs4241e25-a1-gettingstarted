const http = require('http'),
      fs   = require('fs'),
      port = 3000

const server = http.createServer( function( request,response ) {
  const url = "." + response.url;
  switch( request.url ) {
    case '/':
      sendFile( response, 'index.html' )
      break
    /* case '/index.html':
      sendFile( response, 'index.html' )
      break
    case '/page.css':
      sendFile( response, 'page.css' )
      break
      case '/page.js':
      sendFile( response, 'page.js' )
      break */
    default:
      sendFile(response, url)
      //response.end( '404 Error: File Not Found' )
  }
})

server.listen( process.env.PORT || port )

const sendFile = function( response, filename ) {
   fs.readFile( filename, function( err, content ) {
     response.end( content, 'utf-8' )
   })
}
