var express = require('express');
var path = require("path");
var bodyParser = require('body-parser');
var mongo = require("mongoose");


var db = mongo.connect("mongodb://localhost:27017/galeria", function (err, response) {
  if (err) { console.log(err); }
  else { console.log('Connected to DDBB'); }
});


var app = express()
app.use(bodyParser());
app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ extended: true }));


app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Origin, X-Auth-Token');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

var Schema = mongo.Schema;

var ItemsSchema = new Schema({
  title: { type: String },
  description: { type: String },
  categories: { type: Object },
  image: { type: String },

}, { versionKey: false });

var model = mongo.model('items', ItemsSchema);


//API
app.post("/api/Upload", function (req, res) {

});

app.post("/api/SaveItem", function (req, res) {
  var mod = new model(req.body);
  mod.save(function (err, data) {
    if (err) {
      res.send(err);
    }
    else {
      res.send({ data: "Record has been Inserted..!!" });
    }
  });
})

app.post("/api/DeleteItem", function (req, res) {
  model.deleteOne({ _id: req.body.id }, function (err) {
    if (err) {
      res.send(err);
    }
    else {
      res.send({ data: "Record has been Deleted..!!" });
    }
  });
})

app.get("/api/GetItems", function (req, res) {
  model.find({}, function (err, data) {
    if (err) {
      res.send(err);
    }
    else {
      res.send(data);
    }
  });
})

app.get("/api/GetItemsByCategory", function (req, res) {
  model.find({ "categories": { $in: [ req.query.category ] } }, function (err, data) {
    if (err) {
      res.send(err);
    }
    else {
      res.send(data);
    }
  });
})


app.listen(8080, function () {

  console.log('Example app listening on port 8080!')
})  