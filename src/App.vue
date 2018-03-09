<template>
  <v-app>
    <div class="text-xs-center">

      <v-btn color="primary" dark  @click="$router.push('/Comic')">
        comic demo
      </v-btn>
      <v-btn color="primary" dark class="deep-orange"  @click="$router.push('/Itunes')">
        iTunes demo
      </v-btn>
      <v-divider/>

      <router-view></router-view>

    </div>
  </v-app>
</template>

<script>
export default {
  methods: { }
}
</script>

