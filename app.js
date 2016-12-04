let mongoClient = require('mongodb').MongoClient;
let assert = require('assert');

let conUrl = 'mongodb://localhost:27017/test';

let insertDocuments = function (db) {
  return new Promise(function (resolve, reject) {
    let collection = db.collection('documents');
    collection.insertMany([
      {a: 1}, {a: 2}, {a: 3}
    ], function (err, result) {
      if (err != null) {
        reject(err);
      } else if (result.result.n != 3 || result.ops.length != 3) {
        reject(new Error("Length error"));
      } else {
        console.log("Inserted 3 documents into the collection");
        resolve(result);
      }
    });
  });
};

let findDocuments = function (db) {
  return new Promise(function (resolve, reject) {
    let collection = db.collection('documents');
    collection.find({}).toArray(function (err, docs) {
      if (err != null) {
        reject(err);
      } else {
        resolve(docs);
      }
    });
  });
}

let connection = new Promise(function (resolve, reject) {
  mongoClient.connect(conUrl, function (err, db) {
    if (err != null) {
      reject(err);
    } else {
      console.log("Connected successfully to server!");
      resolve(db);
    }
  });
});

connection.then(function (db) {
  return insertDocuments(db)
    .then(function (result) {
      console.log(result);
      return db;
    })
    .then(findDocuments)
    .then(function (docs) {
      console.log(docs);
      return db;
    });
})
  .then(function (db) {
    return db.close();
  })
  .catch(function (err) {
  console.log(err);
});
