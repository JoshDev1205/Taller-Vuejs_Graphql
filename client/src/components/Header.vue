<template>
  <header>
    <h1 class="purple tc">Vue Libreria</h1>
    <nav class="f6 fw6 tracked">
    <router-link to="/" class="f6 grow no-underline br4 ba bw2 ph3 pv2 mb2 dib light-purple mr3">Autores</router-link>
    <router-link to="/libros" class="f6 grow no-underline br4 ba bw2 ph3 pv2 mb2 dib light-purple">Libros</router-link>
    </nav>
  </header>
</template>
<script>
export default {
  name: "Header"
}
</script>
<style scoped>

</style>
