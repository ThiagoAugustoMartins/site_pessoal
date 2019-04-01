<template>
  <!-- <div id="app"> -->
    <v-app>
      <div id="homeSection">
        <v-container class="container mt-5">
          <v-layout column justify-start align-start fill-height>
            <v-flex>
              <h2 class="homeHeader">Hi!</h2>
            </v-flex>
            <v-flex>
              <h2 class="homeHeader">I'm Thiago Augusto</h2>
            </v-flex>
            <v-flex>
              <h1 class="homeHeader">I'm a Magician, Musician and Maker</h1>
            </v-flex>
            <v-flex>
              <h2 class="homeSubtitle mt-5">I love to interact with people and things.</h2>
            </v-flex>
              <h2 class="homeSubtitle">I use IoT, AI and Software Development to achive that.</h2>
          </v-layout>
          <v-layout fill-height column justify-end align-center>
            <h3 class="homePlaces mt-5 pt-5">Places I worked</h3>
            <v-layout row wrap justify-center align-center>
              <v-img
                class="mx-3"
                contain
                style="filter: brightness(0) invert(1);"
                width="200"
                src="images/logo_live.png"
              >
              </v-img>
              <v-img
                class="mx-3"
                contain
                style="filter: brightness(0) invert(1);"
                width="200"
                src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Logo_CESAR.png"
                >
              </v-img>
            </v-layout>
          </v-layout>
        </v-container>
      </div>
      <div id="projectSection">
        <v-container>
          <h2 class="sectionHeader">Projects</h2>
          <h2 class="subtitleHeader">Set of projects from 3 different areas</h2>
          <v-container fluid>
            <v-layout column justify-center align-center>
              <v-flex sm12 lg6 class="my-2" v-for="project in projects" :key="project.title">
                <card-project
                  :project="project"
                />
              </v-flex>
            </v-layout>
          </v-container>
        </v-container>
      </div>
      <div id="hackathonSection">
        <v-container class="container">
          <h2 class="sectionHeader">Hackathons</h2>
          <v-container fluid grid-list-{xs through xl}>
            <v-layout row wrap fill-height>
              <v-flex class="my-2" v-for="hackathon in hackathons" :key="hackathon.title">
                <card-hackathon
                  :hackathon="hackathon"
                />
              </v-flex>
            </v-layout>
          </v-container>
        </v-container>
      </div>
      <div id="aboutMeSection">
        <v-container class="container">
          <h2 class="sectionHeader">ABOUT ME</h2>
          <v-card color="light-blue darken-1"
          >
            <v-layout row align-center>
              <v-flex sm12 md12 lg6>
                <v-container>
                  <v-layout column align-start justify-space-around>
                    <v-flex>
                      <h2 class="aboutHeader">hello</h2>
                      <p class="textHeader">
                        My name is Thiago Augusto. I'm an Electronic Technichian and a Computer Engineering student.
                        I've been developing solutions with tech for about 5 years.
                        <br>
                        My expertise are IoT, Mobile and Web Development, Innovation and Public Speaking.
                        <br> 
                        I love education and how it can be powerful to change the future of mankind.
                        I consider myself a learner. I love learning new musical instruments; and it has been almost 3 years that i have've
                        been an amateur magician.
                      </p>
                    </v-flex>
                    <v-flex>
                      <h2 class="aboutHeader">what magic has taught me</h2>
                      <p class="textHeader">I didn't know how to present myself, how to present an ideia, how to sell
                        anything. I had to develop those skills to be good at magic. Not only
                        the technical part is important, as to study the effect movements, but it is also about connecting, inspiring
                        and telling a story while performing an act. And I took those learnings to my personal and professional
                        areas of my life.
                      </p>
                    </v-flex>
                    <v-flex >
                      <h2 class="aboutHeader">what i look for</h2>
                      <p class="textHeader">challenges that involves tech, innovation and people.<br>To solve people's problem.</p>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-flex>
              <v-layout justify-center align-center>
                <svg width="0" height="0">
                  <defs>
                    <clipPath id="clip-path">
                      <path class="cls-1" d="M28.0418-.5H1910.1687A7.3313,7.3313,0,0,1,1917.5,6.8313V1072.1687a7.3313,7.3313,0,0,1-7.3313,7.3313H9.5857a7.3313,7.3313,0,0,1-6.5019-10.7185L82.97,915.4378a7.3313,7.3313,0,0,1,4.7467-3.7309l65.5121-16.1537a7.3313,7.3313,0,0,0,5.3518-5.3183l37.354-147.5006c.3684-1.4545.2815-2.9871-39.1684-2.25l-40.9845-25.9669a60.5186,60.5186,0,0,1-27.8974-45.8316L83.58,619.6409C161.5,643.5,105.1834,541.9083,113.5,525.5c12.3613-24.3883,75.9855-2.2338,75.9855-2.2338,1.245-2.3277,1.1426-5.145,24.9727-39.6721l-39.4141-62.3293C148.9572,452.2229,83.3762,415.078,83.5,413.5l58-45c.125-1.5943,14.8635-27.654,14-29l-37,8-45-11c-15.191-22.7866-38.7935-30.0367-34-57l35-26c-32.4694-41.9845-4.59-60.8868-3-62l22.1652,45.9844A70.6219,70.6219,0,0,0,123.73,176.7631a7.51,7.51,0,0,1,1.0211-4.1637L128.0884,167a22.5647,22.5647,0,0,0-10.8263-32.4328l-9.17-3.7578a7.1062,7.1062,0,0,1-2.5642-1.7616A50.0694,50.0694,0,0,1,94.92,79.7169l6.6282-20.2528a7.3313,7.3313,0,0,0-3.64-8.8128L24.714,13.3637A7.3313,7.3313,0,0,1,28.0418-.5Z"/><path d="M1910.1689,1080H9.5859a7.8314,7.8314,0,0,1-6.9453-11.45L82.5264,915.2061a7.8327,7.8327,0,0,1,5.07-3.9844l65.5122-16.1533a6.819,6.819,0,0,0,4.9863-4.9561l37.354-147.501c.0649-.2549.0522-.3057.0088-.3613-1.0605-1.3369-13.355-1.7393-38.6831-1.2656l-.15.0029-.127-.0811L115.5137,714.94a61.3769,61.3769,0,0,1-28.1279-46.21l-4.3682-49.7852.7095.2178c16.9053,5.1738,28.7075,4.708,35.0786-1.39,11.5039-11.0107,4.36-38.6133-1.3809-60.793-3.7075-14.3262-6.91-26.6973-4.3706-31.7065,12.0273-23.73,70.1738-4.6675,76.18-2.623.0933-.1963.1865-.4072.2935-.6489,1.1689-2.6387,3.9028-8.8081,24.3311-38.42l-38.8765-61.479c-17.8076,20.2925-52.187,10.3394-71.1963,2.5439-10.1987-4.1826-20.8828-9.9321-20.7847-11.186l.0176-.2207,58.0356-45.0273c.3022-1.0146,1.88-4.0664,5.2837-10.5508,3.2236-6.14,7.9614-15.1646,8.6221-17.5337l-36.4673,7.8848L73.1919,336.9395l-.1079-.1621c-5.0371-7.5562-10.9023-13.2935-16.5742-18.8423-11.13-10.8882-20.7432-20.2915-17.502-38.5225l.0347-.1958.16-.1182,34.5913-25.6968c-11.88-15.4907-16.9473-29.5923-15.0615-41.92a30.8793,30.8793,0,0,1,12.4375-20.3608l.4814-.3359.3.4976,21.9082,45.4526A69.8125,69.8125,0,0,0,123.23,176.7837a8,8,0,0,1,1.0908-4.44l3.3374-5.5991A22.0651,22.0651,0,0,0,117.0728,135.03l-9.17-3.7578a7.6393,7.6393,0,0,1-2.7441-1.8872A50.6417,50.6417,0,0,1,94.4448,79.561l6.6279-20.2524a6.7966,6.7966,0,0,0-3.3916-8.2119L24.4868,13.8091a7.6194,7.6194,0,0,1-4.06-8.8057A7.62,7.62,0,0,1,28.042-1h1882.127A7.84,7.84,0,0,1,1918,6.8311V1072.1689A7.84,7.84,0,0,1,1910.1689,1080ZM174.4541,739.792c18.47,0,21.0381.8926,21.7871,1.8359a1.3189,1.3189,0,0,1,.1777,1.2295l-37.354,147.501a7.817,7.817,0,0,1-5.7168,5.6807L87.8359,912.1924a6.8325,6.8325,0,0,0-4.4229,3.4766L3.5273,1069.0117A6.8316,6.8316,0,0,0,9.5859,1079h1900.583a6.8389,6.8389,0,0,0,6.8311-6.8311V6.8311A6.8389,6.8389,0,0,0,1910.1689,0H28.042a6.6647,6.6647,0,0,0-6.6431,5.2368,6.6645,6.6645,0,0,0,3.542,7.6816L98.1353,50.2061a7.7908,7.7908,0,0,1,3.8877,9.4141L95.395,79.8726a49.6414,49.6414,0,0,0,10.502,48.8384,6.6441,6.6441,0,0,0,2.3848,1.6357l9.17,3.7583a23.0643,23.0643,0,0,1,11.0664,33.1514l-3.3374,5.6a7.0042,7.0042,0,0,0-.9512,3.8867A70.811,70.811,0,0,1,93.9517,237.894l-.4814.3369-.2559-.5293L71.3081,192.2534a29.9247,29.9247,0,0,0-11.5874,19.38c-1.8594,12.1533,3.2461,26.1362,15.1748,41.5605l.312.4033-35.25,26.1855c-3.0449,17.584,6.3633,26.7866,17.251,37.438,5.6685,5.5444,11.5278,11.2769,16.5986,18.84l44.6992,10.9263,37.2266-8.0488.1875.292c.541.8433-1.166,4.5522-8.6973,18.897-2.52,4.8-5.126,9.7642-5.2261,10.42l-.03.1968-.1606.1509L84.2241,413.5708c3.2422,2.623,31.6787,18.3931,57.832,19.4219,14.4175.5728,25.39-3.4868,32.6055-12.05l.44-.522,39.9556,63.1855-.1875.2725c-20.5469,29.769-23.2661,35.9077-24.4277,38.5288-.19.4292-.34.7666-.5156,1.0947l-.2017.377-.4038-.1406c-.6323-.22-63.3516-21.7339-75.375,1.9878-2.3677,4.6719.7905,16.8745,4.4473,31.0034,5.8062,22.4326,13.0317,50.3506,1.104,61.7666-6.6553,6.37-18.2241,6.9717-35.354,1.8379l4.2388,48.3086a60.3711,60.3711,0,0,0,27.667,45.4531l40.8579,25.8857C163.9531,739.8506,169.7266,739.792,174.4541,739.792Z"/>
                    </clipPath>
                  </defs>
                </svg>
                <v-img
                  :aspect-ratio="aspect"
                  class="svg__image"
                  :src="require('@/assets/images/thiago.jpg')"
                >
                </v-img>
              </v-layout>
            </v-layout>
          </v-card>
        </v-container>
      </div>
      <div id="talksSection">
        <v-container class="container">
          <h2 class="sectionHeader">Talks</h2>
          <h2 class="subtitleHeader">I really love to interact with people and see what we can learn together</h2>
          <v-container
            fluid
            grid-list-md
          >
            <v-layout row wrap fill-height>
              <card-talk v-for="talk in talks" :key="talk.title"
                :people="talk.people"
                :title="talk.title"
                :event="talk.event"
                :place="talk.place"
                :date="talk.date"
                :presentation="talk.presentation"
                :color="talk.color"
              />
            </v-layout>
          </v-container>
        </v-container>
      </div>
      <div id="workshopSection">
        <v-container class="container">
          <h2 class="sectionHeader">Workshops</h2>
          <h2 class="subtitleHeader">Moments where we can spread knowledge</h2>
          <v-container
            fluid
            grid-list-md
          >
            <v-layout row wrap fill-height>
              <card-talk v-for="workshop in workshops" :key="workshop.title"
                :people="workshop.people"
                :title="workshop.title"
                :event="workshop.event"
                :place="workshop.place"
                :date="workshop.date"
                :presentation="workshop.presentation"
                :color="workshop.color"
              />
            </v-layout>
          </v-container>
        </v-container>
      </div>
      <div id="contactSection">
        <v-container class="container">
          <h2 class="sectionHeader">Get in touch!</h2>
          <v-layout row wrap justify-space-around align-center mt-2>
            <v-flex
              @click="openLinkedin()"
              sm12 md5 lg2 my-1 style="border-style:solid; border-color:rgb(219, 245, 253); border-width: 300; border-radius: 10px">
              <v-layout column align-center>
                <v-icon large>mdi-linkedin</v-icon>
                <h2 style="font-family: 'Caviar Dreams'">Work profile</h2>
              </v-layout>
            </v-flex>
            <v-flex
              @click="openGithub()"
              sm12 md5 lg2 my-1 style="border-style:solid; border-color:rgb(219, 245, 253); border-width: 300; border-radius: 10px">
              <v-layout column align-center>
                <v-icon large>mdi-github-circle</v-icon>
                <h2 style="font-family: 'Caviar Dreams'">Project historic</h2>
              </v-layout>
            </v-flex>
            <v-flex 
              @click="openInstagram()"
              sm12 md5 lg2 my-1 style="border-style:solid; border-color:rgb(219, 245, 253); border-width: 300; border-radius: 10px">
              <v-layout column align-center>
                <v-icon large>mdi-instagram</v-icon>
                <h2 style="font-family: 'Caviar Dreams'">What I'm doing</h2>
              </v-layout>
            </v-flex>
            <v-flex 
              @click="openTwitter()"
              sm12 md5 lg2 my-1 style="border-style:solid; border-color:rgb(219, 245, 253); border-width: 300; border-radius: 10px">
              <v-layout column align-center>
                <v-icon large>mdi-twitter</v-icon>
                <h2 style="font-family: 'Caviar Dreams'">Random stuff</h2>
              </v-layout>
            </v-flex>
            <v-flex sm12 md5 lg5 my-1 style="border-style:solid; border-color:rgb(219, 245, 253); border-width: 300; border-radius: 10px">
              <v-layout column align-center>
                <v-icon large>mdi-gmail</v-icon>
                <h2 style="font-family: 'Caviar Dreams'">martinsthiagoaugusto@gmail.com</h2>
              </v-layout>
            </v-flex>
          </v-layout>
          <v-layout fill-height justify-start align-end pt-4 pb-0>
            <p style="font-family: 'Caviar Dreams'; font-size: 18px;">made with love and code from scratch. © 2019</p>
          </v-layout>
        </v-container>
      </div>
    </v-app>
  <!-- </div> -->
