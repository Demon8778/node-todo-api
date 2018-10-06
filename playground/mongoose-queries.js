const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } =  require('./../server/models/todo');
const { User } = require('./../server/models/user');

const id = '5bb8be66ec2c5f0f784f9c7c';

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }
Todo.find({
    _id: id,   
}).then((todos) => {
    console.log('Todos', todos);
});

Todo.findOne({
    _id: id,
}).then((todo) => {
    console.log('Todo', todo);
});

Todo.findById(id).then((todo) => {
    if(!todo) {
        return console.log('Id not found');
    }
    console.log('Todo By ID', todo);
}).catch((e) => console.log(e));

User.findById('5bb86ea6e8e2220ae02ca773').then((user) => {
    if(!user) {
        return console.log('Unable to find user');
    }
    console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
    console.log(e)
})

