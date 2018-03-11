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
    <ComicContents/>
  </v-container>
</template>
<script>
  import ComicContents from '../components/ComicContents.vue'
  export default {
    data () {
      return {
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
    components: {
      'ComicContents': ComicContents
    }
  }
</script>

