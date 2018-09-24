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
    <input class="input-reset ba b--black-20 pa2 mb2 w-40 shadow-1 mr1" type="text" placeholder="Nombre del autor" required v-model="input.name" />
    <input class="input-reset ba b--black-20 pa2 mb2 w-40 shadow-1 mr1" type="text" placeholder="Pais del autor" required v-model="input.country" />
    <button class="ph2 pointer br1 ba b--light-purple bg-purple white ph1 pv2 ml1 mt2 bg-animate hover-bg-light-purple" type="submit">Guardar</button>
    <span v-if="error">Failed</span>
    <span class="ml2" v-if="loading">Loading...</span>
 </form>
  </template>
  </ApolloMutation>
</template>
<script>
import UPDATE_AUTHOR from "../queries/Author/UPDATE_AUTHOR"
export default {
  name: "UpdateAuthor",
  props: ["author"],
  data() {
    return {
      query: UPDATE_AUTHOR,
      id: this.author._id,
      input: {
        name: this.author.name,
        country: this.author.country
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
