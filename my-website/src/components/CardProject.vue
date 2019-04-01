<template>
  <v-card>
    <v-container>
      <v-layout column>
        <span class="projectTitle">{{project.title}}</span>
        <span class="projectDescription">{{project.description}}</span>
        <v-layout row wrap class="mt-2">
          <v-layout column justify-start align-start>
            <span style="font-family: Bebas; font-size: 20px">TEAM</span>
            <v-layout row>
              <v-list-tile-avatar v-for="person in project.people" :key="person.name" color="grey darken-3">
                <v-img
                  class="elevation-6"
                  :src="person.pictureLink"
                  @click="showDialog(person)"
                />
              </v-list-tile-avatar>
            </v-layout>
          </v-layout>
          <v-layout column justify-end align-end>
            <span style="font-family: Bebas; font-size: 20px">More</span>
            <v-layout row>
              <v-icon class="mr-1 rounded">mdi-earth</v-icon>
              <v-icon class="mr-1 rounded">mdi-github-circle</v-icon>
              <v-icon class="mr-1 rounded">mdi-newspaper</v-icon>
            </v-layout>
          </v-layout>
        </v-layout>
      </v-layout>
      
    </v-container>
    <v-carousel>
      <v-carousel-item
        v-for="(item,i) in project.pictures"
        :key="i"
        :src="item.src"
        :contain="item.src=='images/iluminae_2.gif'"
      ></v-carousel-item>
    </v-carousel>
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
export default{
  props: ['title', 'project'],
  data (){
    return {
      dialog: false,
      dialogPicture: '',
      dialogName: '',
      dialogLinkedin: '',
      items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
          }
        ]
    }
  },
  methods:{
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

.projectTitle{
  font-family: 'Bebas Neue';
  font-size: 30px
}

.projectDescription{
  font-family: 'Caviar Dreams';
  font-size: 20px
}


</style>
