<template>
  <ApolloMutation
  :mutation= "query"
  :variables= "{
    id,
    input
  }"
  @done= "onDone"
  >
  <template slot-scope="{mutate, loading, error}">
    <form @submit.prevent="mutate">
    <input class="input-reset ba b--black-20 pa2 mb2 w-30 shadow-1 mr1" type="text" required v-model="input.title" />
    <input class="input-reset ba b--black-20 pa2 mb2 w-40 shadow-1 mr1" type="text" required v-model="input.desc" />
    <input class="input-reset ba b--black-20 pa2 mb2 w-10 shadow-1 mr1" type="text" required v-model="input.quantity" />
    <button class="ph2 pointer br1 ba b--light-purple bg-purple white ph1 pv2 ml1 mt2 bg-animate hover-bg-light-purple" type="submit">Guardar</button>
    <span v-if="error">Failed</span>
    <span class="ml2" v-if="loading">Loading...</span>
 </form>
  </template>
  </ApolloMutation>
</template>
<script>
import UPDATE_BOOK from "../queries/Book/UPDATE_BOOK"
export default {
  name: "UpdateBook",
  props: ['book'],
  data () {
    return {
      query: UPDATE_BOOK,
      id: this.book._id,
      input: {
        title: this.book.title,
        desc: this.book.desc,
        quantity: this.book.quantity
      }
    }
  },
  methods: {
    onDone() {
       this.$emit("resetForm", true)
    }
  }
}
</script>