</template>

<script>
import CardTalk from '@/components/CardTalk.vue'
import CardProject from '@/components/CardProject.vue'
import CardHackathon from '@/components/CardHackathon.vue'

export default {
  name: 'app',
  components:{
    'card-talk': CardTalk,
    'card-project': CardProject,
    'card-hackathon': CardHackathon
  },
  data(){
    return {
      talks:[
        {
          event:{
            name: 'Arduino Day',
            type: 'mdi-book-open-variant',
            picture: 'images/brasilino_talk.jpeg',
          },
          place:'Recife - BR',
          date:'Mar, 2019',
          title:'"Brasilino, como programar Arduino em PT-BR"',
          people:[
            {
              name: 'Thiago Augusto',
              pictureLink: 'https://media.licdn.com/dms/image/C4E03AQEZfwmF4I54zA/profile-displayphoto-shrink_200_200/0?e=1559779200&v=beta&t=Fa1PQey3niILFLAO605VUCs0FXDXGdr8FQSiFvsGWgg',
              linkedin: 'https://www.linkedin.com/in/thiagoaugustosm/'
            },
            {
              name: 'Otacilio Maia',
              pictureLink: 'https://media.licdn.com/dms/image/C4D03AQE-2GQ-l4BPvQ/profile-displayphoto-shrink_800_800/0?e=1559779200&v=beta&t=YFAmwP6VggJNuR4XGvFaOqS_8ZGTZFejsfM8xILAxdQ',
              linkedin: 'https://www.linkedin.com/in/otacilio/'
            },
            {
              name: 'Erick Simões',
              pictureLink: 'https://media.licdn.com/dms/image/C5603AQF_l6CE4giewQ/profile-displayphoto-shrink_800_800/0?e=1559779200&v=beta&t=otziMiXY3aqAEDpRo96HxOi0pKsxQhYM1_pF2VcccUg',
              linkedin: 'https://www.linkedin.com/in/ericksimoes/'
            }
          ],
          presentation:'',
          color: '#26c6da'
        },{
          event:{
            name: 'JS Day',
            type: 'mdi-language-javascript',
            picture: 'images/js_day.jpg',
          },
          place:'Recife - BR',
          date:'Dec, 2018',
          title:'"Como criar experiências incríveis utilizando P5.js"',
          people:[
            {
              name: 'Thiago Augusto',
              pictureLink: 'https://media.licdn.com/dms/image/C4E03AQEZfwmF4I54zA/profile-displayphoto-shrink_200_200/0?e=1559779200&v=beta&t=Fa1PQey3niILFLAO605VUCs0FXDXGdr8FQSiFvsGWgg',
              linkedin: 'https://www.linkedin.com/in/thiagoaugustosm/'
            }
          ],
          presentation:'',
          color: 'amber darken-4'
        },{
          event:{
            name: 'Hacktoberfest Recife',
            type: 'mdi-github-face',
            picture: 'images/hacktoberfest.jpg',
          },
          place:'Recife - BR',
          date:'Oct, 2018',
          title:'"o que é open soure?"',
          people:[
            {
              name: 'Thiago Augusto',
              pictureLink: 'https://media.licdn.com/dms/image/C4E03AQEZfwmF4I54zA/profile-displayphoto-shrink_200_200/0?e=1559779200&v=beta&t=Fa1PQey3niILFLAO605VUCs0FXDXGdr8FQSiFvsGWgg',
              linkedin: 'https://www.linkedin.com/in/thiagoaugustosm/'
            }
          ],
          presentation:'https://speakerdeck.com/thiagoaugustosm/o-que-e-open-source',
          color: 'indigo darken-3'
        }
      ],
      workshops:[
        {
          event:{
            name: 'Arduino Day',
            type: 'mdi-book-open-variant',
            picture: 'images/brasilino_workshop.jpg',
          },
          place:'Recife - BR',
          date:'Mar, 2019',
          title:'"Brasilino na prática, programando Arduino em português"',
          people:[
            {
              name: 'Thiago Augusto',
              pictureLink: 'https://media.licdn.com/dms/image/C4E03AQEZfwmF4I54zA/profile-displayphoto-shrink_200_200/0?e=1559779200&v=beta&t=Fa1PQey3niILFLAO605VUCs0FXDXGdr8FQSiFvsGWgg',
              linkedin: 'https://www.linkedin.com/in/thiagoaugustosm/'
            },
            {
              name: 'Otacilio Maia',
              pictureLink: 'https://media.licdn.com/dms/image/C4D03AQE-2GQ-l4BPvQ/profile-displayphoto-shrink_800_800/0?e=1559779200&v=beta&t=YFAmwP6VggJNuR4XGvFaOqS_8ZGTZFejsfM8xILAxdQ',
              linkedin: 'https://www.linkedin.com/in/otacilio/'
            }
          ],
          presentation:'',
          color: '#26c6da'
        },{
          event:{
            name: 'Campus Party',
            type: 'mdi-brain',
            picture: 'images/chatbot.jpg',
          },
          place:'Natal - BR',
          date:'Apr, 2018',
          title:'"ChatBots na prática, construindo seu primeiro ChatBot com DialogFlow"',
          people:[
            {
              name: 'Thiago Augusto',
              pictureLink: 'https://media.licdn.com/dms/image/C4E03AQEZfwmF4I54zA/profile-displayphoto-shrink_200_200/0?e=1559779200&v=beta&t=Fa1PQey3niILFLAO605VUCs0FXDXGdr8FQSiFvsGWgg',
              linkedin: 'https://www.linkedin.com/in/thiagoaugustosm/'
            },
            {
              name: 'Hugo Santos',
              pictureLink: 'https://media.licdn.com/dms/image/C5603AQG_ZOigwpArew/profile-displayphoto-shrink_800_800/0?e=1559779200&v=beta&t=s_DrJdL_orcQPggDlhJU8CTddNtQxbuCco6e5qF8rgk',
              linkedin: 'https://www.linkedin.com/in/hugo97s/'
            },
            {
              name: 'Ramon Wanderley',
              pictureLink: 'https://media.licdn.com/dms/image/C4D03AQEf79NhSKgA2A/profile-displayphoto-shrink_800_800/0?e=1559779200&v=beta&t=gedIVRnZjxhx2NsbavMqrbEd57lAV25doG1MZ8J6xIM',
              linkedin: 'https://www.linkedin.com/in/ramonwanderley/'
            },
            {
              name: 'Otacilio Maia',
              pictureLink: 'https://media.licdn.com/dms/image/C4D03AQE-2GQ-l4BPvQ/profile-displayphoto-shrink_800_800/0?e=1559779200&v=beta&t=YFAmwP6VggJNuR4XGvFaOqS_8ZGTZFejsfM8xILAxdQ',
              linkedin: 'https://www.linkedin.com/in/otacilio/'
            }
          ],
          presentation:'https://speakerdeck.com/thiagoaugustosm/o-que-e-open-source',
          color: 'blue darken-2'
        },{
          event:{
            name: 'Campus Party',
            type: 'mdi-brain',
            picture: 'images/brasilino_cp.jpg',
          },
          place:'Natal - BR',
          date:'Apr, 2018',
          title:'"Construindo e submetendo sua própria biblioteca Arduino"',
          people:[
            {
              name: 'Thiago Augusto',
              pictureLink: 'https://media.licdn.com/dms/image/C4E03AQEZfwmF4I54zA/profile-displayphoto-shrink_200_200/0?e=1559779200&v=beta&t=Fa1PQey3niILFLAO605VUCs0FXDXGdr8FQSiFvsGWgg',
              linkedin: 'https://www.linkedin.com/in/thiagoaugustosm/'
            },
            {
              name: 'Hugo Santos',
              pictureLink: 'https://media.licdn.com/dms/image/C5603AQG_ZOigwpArew/profile-displayphoto-shrink_800_800/0?e=1559779200&v=beta&t=s_DrJdL_orcQPggDlhJU8CTddNtQxbuCco6e5qF8rgk',
              linkedin: 'https://www.linkedin.com/in/hugo97s/'
            },
            {
              name: 'Ramon Wanderley',
              pictureLink: 'https://media.licdn.com/dms/image/C4D03AQEf79NhSKgA2A/profile-displayphoto-shrink_800_800/0?e=1559779200&v=beta&t=gedIVRnZjxhx2NsbavMqrbEd57lAV25doG1MZ8J6xIM',
              linkedin: 'https://www.linkedin.com/in/ramonwanderley/'
            },
            {
              name: 'Otacilio Maia',
              pictureLink: 'https://media.licdn.com/dms/image/C4D03AQE-2GQ-l4BPvQ/profile-displayphoto-shrink_800_800/0?e=1559779200&v=beta&t=YFAmwP6VggJNuR4XGvFaOqS_8ZGTZFejsfM8xILAxdQ',
              linkedin: 'https://www.linkedin.com/in/otacilio/'
            }
          ],
          presentation:'https://speakerdeck.com/thiagoaugustosm/o-que-e-open-source',
          color: 'blue darken-2'
        },{
          event:{
            name: 'Arduino Day',
            type: 'mdi-wifi',
            picture: 'images/nodemcu.png',
          },
          place:'Recife - BR',
          date:'Apr, 2018',
          title:'"NodeMcu - Introdução a IoT"',
          people:[
            {
              name: 'Thiago Augusto',
              pictureLink: 'https://media.licdn.com/dms/image/C4E03AQEZfwmF4I54zA/profile-displayphoto-shrink_200_200/0?e=1559779200&v=beta&t=Fa1PQey3niILFLAO605VUCs0FXDXGdr8FQSiFvsGWgg',
              linkedin: 'https://www.linkedin.com/in/thiagoaugustosm/'
            },
            {
              name: 'Saulo Barros',
              pictureLink: 'https://media.licdn.com/dms/image/C4E03AQFT8WHhoWY5oQ/profile-displayphoto-shrink_800_800/0?e=1559779200&v=beta&t=bI7OjZSAOojZOJUJF1sghu9tWSRVKvP60m0inslYEDA',
              linkedin: 'https://www.linkedin.com/in/saulo--barros/'
            }
          ],
          presentation:'https://speakerdeck.com/thiagoaugustosm/o-que-e-open-source',
          color: 'indigo darken-3'
        }
      ],
      projects:[
        {
          title: 'Padrinhos Mágicos',
          description: 'Padrinhos Mágicos is a platform that connects volunteers to Children’s Homes \
and Homes for the Elderly, with the goal of bringing affection to those who \
need it. Finalist project at Campus Mobile Contest 2018, in Smart Cities category, out \
of over 60 participants. The last phase of the contest is still ongoing.',
          people:[
            {
              name: 'Thiago Augusto',
              pictureLink: 'https://media.licdn.com/dms/image/C4E03AQEZfwmF4I54zA/profile-displayphoto-shrink_200_200/0?e=1559779200&v=beta&t=Fa1PQey3niILFLAO605VUCs0FXDXGdr8FQSiFvsGWgg',
              linkedin: 'https://www.linkedin.com/in/thiagoaugustosm/'
            },
            {
              name: 'Hugo Santos',
              pictureLink: 'https://media.licdn.com/dms/image/C5603AQG_ZOigwpArew/profile-displayphoto-shrink_800_800/0?e=1559779200&v=beta&t=s_DrJdL_orcQPggDlhJU8CTddNtQxbuCco6e5qF8rgk',
              linkedin: 'https://www.linkedin.com/in/hugo97s/'
            },
            {
              name: 'Samuel Barbosa',
              pictureLink: 'https://media.licdn.com/dms/image/C4E03AQHD9t_URB4Isg/profile-displayphoto-shrink_800_800/0?e=1559779200&v=beta&t=lN2aPxs40RMZpn1X85EZufOchwkFNnASRcVsbEeOZSQ',
              linkedin: 'https://www.linkedin.com/in/samuelbjsouza/'
            },
          ],
          pictures:[
            {
              src:'images/pm_1.png',
            },
            {
              src:'images/pm_2.jpg'
            },
            {
              src:'images/pm_3.jpeg'
            }
          ]
        },
        {
          title: 'Brasilino',
          description: 'Brasilino is a open source library that allows programming in Arduino language \
using commands facilitated in PT-BR. Brasilino has been teached in workshops among different states of Brazil and it \
has impacted the life of new coders.',
          people:[
            {
              name: 'Thiago Augusto',
              pictureLink: 'https://media.licdn.com/dms/image/C4E03AQEZfwmF4I54zA/profile-displayphoto-shrink_200_200/0?e=1559779200&v=beta&t=Fa1PQey3niILFLAO605VUCs0FXDXGdr8FQSiFvsGWgg',
              linkedin: 'https://www.linkedin.com/in/thiagoaugustosm/'
            },
            {
              name: 'Otacilio Maia',
              pictureLink: 'https://media.licdn.com/dms/image/C4D03AQE-2GQ-l4BPvQ/profile-displayphoto-shrink_800_800/0?e=1559779200&v=beta&t=YFAmwP6VggJNuR4XGvFaOqS_8ZGTZFejsfM8xILAxdQ',
              linkedin: 'https://www.linkedin.com/in/otacilio/'
            },
            {
              name: 'Erick Simões',
              pictureLink: 'https://media.licdn.com/dms/image/C5603AQF_l6CE4giewQ/profile-displayphoto-shrink_800_800/0?e=1559779200&v=beta&t=otziMiXY3aqAEDpRo96HxOi0pKsxQhYM1_pF2VcccUg',
              linkedin: 'https://www.linkedin.com/in/ericksimoes/'
            }
          ],
          pictures:[
            {
              src:'images/brasilino_1.png',
            },
            {
              src:'images/brasilino_cp.jpg'
            },
            {
              src:'images/brasilino_workshop.jpg'
            }
          ]
        },
        {
          title: 'Iluminaê',
          description: 'Iluminaê is an Open Source project, hardware and software, capable of \
          transforming vibrations obtained through instruments typical of the Carnival of \
 Pernambuco, such as Tools, Boxes of war, metals, among others, in light and \
 color using RGB LED strips. It was implemented during the carnival of Recife in 2018, in the Curta \
 Pernambuco block located in Arsenal Square, Recife - Brazil.',
          people:[
            {
              name: 'Thiago Augusto',
              pictureLink: 'https://media.licdn.com/dms/image/C4E03AQEZfwmF4I54zA/profile-displayphoto-shrink_200_200/0?e=1559779200&v=beta&t=Fa1PQey3niILFLAO605VUCs0FXDXGdr8FQSiFvsGWgg',
              linkedin: 'https://www.linkedin.com/in/thiagoaugustosm/'
            },
            {
              name: 'Otacilio Maia',
              pictureLink: 'https://media.licdn.com/dms/image/C4D03AQE-2GQ-l4BPvQ/profile-displayphoto-shrink_800_800/0?e=1559779200&v=beta&t=YFAmwP6VggJNuR4XGvFaOqS_8ZGTZFejsfM8xILAxdQ',
              linkedin: 'https://www.linkedin.com/in/otacilio/'
            }
          ],
          pictures:[
            {
              src:'images/iluminae.jpg',
            },
            {
              src:'images/iluminae_2.gif',
            }
          ]
        }
      ],
      hackathons:[
        {
          title:'Hackathon Truewind Outsystems',
          solution:'Repassa, a platform focused on helping university students before the enrollment process and during the academic period with their main difficulties related to the chosen subjects, won the first place in this hackathon, which also had training in the Outsystems platform.',
          place:'Recife - BR',
          date:'Mar. 2019',
          picture:'images/hackathon_outsystems.jpeg',
          people:[
            {
              name: 'Thiago Augusto',
              pictureLink: 'https://media.licdn.com/dms/image/C4E03AQEZfwmF4I54zA/profile-displayphoto-shrink_200_200/0?e=1559779200&v=beta&t=Fa1PQey3niILFLAO605VUCs0FXDXGdr8FQSiFvsGWgg',
              linkedin: 'https://www.linkedin.com/in/thiagoaugustosm/'
            },
            {
              name: 'Hugo Santos',
              pictureLink: 'https://media.licdn.com/dms/image/C5603AQG_ZOigwpArew/profile-displayphoto-shrink_800_800/0?e=1559779200&v=beta&t=s_DrJdL_orcQPggDlhJU8CTddNtQxbuCco6e5qF8rgk',
              linkedin: 'https://www.linkedin.com/in/hugo97s/'
            },
            {
              name: 'João Rafael',
              pictureLink: 'https://media.licdn.com/dms/image/C4D03AQEztE64Vc1cWg/profile-displayphoto-shrink_800_800/0?e=1559779200&v=beta&t=hLm1Zx0ION4SOcSdyuaXlGcZ32_yHnPieAYdLGO9n4A',
              linkedin: 'https://www.linkedin.com/in/rafaeufaria/'
            }
          ],
          position:'1st place',
          color:'blue'
        },
        {
          title:'Hacker Cidadão 6.0 - Cidades e Cidadão Conectados',
          solution:'Faciliti, a facilitator in the communication channel between Employment Agencies and citizens in search of opportunities.',
          place:'Recife - BR',
          date:'Nov. 2018',
          picture:'images/faciliti.jpeg',
          people:[
            {
              name: 'Thiago Augusto',
              pictureLink: 'https://media.licdn.com/dms/image/C4E03AQEZfwmF4I54zA/profile-displayphoto-shrink_200_200/0?e=1559779200&v=beta&t=Fa1PQey3niILFLAO605VUCs0FXDXGdr8FQSiFvsGWgg',
              linkedin: 'https://www.linkedin.com/in/thiagoaugustosm/'
            },
            {
              name: 'Marco Aurélio',
              pictureLink: 'https://media.licdn.com/dms/image/C4D03AQGDyyySr-_Uyw/profile-displayphoto-shrink_800_800/0?e=1559779200&v=beta&t=hAReSK3OzmU4jBWj4xsH-36Sdaqkce-Pz3tTuGWvR5s',
              linkedin: 'https://www.linkedin.com/in/marcoafsantana/'
            },
            {
              name: 'Carol Vieira',
              pictureLink: 'https://scontent.frec3-2.fna.fbcdn.net/v/t1.0-9/22489710_752326104952248_6113029507158867460_n.jpg?_nc_cat=104&_nc_ht=scontent.frec3-2.fna&oh=14c3fa1fc01a2ddf9e5afb7436c82926&oe=5D4FD3EA',
              linkedin: '#'
            },
            {
              name: 'João Rafael',
              pictureLink: 'https://media.licdn.com/dms/image/C4D03AQEztE64Vc1cWg/profile-displayphoto-shrink_800_800/0?e=1559779200&v=beta&t=hLm1Zx0ION4SOcSdyuaXlGcZ32_yHnPieAYdLGO9n4A',
              linkedin: 'https://www.linkedin.com/in/rafaeufaria/'
            }
          ],
          position:'1st place',
          color:'blue'
        },
        {
          title:'CodeCup 2018',
          solution:'Cérbero, a project with a new concept of TFA (Three Factor Authentication), with the purpose of reducing and ensuring that the customer is in the purchase, improves the user experience. All this, with a new algorithm, and a chatbot.',
          place:'Recife - BR',
          date:'Mar. 2018',
          picture:'https://scontent.frec3-1.fna.fbcdn.net/v/t1.0-9/29343051_1647815895297515_1309767748842160128_n.jpg?_nc_cat=111&_nc_ht=scontent.frec3-1.fna&oh=8e1380c3ccc8b5aa271c6182df07880f&oe=5D46DF6C',
          people:[
            {
              name: 'Thiago Augusto',
              pictureLink: 'https://media.licdn.com/dms/image/C4E03AQEZfwmF4I54zA/profile-displayphoto-shrink_200_200/0?e=1559779200&v=beta&t=Fa1PQey3niILFLAO605VUCs0FXDXGdr8FQSiFvsGWgg',
              linkedin: 'https://www.linkedin.com/in/thiagoaugustosm/'
            },
            {
              name: 'Marco Aurélio',
              pictureLink: 'https://media.licdn.com/dms/image/C4D03AQGDyyySr-_Uyw/profile-displayphoto-shrink_800_800/0?e=1559779200&v=beta&t=hAReSK3OzmU4jBWj4xsH-36Sdaqkce-Pz3tTuGWvR5s',
              linkedin: 'https://www.linkedin.com/in/marcoafsantana/'
            },
            {
              name: 'Paula Soares',
              pictureLink: 'https://media.licdn.com/dms/image/C4E03AQEEXk0pLIYu_Q/profile-displayphoto-shrink_800_800/0?e=1559779200&v=beta&t=FOhxQ9OhpQ5XUlVYn__h1zoApv1mtf1TQCDV4S9Y6HE',
              linkedin: 'https://www.linkedin.com/in/soaresdelapaula/'
            },
            {
              name: 'Otacilio Maia',
              pictureLink: 'https://media.licdn.com/dms/image/C4D03AQE-2GQ-l4BPvQ/profile-displayphoto-shrink_800_800/0?e=1559779200&v=beta&t=YFAmwP6VggJNuR4XGvFaOqS_8ZGTZFejsfM8xILAxdQ',
              linkedin: 'https://www.linkedin.com/in/otacilio/'
            },
            {
              name: 'Ramon Wanderley',
              pictureLink: 'https://media.licdn.com/dms/image/C4D03AQEf79NhSKgA2A/profile-displayphoto-shrink_800_800/0?e=1559779200&v=beta&t=gedIVRnZjxhx2NsbavMqrbEd57lAV25doG1MZ8J6xIM',
              linkedin: 'https://www.linkedin.com/in/ramonwanderley/'
            },
            {
              name: 'Jailson Dias',
              pictureLink: 'https://media.licdn.com/dms/image/C4E03AQGPL9TMyWzJlw/profile-displayphoto-shrink_800_800/0?e=1559779200&v=beta&t=yBD5Ms5XKO2yQzrTI8uOHuQTfN61h4SWvq2eKoXVmeo',
              linkedin: 'https://www.linkedin.com/in/jailsondias4/'
            },
          ],
          position:'3rd place',
          color:'blue'
        },
        {
          title:'1º Desafio Augment',
          solution:'Aug, a collaborative chatbot capable of identifying investor profiles and finding content and startups directed through the algorithm QUEm (Quality of Entrepreneurial Users)',
          place:'Recife - BR',
          date:'Mar. 2018',
          picture:'images/aug.png',
          people:[
            {
              name: 'Thiago Augusto',
              pictureLink: 'https://media.licdn.com/dms/image/C4E03AQEZfwmF4I54zA/profile-displayphoto-shrink_200_200/0?e=1559779200&v=beta&t=Fa1PQey3niILFLAO605VUCs0FXDXGdr8FQSiFvsGWgg',
              linkedin: 'https://www.linkedin.com/in/thiagoaugustosm/'
            },
            {
              name: 'Caio Gomes',
              pictureLink: 'https://media.licdn.com/dms/image/C5603AQF_rKwzaoSZHA/profile-displayphoto-shrink_800_800/0?e=1559779200&v=beta&t=BkEiHampKJUILVjf1fvVdf2PI9N_8M0dV8gvcyiSThE',
              linkedin: 'https://www.linkedin.com/in/caiogomes001/'
            },
            {
              name: 'Paula Soares',
              pictureLink: 'https://media.licdn.com/dms/image/C4E03AQEEXk0pLIYu_Q/profile-displayphoto-shrink_800_800/0?e=1559779200&v=beta&t=FOhxQ9OhpQ5XUlVYn__h1zoApv1mtf1TQCDV4S9Y6HE',
              linkedin: 'https://www.linkedin.com/in/soaresdelapaula/'
            },
            {
              name: 'Otacilio Maia',
              pictureLink: 'https://media.licdn.com/dms/image/C4D03AQE-2GQ-l4BPvQ/profile-displayphoto-shrink_800_800/0?e=1559779200&v=beta&t=YFAmwP6VggJNuR4XGvFaOqS_8ZGTZFejsfM8xILAxdQ',
              linkedin: 'https://www.linkedin.com/in/otacilio/'
            },
            {
              name: 'Saulo Barros',
              pictureLink: 'https://media.licdn.com/dms/image/C4E03AQFT8WHhoWY5oQ/profile-displayphoto-shrink_800_800/0?e=1559779200&v=beta&t=bI7OjZSAOojZOJUJF1sghu9tWSRVKvP60m0inslYEDA',
              linkedin: 'https://www.linkedin.com/in/saulo--barros/'
            }
          ],
          position:'1st place',
          color:'blue'
        }
      ]
    }
  },
  computed:{
      aspect () {
        return 1 * window.innerWidth/2300;
      }
  },
  methods:{
    openLinkedin(){
      window.open('https://www.linkedin.com/in/thiagoaugustosm/', '_blank');
    },
    openGithub(){
      window.open('https://github.com/ThiagoAugustoSM', '_blank');
    },
    openInstagram(){
      window.open('https://www.instagram.com/thiagoaugustosm/', '_blank');
    },
    openTwitter(){
      window.open('https://twitter.com/thiagoaugustosm', '_blank');
    }
  }
}
</script>

