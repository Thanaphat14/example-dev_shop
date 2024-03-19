var http = require('http');
var fs = require('fs');
var server = http.createServer(function (request, respone) {
    var url = request.url;
    if (url == '/') {
        respone.writeHead(200, { 'Content-Type': 'text/html' });
        var ns = fs.readFile('./index.html', function (err, data) {
            if (err) {
                console.error(err);
                return;
            }
            respone.end(data);
        });
    } else if (url != '/') {
        var cpurl = '.' + url;
        var type = url.substring(url.lastIndexOf(".") + 1, url.length)
        respone.writeHead(200, { 'Content-type': "text/" + type });
        var ns = fs.readFile(cpurl, function (err, data) {
            if (err) {
                console.error(err);
                return;
            }
            respone.end(data);
        });
    }
    
}).listen(3000);
