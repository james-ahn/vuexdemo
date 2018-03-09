<template>
  <div>
    <hr>
    Child counter : {{ childCounter }} <br>
    <button>+</button>
    <button>-</button>
  </div>
</template>

<script>
  export default {
    name: 'Child',
    // props: ['passedCounter'],
    data: () => ({

    }),
    computed: {
      childCounter() {
       return this.$store.getters.getCounter;
      }
    },
    methods: {
      test() {}
      }
    }
</script>

