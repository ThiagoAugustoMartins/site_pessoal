<template>

  <v-card
    xs12 md4 lg3
    class="mx-auto my-2"
    :color="color"
    dark
    width="350"
  >
      <v-img
        class="white--text"
        height="150px"
        :src="event.picture"
      >
      </v-img>
    <v-dialog
      v-model="dialog"
      max-width="300"
    >
      <v-card color="blue-grey lighten-5">
        <v-container fluid fill-height>
          <v-layout column align-center justify-center>
            <v-img
              width="100"
              style="border-radius: 50%"
              :src="dialogPicture"
            >
            </v-img>
            <h2 style="font-family: 'Caviar Dreams'">{{dialogName}}</h2>
            <a
              :href="dialogLinkedin" target="_blank"
            >
              <v-icon>
                mdi-linkedin
              </v-icon>
            </a>
          </v-layout>
        </v-container>
      </v-card>
    </v-dialog>
    <v-card-title>
      <v-layout row justify-space-between align-top fill-height="">
        <v-flex>
          <v-icon>
            {{event.type}}
          </v-icon>
          <span style="margin-left: 4px" class="title font-weight-light">{{event.name}}</span>
        </v-flex>
        <v-layout column align-end>
          <v-flex>
            <v-icon> mdi-map-marker-outline</v-icon>
            <span class="title font-weight-light">{{place}}</span>
          </v-flex>
          <span class="title font-weight-light">{{date}}</span>
        </v-layout>
      </v-layout>
    </v-card-title>

    <v-card-text style="margin-top:0px; padding-top: 0px;" class="headline font-weight-bold">
      {{title}}
    </v-card-text>
    <v-spacer/>
    <v-card-actions style="margin-top:0">
      <v-list-tile class="grow">
        <v-layout
          align-center
          fill-height
          justify-space-between
        >
          <v-layout row>
            <v-list-tile-avatar v-for="person in people" :key="person.name" color="grey darken-3">
              <v-img
                class="elevation-6"
                :src="person.pictureLink"
                @click="showDialog(person)"
              />
            </v-list-tile-avatar>
          </v-layout>

          <v-icon class="mr-1 rounded">mdi-presentation</v-icon>
        </v-layout>
      </v-list-tile>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'card-talk',
  props: ['title', 'event', 'place', 'date', 'people', 'presentation', 'color'],
  mounted(){
    console.log(this)
  },
  data (){
    return {
      dialog: false,
      dialogPicture: '',
      dialogName: '',
      dialogLinkedin: '',
    }
  },
  methods:{
    getImgUrl(pic) {
      return require(pic)
    },
    showDialog(person){
      this.dialogPicture = person.pictureLink
      this.dialogName = person.name
      this.dialogLinkedin = person.linkedin
      this.dialog = true
      console.log(person)
    }
  }
}
</script>

<style>

</style>
