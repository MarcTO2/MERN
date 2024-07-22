const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    text: { type: String, requires: true },
    completed: { type: Boolean, default: false},
    createdAt: { type: Date, default: Date.now },
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;