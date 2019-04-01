<template>
  <v-card
    xs12 md4 lg3
    class="mx-auto my-2"
    :color="hackathon.color"
    dark
    width="350"
  >
    <v-img
      class="white--text"
      height="150px"
      :src="hackathon.picture"
    ></v-img>
    <v-card-title>
      <v-layout row justify-space-between align-top>
        <v-flex sm6>
          <span class="title font-weight-light">{{hackathon.title}}</span>
        </v-flex>
        <v-flex>
          <v-layout column align-end>
            <v-flex>
              <v-icon> mdi-map-marker-outline</v-icon>
              <span class="title font-weight-light">{{hackathon.place}}</span>
            </v-flex>
            <span class="title font-weight-light">{{hackathon.date}}</span>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-card-title>
    <v-card-text style="margin-top:0px; padding-top: 0px;" class="subheading">
      {{hackathon.solution}}
    </v-card-text>
    <v-layout class="ml-2" row align-center justify-start>
      <v-icon class="mr-1 rounded">mdi-trophy-award</v-icon>
      <span>{{hackathon.position}}</span>
    </v-layout>
    <v-card-actions style="margin-top:0">
      <v-list-tile>
        <v-layout
          column
          align-start
          justify-start
        >
          
          <v-layout row>
            <v-list-tile-avatar v-for="person in hackathon.people" :key="person.name" color="grey darken-3">
              <v-img
                class="elevation-6"
                :src="person.pictureLink"
                @click="showDialog(person)"
              />
            </v-list-tile-avatar>
          </v-layout>

        </v-layout>
      </v-list-tile>
    </v-card-actions>
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
  </v-card>
</template>

<script>
export default {
  name: 'card-hackathon',
  props: ['hackathon'],
  mounted(){
    console.log("Hackathonsss")
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
