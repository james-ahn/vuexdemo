<template>
  <v-app>
    <div class="text-xs-center">
      <v-btn color="info" dark  @click="$router.push('/')">
        main
      </v-btn>
      <v-btn color="success" dark  @click="$router.push('/Comic')">
        comic demo
      </v-btn>
      <v-btn color="warning" dark  @click="$router.push('/Itunes')">
        iTunes demo
      </v-btn>
    </div>
    <v-divider/>
    <router-view></router-view>

  </v-app>
</template>

<script>
export default {}
</script>

