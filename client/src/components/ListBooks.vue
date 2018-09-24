<template>
  <ApolloQuery 
  :query="require('../queries/Book/GET_ALL_BOOKS.js').default"
  >
  <template slot-scope="{ result: { loading, error, data }}">
    <h2 class="f4 light-purple">Lista de libros</h2>
    <span v-if="loading">Loading...</span>
    <span v-if="error">Error en la consulta</span>
    <ul class="list pl0" v-if="data.books.length">
      <li v-for="book in data.books" :key="book._id">
        <div v-if="showBooks">
          <span class="f6 ph2">{{ book.title }}</span>
          -
          <span class="f6 ph2"> {{ book.desc }}</span>
          -
          <span class="f6 ph2"> {{ book.quantity }}</span>
          -
          <span class="f6 ph2"> {{ book.author.name }}</span>
          <button 
          class="ph2 pointer br1 ba b--light-purple bg-purple white pa1 ml1 mt2 bg-animate hover-bg-light-purple" 
          @click="updatingBook()">Editar</button>
        </div>
        <UpdateBook v-else :book="book" @resetForm="formReset($event)" />
      </li>
    </ul>
  </template>
  </ApolloQuery>
</template>
<script>
import UpdateBook from "./UpdateBook.vue"
export default {
  name: "ListBooks",
  components: {
    UpdateBook
  },
  data () {
    return {
      showBooks: true
    }
  },
  methods: {
    formReset(resetForm) {
      this.showBooks = resetForm
    },
    updatingBook() {
      this.showBooks = false
    }
  }
}
</script>
