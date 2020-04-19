var express = require('express');
var bodyParser = require('body-parser')
var morgan = require('morgan')

var app = express();

var port = process.env.PORT || 3000;

app.use("/asset", express.static(__dirname + "./view"));
app.use("/asset", express.static(__dirname + "../public"));
app.use(bodyParser.urlencoded({
	extended: false
}))

app.use(bodyParser.json())

var urlencodedParser = bodyParser.urlencoded({
	extended: false
})

var urldb = "mongodb+srv://vnanhkhoa:anhkhoa121@anhkhoa121-yly6j.mongodb.net/test?retryWrites=true&w=majority";
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));