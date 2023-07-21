const http = require('http')
const server = http.createServer((req, res) => {
    if(req.url=='/'){
        res.write('You are at home page')
    }
    if(req.url=='/about'){
        res.write('you are at about page')
    }
    res.end(`
    <body>
    <h1>Oops!</h1>
    <p1>We can't seem to find the page you are looking for</p1> 
    <a href="/">back home</a>
    </body>
    `)
})
server.listen(5002);
