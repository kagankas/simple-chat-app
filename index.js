//import packages
import express from 'express'
import http from 'http'
// import {dirname , join } from 'node:path'
// import {fileURLToPath} from 'node: url'
import { Server } from 'socket.io'
 

//create the instances

const app =express();
const server = http.createServer(app);
const io = new Server(server);

//serve static files

app.use(express.static('public'));

//create a connection
io.on('connection', (socket)=>{//user connecting to the server
    console.log("User connected successfully");
    //getting data from the client
    socket.on('chat message', (msg)=>{
       io.emit("chat message", msg);
    });
    //when user disconnects from the server
    socket.on('disconnect', ()=>{
        console.log('User Disconnected');
    });
});

// run the server
server.listen(3000, ()=>{
    console.log("listening on port: 3000")
});