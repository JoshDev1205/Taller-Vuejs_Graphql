<template>
  <div>
    <AddAuthor></AddAuthor>
    <ListAuthors></ListAuthors>
  </div>
</template>
<script>
import AddAuthor from "./AddAuthor.vue"
import ListAuthors from "./ListAuthors.vue"
export default {
  name: "Author",
  components: {
    AddAuthor,
    ListAuthors
  }
}
</script>
