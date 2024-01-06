const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    task: String,
    isCompleted: Boolean,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Todo', todoSchema);
