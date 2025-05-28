const http = require('http'),
      fs   = require('fs'),
      port = 3000

const server = http.createServer( function( request,response ) {
  const url = "." + request.url

    if (fs.existsSync(url)) {
      switch (request.url) {
        case '/':
          sendFile(response, 'index.html')
          break
        default:
          sendFile(response, url)
      }
    } else {
      console.error(`Error`)
      response.writeHead(404, {'Content-Type': 'text/html'})
      response.end('<h1>404 Not Found</h1><p>The requested file does not exist.</p>', 'utf-8')
  }
})

server.listen( process.env.PORT || port )

/*
  As far as I can tell, sendFile already exists? Unless that's from express.js
  (I use express.js to host my website)
*/
const sendFile = function( response, filename ) {
   fs.readFile( filename, function( err, content ) {
     response.end( content, 'utf-8' )
   })
}
