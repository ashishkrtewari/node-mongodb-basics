const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./db/mongoose');
const { ObjectID } = require('mongodb');
const { Todo } = require('./models/todo');
const { User } = require('./models/user');

var app = express();
const port = process.env.port || 5000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo(req.body);
    todo.save().then((doc) => {
        res.status(200).send(doc);
    },(err) => {
        res.status(400).send(err);
    });
});

app.get('/todos', (req, res)=> {
    Todo.find().then((todos) => {
        res.send({todos})
    }, (err) => {
        res.status(400).send(err);
    });
});

app.get('/todos/:id', (req, res) => {
    console.log(req.params.id);
    if(!ObjectID.isValid(req.params.id)){
        res.status(404).send();
    }
    Todo.findById(req.params.id).then((todo) => {
        if(!todo){
            return console.log('Id not found');
        }
        res.send({todo})
    }).catch((err) => res.status(400).send());
});

app.listen(port, () => {
    console.log(`Listening to ${port}`);
})

module.exports = {app};