const http = require('http')


/* req is request and res is response*/
const server = http.createServer((req,res)=>{
    if(req.url==='/')
    {
        res.end('Welcome to the homepage')
    }
    if(req.url==='/contacts')
    {
        res.end('<a href="adityakumar2003birth@gmail.com"> My email</a>')
    }
    res.end('<h1>OOPS</h1> <p> We could not find your URL.</p> <a href="/">Go back to home page</a>')
}) 

server.listen(1000)