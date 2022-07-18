const mongoose = require('mongoose');

const todoList = mongoose.Schema({
    id:{
        type:Number,
        require:true
    },
    item:{
        type:String,
        require:true
    }
});

module.exports = mongoose.model('todolist', todoList);