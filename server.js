var http = require('http'),
    fs = require('fs'),
    path = require('path'),
    host = '127.0.0.1',
    port = '9000';


var mimes = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
    ".gif": "image/gif",
    ".jpg": "image/jpeg",
    ".png": "image/png"
}


var server = http.createServer(function(req, res) {
    var filePath = (req.url === '/') ? ('./index.html') : ('.' + req.url);
    var contentType = mimes[path.extname(filePath)];
    // Check if file exist
    fs.exists(filePath, function(file_exists) {
        if(file_exists){
            
            // read and serve with stream pipeline
            res.writeHead(200, {'Content-Type' : contentType});
            var streamFile = fs.createReadStream(filePath).pipe(res);
            // Error handler
            streamFile.on('error', function(){
                res.writeHead(500);
                res.end();
            })

        }else {
            res.writeHead(404);
            res.end("Sorry: couldnt find the file you requested!");
        }
    })
}).listen(port, host, function(){
    console.log('Server Running on http://' + host + ':' + port);
});
