var express = require('express');
var app = express();
var cors = require('cors')
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(cors());

const admin = require('firebase-admin');

var serviceAccount = require('./firebasekey/node-suspecttracker-f43b5-firebase-adminsdk-yf2dt-14d05d3e32.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

var db = admin.firestore();


app.get('/', function (req, res) {
   res.send('Hello World');
   
   
   
})

var server = app.listen(4242, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})


app.post('/createsuspect',function(req,res){
console.log("::: under /createsuspect 22:::");
console.log(req.body);
	
	res.send("posted");
	
	
});

// This responds a GET request for the /list_user page.
app.get('/list_user', function (req, res) {
   console.log("Got a GET request for /list_user");
   res.send('Page Listing');
   
   
var docRef = db.collection('users').doc('SEO');

var setAda = docRef.set({
  first: 'Kishore',
  last: 'V',
  born: 9189
});



db.collection('users').get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log(doc.id, '=>', doc.data());
    });
  })
  .catch((err) => {
    console.log('Error getting documents', err);
  });
  
   
})