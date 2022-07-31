const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const socket = require("socket.io")
const io = socket(server);
const PORT = process.env.PORT || 5000;


io.on("connection", (socket) => {
    socket.emit("me", socket.id)

    socket.on("disconnet", () => {

    })
})
server.listen(PORT, () => console.log("listening server", PORT))