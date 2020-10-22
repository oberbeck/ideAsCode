var server = '172.17.0.1'; // specify where to reach your MongoDB instance

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = `mongodb://${server}/myDatabase`;

// Use connect method to connect to the Server
MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);

    const db = client.db("test");

  
  // insert an item into the database
  db.collection('myCollection').insertOne({
    myProperty: "myValue"
  })
  .then(function(result) {
    // when successfull, get the collection's content

    var cursor = db.collection('myCollection').find({});
    
    function iterateFunc(doc) {
        console.log(JSON.stringify(doc, null, 4));
     }
     
     function errorFunc(error) {
        console.log(error);
     }
     
     cursor.forEach(iterateFunc, errorFunc);


    client.close();
  }).catch(e=>{
      console.error(e)
      client.close();
  })

});
