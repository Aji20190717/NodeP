// require('http') : Node.js가 가지고 있는 http 모듈을 요청한다는 뜻

var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request, response) {

    var _url = request.url;  
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;

    // console.log(url.parse(_url, true));
    // console.log(url.parse(_url, true).pathname);

    if (pathname === '/') {
      // console.log('start');
      if (queryData.id === undefined) {

        fs.readFile(`data/${queryData.id}`,'utf8', function(err, description){

          var description = "Hello, Node.js!";
          var title = 'Welcome';
          var template = `
        <!doctype html>
        <html>
        <head>
          <title>WEB1 - ${title}</title>
          <meta charset="utf-8">
        </head>
        <body>
          <h1><a href="/">WEB</a></h1>
          <ol>
            <li><a href="/?id=HTML">HTML</a></li>
            <li><a href="/?id=CSS">CSS</a></li>
            <li><a href="/?id=JavaScript">JavaScript</a></li>
          </ol>
          <h2>${title}</h2>
          <p>${description}</p>
        </body>
        </html>    
    `;
        response.writeHead(200);
        response.end(template);
    
        });

      } else {
        fs.readFile(`data/${queryData.id}`,'utf8', function(err, description){

          var title = queryData.id;
          var template = `
        <!doctype html>
        <html>
        <head>
          <title>WEB1 - ${title}</title>
          <meta charset="utf-8">
        </head>
        <body>
          <h1><a href="/">WEB</a></h1>
          <ol>
            <li><a href="/?id=HTML">HTML</a></li>
            <li><a href="/?id=CSS">CSS</a></li>
            <li><a href="/?id=JavaScript">JavaScript</a></li>
          </ol>
          <h2>${title}</h2>
          <p>${description}</p>
        </body>
        </html>    
    `;
        response.writeHead(200);
        response.end(template);

        });
      }
    } else {
      response.writeHead(404);
      response.end('Nod found');
    }
});

app.listen(3000);