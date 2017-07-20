var express = require('express');
var bodyparser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var path = require('path');
var passport= require('passport');
const config=require('./config/database');

mongoose.connect(config.database, { useMongoClient: true });

mongoose.Promise = global.Promise;
mongoose.connection.on('connected', ()=>{
    console.log('connected to database'+config.database)
    
});
mongoose.connection.on('error', (err) => {
    console.log('database error' +err)
});


var app = express();

const users = require('./routes/users')


app.use(cors());


require('./config/passport')(passport);


app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyparser.json());

app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users',users);
//app.use('/api', routes);
//app.use(app.router);
//routes.initialize(app);

app.get('/', (req, res) => {
    res.send('hi');

});


const port = 9000;

app.listen(port, () => {
    console.log('server started running at port' + port);

});
