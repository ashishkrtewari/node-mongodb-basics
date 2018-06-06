const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log(`unable to connect to server: 500`);
    }
    console.log('Connected to mongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("5b1748442a096b21ece9b344")
    // }, {
    //     $set : {
    //         completed: true
    //     }
    // },{
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result)
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("5b1748442a096b21ece9b345")
    }, {
        $inc : {
            age: 10
        }
    },{
        returnOriginal: false
    }).then((result) => {
        console.log(result)
    });
    
    client.close();
})