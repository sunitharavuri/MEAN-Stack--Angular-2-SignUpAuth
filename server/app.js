var express = require('express');
var bodyparser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var path = require('path');
var config =require('./config/database');
var app=express();

mongoose.Promise=global.Promise;
mongoose.connect(config.uri,(err)=>{
    if(err){
        console.log('could not connect to database:',err);

    }else{
        //console.log(config.secret);
        console.log('connected to database :'+config.db)
    }
});
app.use(express.static(__dirname+'/frontend/dist/'));

app.get('/', (req, res) => {
    res.sendFile(pathg.join(__dirname+'/frontend/dist/index.html'));

});

const port = 7500;
app.listen(port, () => {
    console.log('server started running at port' + port);

});