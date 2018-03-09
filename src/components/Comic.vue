<template>
  <v-container>

    <div>
      <v-btn color="success" @click="currentComic()">axios test</v-btn>
    </div>

    <!--<child></child>-->
    <!--<child v-bind:passedCounter="counter"></child>-->
  </v-container>

</template>

<script>
  //import Child from './components/Comic.vue'
  export default {
    data: () => ({

    }),
    computed: {
      childCounter() {
       return this.$store.getters.getCounter;
      }
    },
    methods: {
      currentComic() {
        //this.$store.state.counter++;
        //this.$store.commit('addCounter',10); //call mutations
        this.$store.dispatch('currentComic'); //call action
      }
    }
  }
</script>

