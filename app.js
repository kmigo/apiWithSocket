const expres = require('express')
const app = expres()
const bodyPars = require('body-parser');
const io = require("socket.io-client")("http://apiwebsocket.herokuapp.com/",{
  transports: ["websocket"] //
})

app.use(bodyPars.urlencoded({ extended: false }));
app.use(bodyPars.json());
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

app.post('/send',(req,res,next) => {
  console.log(req.body)
  io.emit('distribution',{
    event:req.body.event
    ,data:req.body.data})
  res.status(200).send({
      mensagem:"ok"
  });
})


module.exports = app;