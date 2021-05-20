const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const crudSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
        min: 0,
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model("crud", crudSchema)