const mongoose = require('mongoose')

//This means we are going to use a constant called mongoose coming from

const expenseSchema = new mongoose.Schema({
    name: String,
    amount: Number,
    date: String,
    invoice: String
})


//We have just create the class expenseSchema

module.exports = expenseSchema
