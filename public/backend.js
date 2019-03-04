const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const urldecoderParser = bodyParser.urlencoded({extended:false});

app.use(express.static("/home/kreez/Health Samurai/TestServer/public/icons"));

app.get('/', (req, res) =>{
    res.sendFile('/home/kreez/Health Samurai/TestServer/front.html');
});

app.listen(port, (err) =>{
    if (err){
        return console.log('Something bad happend!', err);
    }else{
        return console.log('Server start on port:', port);
    }
});

app.get('/auth', (req, res)=> {
    res.sendFile('/home/kreez/Health Samurai/TestServer/auth.html');
});

app.get('/ban', (req, res)=>{
    res.sendFile('/home/kreez/Health Samurai/TestServer/ban.html');
});

app.get('/love', (req, res)=>{
    res.sendFile('/home/kreez/Health Samurai/TestServer/lov.html');
});
