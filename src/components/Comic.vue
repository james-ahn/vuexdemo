<template>
  <v-container>
    <div class="mb-4 text-xs-center">
      <div>There are three buttons such as previous, current and after button</div>
      <v-btn icon @click="preComicAction()">
        <v-icon>keyboard_arrow_left</v-icon>
      </v-btn>
      <v-btn color="success" @click="currentComicAction()">Call CurrentComic</v-btn>
      <v-btn icon @click="afterComicAction">
        <v-icon>keyboard_arrow_right</v-icon>
      </v-btn>
    </div>
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
        ],
        comicCount: 1
      }
    },
    created: function ()  {
      this.currentComicAction();
    },
    methods:{
      preComicAction() {
        if(this.comicCount <= 1){
          return alert('lowest comic');
        }
        this.comicCount --;
        this.$store.dispatch('preComicAction',this.comicCount); //call action
      },
      currentComicAction() {
        this.$store.dispatch('currentComicAction'); //call action
      },
      afterComicAction() {
        if(this.comicCount >= 1965){
          return alert('highest comic');
        }
        this.comicCount ++;
        this.$store.dispatch('afterComicAction',this.comicCount); //call action
      }
    },
    computed: {
      currentComic() {
        return this.$store.getters.getCurrentComic;
      }
    }
  }
</script>

