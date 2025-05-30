const http = require('http'),
      fs   = require('fs'),
      port = 3000

const server = http.createServer( function( request,response ) {
  switch( request.url ) {
    case '/':
      sendFile( response, 'index.html' )
      break
    case '/index.html':
      sendFile( response, 'index.html' )
      break
    case '/styles.css':
      sendFile( response, 'styles.css' )
      break
    case '/index.js':
      sendFile( response, 'index.js' )
      break
    case '/camdenMe.png':
      sendFile( response, 'camdenMe.png' )
      break
    case '/ballroomMe.JPG':
      sendFile( response, 'ballroomMe.JPG' )
      break
    case '/londonMe.jpg':
      sendFile( response, 'londonMe.jpg' )
      break
    default:
      response.end( '404 Error: File Not Found' )
  }
})

server.listen( process.env.PORT || port )

const sendFile = function( response, filename ) {
   fs.readFile( filename, function( err, content ) {
     response.end( content, 'utf-8' )
   })
}
