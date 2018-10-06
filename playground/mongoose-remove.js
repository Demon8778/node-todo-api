const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } =  require('./../server/models/todo');
const { User } = require('./../server/models/user');

//Todo.remove
// Todo.deleteMany({}).then((result) => {
//     console.log(result);
// });

Todo.findOneAndDelete({ _id: '5bb8ed6dbecb24ec241beeb8'}).then((todo) => {
    console.log(todo);
});


Todo.findByIdAndDelete('5bb8ed6dbecb24ec241beeb8').then((todo) => {
    console.log(todo);
});
