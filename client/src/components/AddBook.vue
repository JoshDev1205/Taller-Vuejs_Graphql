<template>
  <ApolloMutation
    :mutation="query"
    :variables="{
      title,
      desc,
      authorId
    }"
    :update="update"
    @done="onDone"
  >
  <template slot-scope="{mutate, loading, error}">
  <h2 class="f4 light-purple">Agregar Libro</h2>
  <form @submit.prevent="mutate">
    <input 
    class="input-reset ba b--black-20 pa2 mb2 db w-100 shadow-1" 
    type="text" 
    placeholder="Nombre del libro" required v-model="title" />
    <input 
    class="input-reset ba b--black-20 pa2 mb2 db w-100 shadow-1" 
    type="text" 
    placeholder="Descripción" required v-model="desc" />
    <ApolloQuery
    :query="require('../queries/Author/GET_ALL_AUTHORS.js').default"
    >
    <template slot-scope="{ result: { loading, error, data }}">
    <span v-if="loading">Loading...</span>
    <span v-if="error">Error en la consulta</span>
    <select class="w-100 h2 f5 b bg-near-white ba b--purple purple" v-model="authorId">
      <option disabled value="">Seleccione</option>
      <option v-for="author in data.authors" :key="author._id" :value="author._id">{{author.name}}</option>
    </select>
    </template>
    </ApolloQuery>
    <button 
    class="dib pointer br2 w-100 ba b--light-purple bg-purple white pa2 ml1 mt2 bg-animate hover-bg-light-purple v-top" 
    type="submit">Agregar Libro</button>
    <span v-if="error">Error en la creación</span>
    <span v-if="loading">Loading...</span>
  </form>
  </template> 
  </ApolloMutation>
</template>
<script>
import GET_ALL_BOOKS from '../queries/Book/GET_ALL_BOOKS'
import ADD_BOOK from '../queries/Book/ADD_BOOK'
export default {
  name: "AddBook",
  data () {
    return {
      query: ADD_BOOK,
      title: "",
      desc: "",
      authorId: "",
    }
  },
  methods: {
    onDone() {
      this.title = ""
      this.desc = ""
      this.authorId = ""
    },
    update(store, { data: { createBook }}) {
      const query = { query: GET_ALL_BOOKS }
      const data = store.readQuery(query)
      console.log(data.books)
      data.books.push(createBook)
      store.writeQuery({
        ...query,
        data
      })
    }
  }
}
</script>
