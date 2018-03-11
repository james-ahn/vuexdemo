<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="currentComic"
      class="elevation-1"
      hide-actions
    >
      <template slot="items" slot-scope="props">
        <td class="text-xs-center">{{ props.item.num}}</td>
        <td class="text-xs-center">{{ props.item.title }}</td>
        <td class="text-xs-center">{{ props.item.year + props.item.month + props.item.day | dateFormat}}</td>
      </template>
    </v-data-table>

    <v-divider class="mb-3"/>

    <v-card>
      <v-card-media :src="currentComic[0].img" height="1000px">
      </v-card-media>
    </v-card>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        headers: [
          {text: 'Numer',align: 'center',sortable: false},
          {text: 'Title',align: 'center',sortable: false},
          {text: 'Date',align: 'center',sortable: false}
        ]
      }
    },
    computed: {
      currentComic() {
        return this.$store.getters.getCurrentComic;
      }
    }
  }
</script>
