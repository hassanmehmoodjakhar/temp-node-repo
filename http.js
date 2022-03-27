const http = require('http');

//Creating the Server and Setting up your API
const server = http.createServer((req,res)=>{  //Requests by client and Response by Server

    //console.log(req); // Here Server is waiting for the URL request

    if(req.url === '/'){
    res.end('Welcome to Our Home Page')
     }

    if(req.url === '/about'){
    res.end('About Page')
      }

    res.end('Page Not Found');

    //res.end('Welcome to Our Homepage');
});

server.listen(5000); //port server is listening