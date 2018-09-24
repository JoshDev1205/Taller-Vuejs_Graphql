<template>
  <ApolloMutation
    :mutation="query"
    :variables="{
      name,
      country
    }"
    :update="update"
    @done="onDone"
  >
  <template slot-scope="{mutate, loading, error}">
  <h2 class="f4 light-purple">Agregar Autor</h2>
  <form @submit.prevent="mutate">
    <input class="input-reset ba b--black-20 pa2 mb2 db w-100 shadow-1" type="text" placeholder="Nombre del autor" required v-model="name" />
    <input class="input-reset ba b--black-20 pa2 mb2 db w-100 shadow-1" type="text" placeholder="Pais del autor" required v-model="country" />
    <button class="dib pointer br2 w-100 ba b--light-purple bg-purple white pa2 ml1 mt2 bg-animate hover-bg-light-purple v-top" type="submit">Agregar Autor</button>
    <span v-if="error">Error en la creación</span>
    <span v-if="loading">Loading...</span>
  </form>
  </template> 
  </ApolloMutation>
</template>
<script>
import ADD_AUTHOR from "../queries/Author/ADD_AUTHOR"
import GET_ALL_AUTHORS from "../queries/Author/GET_ALL_AUTHORS"
export default {
  name: "AddAuthor",
  data() {
    return {
      query: ADD_AUTHOR,
      name: "",
      country: ""
    }
  },
  methods:{
    onDone() {
      this.name = ""
      this.country = ""
    },
    update (store, { data: { createAuthor }}) {
      const query = { query: GET_ALL_AUTHORS }
      const data = store.readQuery(query)
      console.log(data.authors)
      data.authors.push(createAuthor)
      store.writeQuery({
        ...query,
        data
      })
    }
  }
}
</script>