<style>

@font-face {
  font-family: "Bebas";
  src: url("assets/fonts/Bebas-Regular.ttf");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "Bebas Neue";
  src: url("assets/fonts/BebasNeue-Regular.ttf");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "Caviar Dreams";
  src: url("assets/fonts/CaviarDreams.ttf") format('truetype');;
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "Caviar Dreams";
  src: url("assets/fonts/CaviarDreams_Bold.ttf") format('truetype');;
  font-weight: bold;
  font-style: normal;
}

#homeSection{
  margin: 15px;
  padding: 0;
  font-family: "Bebas Neue";
  text-align: center;
  color: #E8F1F2;
  background-image: linear-gradient(#1C6BA0, #1B98E0);
  min-height: 100vh;
}

#projectSection{
  margin: 15px;
  padding-top:0;
  min-height:100vh;
  background-image: linear-gradient(#1B98E0, #32908F);
}

#hackathonSection{
  margin: 15px;
  min-height:80vh;
  background-image: linear-gradient(#32908F, #1B98E0);
}

#aboutMeSection{
  margin: 15px;
  min-height:100vh;
  background-image: linear-gradient(#1B98E0, #26C485);
}

#talksSection{
  margin: 15px;
  min-height:50vh;
  background-image: linear-gradient(#26C485, #A3E7FC);
}

