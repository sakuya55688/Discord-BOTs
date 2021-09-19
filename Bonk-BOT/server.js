const express = require("express");
const server = express();

server.all("/", (req,res) => {
  res.send("BOT Running!!!");
});

function keepRunning(){
  server.listen(3000 , () => {
    console.log("Server Ready!!!");
  });
}

module.exports = keepRunning;