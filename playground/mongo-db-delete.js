const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log(`unable to connect to server: 500`);
    }
    console.log('Connected to mongoDB server');
    const db = client.db('TodoApp');

    //deleteMany()
    // db.collection('Users').deleteMany({"name" : "Amit"}).then((res) => {
    //     console.log(res);
    // });

    //deleteOne()
    // db.collection('Todos').deleteOne({text: 'Book Holiday Tickets'}).then((res) => {
    //     console.log(res);
    // });

    //findOneAndDelete()
    db.collection('Users').findOneAndDelete({_id: new ObjectID("5b1545111204901f244f3c23")}).then((res) => {
        console.log(res);
    });
    
    client.close();
})