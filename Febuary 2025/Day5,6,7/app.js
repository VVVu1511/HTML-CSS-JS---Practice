const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('home')
    }
    if(req.url === '/about'){
        res.end('about')
    }
    res.end('error')
})

server.listen(5000,()=>{
    console.log('server listening on port 5000...')
})