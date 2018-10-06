const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true });

const Todo = mongoose.model('Todo', {
    text: {
        type: String
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
});

// const newTodo = new Todo({
//     text: 'Cook dinner'
// });

// newTodo.save().then((doc) => {
//     console.log('Todo is being saved', doc);
// }, (e) => {
//     console.log('Unable to save todo', e);
// });

const anotherToDo = new Todo({
    text: `Now I know what to do`,
    completed: false,
    completedAt: 123
});

anotherToDo.save().then((doc) => {
    console.log('Todo is being saved: ',doc);
}, (e) => {
    console.log('Unable to save todo: ', e);
})
