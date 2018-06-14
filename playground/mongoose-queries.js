const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');

var _id = "5b180bc598c40f34d031b221";

if(!ObjectID.isValid(id)){

}

// Todo.find({
//     _id
// }).then((todos) => {
//     if(todos.length < 1){
//         return console.log('No todo match the search');
//     }
//     console.log('todos', todos);
// })

// Todo.findOne({
//     completed: false
// }).then((todo) => {
//     if(!todo){
//         return console.log('Id not found');
//     }
//     console.log('todo', todo);
// })

Todo.findById(_id).then((todo) => {
    if(!todo){
        return console.log('Id not found');
    }
    console.log('todoByID', todo);
}).catch((err) => console.log(err));