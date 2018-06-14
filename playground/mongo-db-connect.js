const { MongoClient, ObjectID } = require('mongodb');

var obj = new ObjectID();

console.log(obj);

// MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    MongoClient.connect('mongodb://cooltewari:dengaOOMA12_3@ds023520.mlab.com:23520/meanapp01', (err, client) => {
    if (err) {
        return console.log(`unable to connect to server: 500`);
    }
    console.log('Connected to mongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text: "Something String Like",
    //     completed: false
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // })

    // db.collection('Users').insertOne({
    //     name: "Ashish",
    //     age: 28,
    //     location: "Pune"
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert User', err);
    //     }
    //     // console.log(JSON.stringify(result.ops, undefined, 2));
    //     console.log(result.ops[0]._id.getTimestamp());
    // })

    client.close();
})