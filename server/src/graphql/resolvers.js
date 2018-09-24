module.exports = {
  Query: 
  {
    author: async (parents,{ _id },{ models }) => {
      const Author = await models.Author.findOne({ _id })
      return Author
    },
    authors: async(parents, args, { models }) => {
      const Authors = await models.Author.find({})
      return Authors
    },
    book: async (parents,{ _id },{ models }) => {
      const Book = await models.Book.findOne({ _id }).populate('author')
      return Book
    },
    books: async(parents, args, { models }) => {
      const Books = await models.Book.find({}).populate('author')
      return Books
    }
  },
  Book: {
    author: async ({ authorId }, _ ,{ models }) => {
      const Author = await models.Author.findOne({_id: authorId.toString()})
      return Author
    }
  },
  Mutation: {
    createAuthor: async (parents, args, { models }) => {
      return await models.Author.create(args)
    },
    updateAuthor: async (parents, { _id, input }, { models }) => {
      return await models.Author.findOneAndUpdate({_id},input,{new: true})
    },
    createBook: async (parents, args, { models }) => {
      return await models.Book.create(args)
    },
    updateBook: async (parents, {_id, input}, { models }) => {
      return await models.Book.findOneAndUpdate({_id}, input, {new: true})
    }
  }
}