#workshopSection{
  margin: 15px;
  min-height:50vh;
  background-image: linear-gradient(#A3E7FC, #26C485);
}

#contactSection{
  margin: 15px;
  min-height:30vh;
  background-image: linear-gradient(#26C485, #1C6BA0);
}

.homeHeader{
  font-family:'Bebas';
  font-size: 80px;
}

.homeSubtitle{
  font-family:'Caviar Dreams';
  font-size: 45px;
}

.homePlaces{
  font-family:'Bebas';
  font-size: 30px;
}

.sectionHeader{
  margin:0;
  font-family: "Bebas";
  font-size: 80px;
  color: white;
}

.subtitleHeader{
  font-family: "Caviar Dreams";
  font-size: 30px;
  color: rgb(219, 245, 253);
}

.aboutHeader{
  font-family: "Caviar Dreams";
  color: white;
  font-size: 30px;
}

.textHeader{
  font-family: "Caviar Dreams";
  color: #A3E7FC;
  font-size: 20px;
}

.svg__image {
  object-fit: cover;
  clip-path: url(#clip-path);
  -webkit-clip-path: url(#clip-path);
}

.name{
  font-size: 23px;
}
.header{
  font-size: 88vw;
}
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #1C6BA0;
  color: #2c3e50;
  margin-top: 0px;
} */
</style>
