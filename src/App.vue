<template>
  <v-app>
    <div class="text-xs-center">

      <v-btn color="primary" dark>
        comic demo
      </v-btn>
      <v-btn color="primary" dark class="deep-orange">
        iTunes demo
      </v-btn>

      <child></child>
      <!--<child v-bind:passedCounter="counter"></child>-->
    </div>
  </v-app>
</template>

<script>
import Child from './components/Child.vue'
export default {
  // data () {
  //   return {
  //     counter: 0
  //   }
  // },
  computed: {
    parentCounter() {
     return this.$store.getters.getCounter; //getters
    }
  },
  methods: {
    addCounter() {
      //this.$store.state.counter++;
      //this.$store.commit('addCounter',10); //call mutations
      this.$store.dispatch('addCounter',10); //call action
    }
  },
  components: {
    'child': Child
  }
}
</script>

