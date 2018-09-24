const mongoose = require('mongoose')
const Author = require('./models/Author.js')
const Book = require('./models/Book.js')
mongoose.Promise = global.Promise

const models = {
  Author,
  Book
}

const startDB = ({ user, pwd, url, db}) => mongoose.connect(`mongodb://${user}:${pwd}@${url}/${db}`, { useNewUrlParser: true })

module.exports = {
  startDB,
  models
}