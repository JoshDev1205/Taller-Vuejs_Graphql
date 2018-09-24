<template>
  <div id="app" class="bg-light-gray flex flex-column items-center roboto vh-100">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header.vue"
export default {
  name: "App",
  components: {
    Header,
  }
};
</script>

<style>
</style>
