const http = require('http');
const url = require('url');
//create server 
const server = http.createServer((req,res)=>{
    //implement routing
    const pethName = req.url;
    if(pathName==='/'){
        res.end('home page');
    } else if(pathName === '/overview'){
         res.end('this is the OVERVIEW page ');
    } else if (pethName === '/product'){
        res.end('this is the PRODUCT page');
    }else{
        res.writeHead(404);
        res.end('Page not found!!!');
    }
});

server.listen(8000,'127.0.0.1',()=>{
    console.log('Listening to request on port 8000');
});