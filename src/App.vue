<template id="app">
  <Search/>
  <main class="body">
    <Trees/>
  </main>
  <footer class="footer"></footer>
</template>

<script>
import Trees from "./components/Trees.vue";
import Search from "./components/Search.vue";
export default {
  name: 'App',
  components: {
    Trees,
    Search
  },
  created() {
    document.title = "Ecosia Trees"
   
  },
}
</script>

<style lang="scss">
#app {
  background-color: #fff;
  text-align: center;
  color: #2c3e50;
}
.header{
  min-height: 100px;
  background-color: #e6e7ec;
  display: flex;
  align-items: center;
  .search {
    min-width: 40%;
  }
}
</style>
