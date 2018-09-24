const { GraphQLServer } = require('graphql-yoga')
const { startDB, models } = require('./src/db/index')
const resolvers = require('./src/graphql/resolvers.js')
const db = startDB({
  user: 'admin-taller',
  pwd: 'Peru123',
  url: 'ds261072.mlab.com:61072',
  db: 'openlab-taller'
})

const context = {
  models,
  db
}

const opts = {
  port: 4000
}



const Server = new GraphQLServer({
// Aqui se ingresa los resolvers y las definiciones de tipo
  typeDefs: `${__dirname}/src/graphql/schema.graphql`,
  resolvers,
  context
})

Server.start(opts,() => {
  console.log(`Server is running on http://localhost:${opts.port}`);
})