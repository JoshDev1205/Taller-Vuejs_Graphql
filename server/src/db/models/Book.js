const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true
  },
  desc: {
    type: String,
    require: true
  },
  authorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author'
  },
  quantity: {
    type: Number,
    default: 0
  },
  createdOn: {
    type: Date,
    default: Date.now
  }
})

const Book = mongoose.model('Book', BookSchema)

module.exports = Book