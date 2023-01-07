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
    this.getList();
  },
  props: {
  },
  methods: {
    getList() {
      this.axios.get('https://s3.eu-central-1.amazonaws.com/ecosia-frontend-developer/trees.json').then((response) => {
        console.log(response.data)
      })
    }
  }
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
