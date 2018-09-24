import Vue from "vue";
import Router from "vue-router";
import Author from "../components/Author.vue";
import Books from "../components/Book.vue";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Author",
      component: Author
    },
    {
      path: "/libros",
      name: "Books",
      component: Books
    },
    {
      path: "*",
      redirect: {
        name: "Author"
      }
    }
  ],
  mode: "history"
});
