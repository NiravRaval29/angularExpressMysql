/*
	Reference link : https://codeburst.io/using-nodejs-as-a-proxy-for-angularjs-ajax-requests-8e5e94203e0d
	https://www.js-tutorials.com/javascript-tutorial/node-js-rest-api-add-edit-delete-record-mysql-using-express/
*/
var express = require('express');
var httpProxy = require('http-proxy');
var mysql = require('mysql');
var bodyParser= require('body-parser');

var server = express();

server.set('port', 3000);


/*Mysql Configuration*/
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "test"
});




// Serve static directory where our angular app is located.
server.use(express.static(__dirname + '/app'));
server.use(bodyParser.json()); // for parsing application/json
server.use(bodyParser.urlencoded({ extended: true })); // for parsing       application/x-www-form-urlencoded

var apiProxy = httpProxy.createProxyServer();

// Grab all requests to the server with "/space/".
server.all("/space/*", function(req, res) {
    console.log("Request made to /space/");
});

server.get("/view", function(req, res) {
    console.log("Request made to / view");
    con.query("SELECT * FROM student", function(err, result, fields) {
            if (err){console.log("err",err)};
            res.json({"data" : result});
        }
    ); 
});

/*	Insert Data into database */
server.post("/add", function(req, res) {
    console.log("Request made to / add",req.body);
    var name = req.body.name;
    var rollno = req.body.rollno;
    var phoneNo = req.body.phoneNo;

    var query = "INSERT INTO student (name, rollno, phoneNo) VALUES ('"+ name + "'," + rollno + "," + phoneNo +")";
    // var query = "insert into student (id,name,rollno,phoneNo) VALUES (''," + name + ',' + rollno + ',' + phoneNo + ")";
    console.log(query)
    con.query(query,function(err,result,fields){
    	if(err){console.log("err",err);}
    	res.json({"data" : result});
    });

});

server.get("/getStudent/:id", function(req, res) {
    console.log("Request made to / view",req.body);
    return;
    con.query("SELECT * FROM student", function(err, result, fields) {
            if (err){console.log("err",err)};
            res.json({"data" : result});
        }
    ); 
});

server.put("/update", function(req, res) {

    console.log("Request made to / update",req.body);
    res.json({"stuff": "some stuff"});
});

server.post ("/delete", function(req, res) {
    console.log("Request made to / delete");
    res.json({"stuff": "some stuff"});
});

server.listen(server.get('port'), function() {
    console.log('Express server listening on port ' + server.get('port'));
});