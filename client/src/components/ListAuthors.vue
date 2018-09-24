<template>

  <ApolloQuery
    :query="require('../queries/Author/GET_ALL_AUTHORS.js').default"
  >
  <template slot-scope="{ result: { loading, error, data }}">
    <h2 class="f4 light-purple">Lista de autores</h2>
    <span v-if="loading">Loading...</span>
    <span v-if="error">Error en la consulta</span>
    <ul class="list pl0" v-if="data.authors.length">
      <li v-for="author in data.authors" :key="author._id">
        <div v-if="updateAuthor">
          <span class="f6 ph2">{{ author.name }}</span>
          -
          <span class="f6 ph2"> {{ author.country }}</span>
          <button class="ph2 pointer br1 ba b--light-purple bg-purple white pa1 ml1 mt2 bg-animate hover-bg-light-purple" @click="updatingAuthor()">Editar</button>
        </div>
        <UpdateAuthor v-else :author="author" @resetForm="formReset($event)"></UpdateAuthor>
      </li>
    </ul>
  </template>

  </ApolloQuery>
</template>
<script>
import UpdateAuthor from "./UpdateAuthor.vue"
export default {
  name: "ListAuthors",
  components:{
    UpdateAuthor
  },
  data() {
    return {
      updateAuthor: true
    }
  },
  methods: {
    formReset(resetForm) {
      this.updateAuthor = resetForm
    },
    updatingAuthor() {
      this.updateAuthor = false
    }
  }
}
</script>

