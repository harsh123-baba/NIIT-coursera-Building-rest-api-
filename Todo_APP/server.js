const http = require('http');
const PORT = 3000
const todos = require('./todos');
const getRequestData = require('./utils');

const server = http.createServer(async(req , res)=>{
    if(req.url == "/api/v1/todos"  && req.method ==="GET"){
        res.writeHead(200, {
            'content-type':"application/json",
        })
        res.end(JSON.stringify(todos));
    }
    else if (req.url === "/api/v1/todos" && req.method === "POST"){
        let req_body = await getRequestData(req)  
        todos.push(JSON.parse(req_body));
        res.writeHead(201, {
            'content-type' : 'application/json'
        })
        res.end(JSON.stringify(JSON.parse(req_body)));
    }
    else if (req.url.match(/\/api\/v1\/todos\/([0-9])/) && req.method==="DELETE"){
        const id = req.url.split('/')[4];
        const todo = todos.find(t=> t.id === parseInt(id));
        if(!todo){
            res.writeHead(404, {
                'content-type':'application/json'
            })
            res.end("No todo with the specified id is available")
        }
        else {
            const index = todos.indexOf(todo);
            todos.splice(index, 1);
            res.writeHead(200, {
                'content-type':"application/json",
            })
            res.end("Deleted the specified todo");


        }
    }
})


server.listen(PORT, ()=>{
    console.log("Server is listening on port 3000");
})
server.on('error', (error)=>{
    console.log("error found")
})

