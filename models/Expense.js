const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    category: { type: String, required: true },
    amount: { type: Number, required: true },
    date: { type: Date, default: Date.now },
    description: { type: String }
});


const cardSchema = new mongoose.Schema({
    name: { type: String, required: true },
    count: { type: Number, required: true },
    date: { type: Date, default: Date.now },
    description: { type: String }
});


module.exports = mongoose.model('Expense', expenseSchema);