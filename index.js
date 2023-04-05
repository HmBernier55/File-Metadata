var express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
require('dotenv').config()

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(fileUpload({
  createParentPath: true
}))

// FRONT END
// Created by FCC
app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse', (req, res) => {
/*
Inputs:
  Any file from your computer

Outputs:
  JSON object of the inputted file's name, type, and size
*/
  res.json({
    name: req.files.upfile.name,
    type: req.files.upfile.mimetype,
    size: req.files.upfile.size
  });
});


const port = 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
