<template>
  <div>
    <AddBook />
    <ListBooks />
  </div>
</template>
<script>
import AddBook from "./AddBook.vue"
import ListBooks from "./ListBooks.vue"
export default {
  name: "Books",
  components: {
    AddBook,
    ListBooks
  }
}
</script>

