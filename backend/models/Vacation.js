const mongoose = require('mongoose');

const vacationSchema = new mongoose.Schema({
    start: Date,
    end: Date,
    days: Number,
    userId: String,
    createdAt: { type: Date,default: Date.now },
    userName: String,
    imageUrl: String
})


const Vacation = mongoose.model('vacation',vacationSchema)

module.exports = Vacation;