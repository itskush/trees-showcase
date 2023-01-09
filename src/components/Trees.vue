<template>
  <section class="body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap m-auto w-full" v-if="filteredTrees != null">
        <div class="flex w-full md:w-1/3 lg:w-1/3 p-7 flex items-center " v-for="(tree, index) in filteredTrees" v-bind:key="index">
          <div class="w-full mx-auto h-full border-2 border-black border-opacity-70 rounded-lg overflow-hidden">
            <div class="p-6">
              <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{{ tree.name }}</h1>
              <h2 class="tracking-widest text-xs title-font font-medium text-blue-custom mb-1">{{ tree.species_name }}</h2>
            </div>
            <div class="flex flex-col items-center">
              <img v-show="tree.visible" class="lg:h-48 md:h-36 my-auto w-2/4" :src="tree.image"
              :alt="tree.name">
              <button class="button-show justify-center mb-4 mt-4" @click="tree.visible = !tree.visible">{{ !tree.visible ? 'Show Image' : 'Hide Image'}}</button>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap m-auto w-full" v-else>
         <div class="text-2xl flex align-center text-blue-custom">No trees found</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Trees-Showcase',
  data() {
    return {
      trees: [],
      hide: true,
      searchValue: '',
    }
  },
  created() {
    this.getList();
  },
  props: {
  },
  mounted() { 
    this.emitter.on("toggle-search", value => {
      this.searchValue = value;
    });
  },
  methods: {
    getList() {
      try {
        this.$http.get('https://s3.eu-central-1.amazonaws.com/ecosia-frontend-developer/trees.json').then((response) => {
        this.trees = response.data.trees.map(trees => {
            if (trees !== null){
              trees.visible = false;
              return trees;
            } 
            return trees;
          });
        })
      } catch (error) {
        console.log("There was an error: " + error);
      }
    },
  },
  computed: {
    filteredTrees() {
      let filteredTreesArray = null;
      if (this.trees) {
        filteredTreesArray = this.trees.filter(tree => {
          return tree.name.toLowerCase().includes(this.searchValue.toLowerCase())
        })
      }
      return filteredTreesArray;
     
    }
  }
}
</script>

<style lang="scss" scoped>
.button-show{
  padding: .5em;
  background-color: white;
  border: 5px solid;
  box-shadow: 10px 5px black;
  cursor: pointer;
  font-family: 'Plaster', cursive;
  color: rgba(0,0,0,.75);
  transition: all .2s linear;
  &:hover {
    color: black;
    box-shadow: 10px 5px grey;
  }
}
.text-blue-custom{
  color: rgb(47, 71, 113);
}
</style>
