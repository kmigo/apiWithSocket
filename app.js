const expres = require('express')
const app = expres()
const io = require("socket.io-client")("http://apiwebsocket.herokuapp.com/",{
  transports: ["websocket"] //
})

io.on("connection", (socket) => {
  console.log('logged');
})
app.get('/',(req,res,next) => {
  console.log('ola')
  io.emit('distribution',{
    event:"task"
    ,data:'df'})
  res.status(200).send({
      mensagem:"ok"
  });
})

module.exports = app;