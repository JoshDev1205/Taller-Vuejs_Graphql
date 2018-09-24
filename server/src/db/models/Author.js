const mongoose = require('mongoose')

const AuthorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true
  },
  createdOn: {
    type: Date,
    default: Date.now
  }
})

const Author = mongoose.model('Author', AuthorSchema)

module.exports = Author