var express = require('express');
var bodyparser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var path = require('path');
var format = require('date-format');
var multer = require('multer');
var morgan = require('morgan');
var fs = require('fs');
 //var fileUpload=require()
var app = express();

const route = require('./routes/route');


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/challengelist', { useMongoClient: true });

mongoose.connection.on('connected', () => {
    console.log('connected to database mongodb   @ 27017');
});
mongoose.connection.on('error', (err) => {
    if (err) {
        console.log('error in database connection:' + err);
    }

});




app.use(cors());
app.use(morgan('dev'));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
 app.use(bodyparser.text());
 app.use(bodyparser.json({ type: 'application/json' }));  

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'uploads')));



app.use('/api', route);
//image upload

// var storage = multer.diskStorage({

//     destination: function (req, file, cb) {
//         cb(null, './uploads/')
//     },

//     filename: function (req, file, cb) {
//         cb(null, file.originalname);
//     }
// });

// var upload = multer({ storage: storage });

// app.post("/upload", upload.array("uploads[]", 12), function (req, res) {
//     console.log('files', req.files);
//     res.send(req.files);
// });

app.get('/', (req, res) => {
    res.send('hi');

});

const port = 6200;
app.listen(port, () => {
    console.log('server started running at port' + port);

});