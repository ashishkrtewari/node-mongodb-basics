const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log(`unable to connect to server: 500`);
    }
    console.log('Connected to mongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5b15414bafce8732e43ee518')
    // }).toArray().then((docs) => {
    //     console.log(docs);
    // }, (err) => {
    //     console.log("Unable to fetch todos", err);
    // });

    db.collection('Todos').find().count().then((count) => {
        console.log(` Todos Count: ${count}`);
    }, (err) => {
        console.log("Unable to fetch todos", err);
    });

    db.collection('Users').find({name:"Ashish"}).toArray().then((docs) => {
        console.log(docs);
    }, (err) => {
        console.log("Unable to fetch users", err);
    })

    
    client.close();
})