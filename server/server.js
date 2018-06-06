const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./db/mongoose');
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

app.listen(port, () => {
    console.log(`Listening to ${port}`);
})