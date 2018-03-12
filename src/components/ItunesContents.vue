<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <v-card v-if="flagData">
          <v-list two-line>
            <template v-for="(item, index) in itunesData">
              <v-list-tile avatar @click="">
                <v-list-tile-avatar>
                  <img :src="item.artworkUrl100">
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title v-html="item.artistName"></v-list-tile-title>
                  <v-list-tile-sub-title v-html="item.collectionName"></v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider></v-divider>
            </template>
          </v-list>
        </v-card>
        <v-card v-else>
          <v-list two-line>
            <template>
            <div class="text-xs-center">no data</div>
            </template>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import {mapstate} from 'vuex'
  export default {
    computed: {
      itunesData(){
        return this.$store.getters.getItunesData;
      },
      flagData(){
        return this.$store.getters.getFlagData;
      }
    }
  }
</script>
