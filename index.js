const http = require("http")
const dotenv = require("dotenv")
dotenv.config()

function serverListener(req, res) {
    const url = req.url

    if(url === '/') {
        res.write('<h1>What is Node Js?</h1>')
        res.write('<ul>')
            res.write('<li>Node is a runtime environment for executing JS code.</li>')
            res.write('<li>Essentially, Node is a C++ program that embeds Chromes v8 engine, the fastest JS engine in the world.</li>')
            res.write('<li>We use Node to build fast and scalable networking applications. Its a perfect choice for building Restful services.</li>')
            res.write('<li>Node applications are single-threaded. That means a single thread is used to serve all clients.</li>')
        res.write('</ul>')
        return res.end()
    }
    else if(url === '/data'){
        const data = {
            message: 'Hello, world!',
            name : 'Satheesha',
            address : 'No 224, 1st Main, 2nd Crs, White field, Bengaluru'
        };
        res.end(JSON.stringify(data));
    }
}

const server = http.createServer(serverListener)

const port = process.env.port

server.listen(port,()=>{
    try {
        console.log("server running successfully");
    }
    catch(err) {
        console.log('Error');
    }
})