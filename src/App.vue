<template>
  <div id="app">
    Parent counter : {{ parentCounter }} <br>
    <button @click="addCounter">+</button>
    <button @click="subCounter">-</button>
    <child></child>
    <!--<child v-bind:passedCounter="counter"></child>-->
  </div>
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
     return this.$store.getters.getCounter;
    }
  },
  methods: {
    addCounter() {
      this.$store.state.counter++;
    },
    subCounter() {
      this.$store.state.counter--;
    }
  },
  components: {
    'child': Child
  }
}
</script>

