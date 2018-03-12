<template>
  <v-container>
    <div>
      <v-alert outline color="info" :value="true" class="text-xs-center">
        Search the Itunes music video
      </v-alert>
    </div>
    <v-form v-model="valid" ref="form" lazy-validation>
      <v-text-field
        label="Name"
        v-model="name"
        :rules="nameRules"
        :counter="10"
        required
      ></v-text-field>
      <v-select
        label="Country"
        v-model="select"
        :items="items"
        :rules="[v => !!v || 'Country is required']"
        required
      ></v-select>
      <div class="text-xs-center">
        <v-btn @click="searchItunesAction()" :disabled="!valid">Search</v-btn>
        <v-btn @click="clear">clear</v-btn>
      </div>
    </v-form>
    <ItunesContents/>
  </v-container>
</template>

<script>
  import ItunesContents from '../components/ItunesContents.vue'
  export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters'
      ],
      select: null,
      items: [
      'US',
      'KR',
      'JP',
      'AU'
      ]
    }),
    methods: {
      searchItunesAction() {
        let param = {name: this.name,country:this.select};

        if (this.$refs.form.validate()) {
          this.$store.dispatch('searchItunesAction', param); //call action
        }
      },
      clear () {
        this.$refs.form.reset()
      }
    },
    components: {
      'ItunesContents': ItunesContents
    }
  }
</script>

