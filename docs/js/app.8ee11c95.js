(function(t){function i(i){for(var a,s,r=i[0],l=i[1],c=i[2],p=0,m=[];p<r.length;p++)s=r[p],n[s]&&m.push(n[s][0]),n[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(i);while(m.length)m.shift()();return o.push.apply(o,c||[]),e()}function e(){for(var t,i=0;i<o.length;i++){for(var e=o[i],a=!0,r=1;r<e.length;r++){var l=e[r];0!==n[l]&&(a=!1)}a&&(o.splice(i--,1),t=s(s.s=e[0]))}return t}var a={},n={app:0},o=[];function s(i){if(a[i])return a[i].exports;var e=a[i]={i:i,l:!1,exports:{}};return t[i].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=t,s.c=a,s.d=function(t,i,e){s.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:e})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,i){if(1&i&&(t=s(t)),8&i)return t;if(4&i&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var a in t)s.d(e,a,function(i){return t[i]}.bind(null,a));return e},s.n=function(t){var i=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(i,"a",i),i},s.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=i,r=r.slice();for(var c=0;c<r.length;c++)i(r[c]);var d=l;o.push([0,"chunk-vendors"]),e()})({0:function(t,i,e){t.exports=e("56d7")},"034f":function(t,i,e){"use strict";var a=e("1356"),n=e.n(a);n.a},1356:function(t,i,e){},"56d7":function(t,i,e){"use strict";e.r(i);e("cadf"),e("551c"),e("f751"),e("097d");var a=e("2b0e"),n=e("bb71");e("da64");a["a"].use(n["a"],{iconfont:"md"});var o=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-app",[a("div",{attrs:{id:"homeSection"}},[a("v-container",{staticClass:"container mt-5"},[a("v-layout",{attrs:{column:"","justify-start":"","align-start":"","fill-height":""}},[a("v-flex",[a("h2",{staticClass:"homeHeader"},[t._v("Hi!")])]),a("v-flex",[a("h2",{staticClass:"homeHeader"},[t._v("I'm Thiago Augusto")])]),a("v-flex",[a("h1",{staticClass:"homeHeader"},[t._v("I'm a Magician, Musician and Maker")])]),a("v-flex",[a("h2",{staticClass:"homeSubtitle mt-5"},[t._v("I love to interact with people and things.")])]),a("h2",{staticClass:"homeSubtitle"},[t._v("I use IoT, AI and Software Development to achive that.")])],1),a("v-layout",{attrs:{"fill-height":"",column:"","justify-end":"","align-center":""}},[a("h3",{staticClass:"homePlaces mt-5 pt-5"},[t._v("Places I worked")]),a("v-layout",{attrs:{row:"",wrap:"","justify-center":"","align-center":""}},[a("v-img",{staticClass:"mx-3",staticStyle:{filter:"brightness(0) invert(1)"},attrs:{contain:"",width:"200",src:"images/logo_live.png"}}),a("v-img",{staticClass:"mx-3",staticStyle:{filter:"brightness(0) invert(1)"},attrs:{contain:"",width:"200",src:"https://upload.wikimedia.org/wikipedia/commons/b/b6/Logo_CESAR.png"}})],1)],1)],1)],1),a("div",{attrs:{id:"projectSection"}},[a("v-container",[a("h2",{staticClass:"sectionHeader"},[t._v("Projects")]),a("h2",{staticClass:"subtitleHeader"},[t._v("Set of projects from 3 different areas")]),a("v-container",{attrs:{fluid:""}},[a("v-layout",{attrs:{column:"","justify-center":"","align-center":""}},t._l(t.projects,function(t){return a("v-flex",{key:t.title,staticClass:"my-2",attrs:{sm12:"",lg6:""}},[a("card-project",{attrs:{project:t}})],1)}),1)],1)],1)],1),a("div",{attrs:{id:"hackathonSection"}},[a("v-container",{staticClass:"container"},[a("h2",{staticClass:"sectionHeader"},[t._v("Hackathons")]),a("v-container",{attrs:{fluid:"","grid-list-{xs":"",through:"","xl}":""}},[a("v-layout",{attrs:{row:"",wrap:"","fill-height":""}},t._l(t.hackathons,function(t){return a("v-flex",{key:t.title,staticClass:"my-2"},[a("card-hackathon",{attrs:{hackathon:t}})],1)}),1)],1)],1)],1),a("div",{attrs:{id:"aboutMeSection"}},[a("v-container",{staticClass:"container"},[a("h2",{staticClass:"sectionHeader"},[t._v("ABOUT ME")]),a("v-card",{attrs:{color:"light-blue darken-1"}},[a("v-layout",{attrs:{row:"","align-center":""}},[a("v-flex",{attrs:{sm12:"",md12:"",lg6:""}},[a("v-container",[a("v-layout",{attrs:{column:"","align-start":"","justify-space-around":""}},[a("v-flex",[a("h2",{staticClass:"aboutHeader"},[t._v("hello")]),a("p",{staticClass:"textHeader"},[t._v("\n                      My name is Thiago Augusto. I'm an Electronic Technichian and a Computer Engineering student.\n                      I've been developing solutions with tech for about 5 years.\n                      "),a("br"),t._v("\n                      My expertise are IoT, Mobile and Web Development, Innovation and Public Speaking.\n                      "),a("br"),t._v(" \n                      I love education and how it can be powerful to change the future of mankind.\n                      I consider myself a learner. I love learning new musical instruments; and it has been almost 3 years that i have've\n                      been an amateur magician.\n                    ")])]),a("v-flex",[a("h2",{staticClass:"aboutHeader"},[t._v("what magic has taught me")]),a("p",{staticClass:"textHeader"},[t._v("I didn't know how to present myself, how to present an ideia, how to sell\n                      anything. I had to develop those skills to be good at magic. Not only\n                      the technical part is important, as to study the effect movements, but it is also about connecting, inspiring\n                      and telling a story while performing an act. And I took those learnings to my personal and professional\n                      areas of my life.\n                    ")])]),a("v-flex",[a("h2",{staticClass:"aboutHeader"},[t._v("what i look for")]),a("p",{staticClass:"textHeader"},[t._v("challenges that involves tech, innovation and people."),a("br"),t._v("To solve people's problem.")])])],1)],1)],1),a("v-layout",{attrs:{"justify-center":"","align-center":""}},[a("svg",{attrs:{width:"0",height:"0"}},[a("defs",[a("clipPath",{attrs:{id:"clip-path"}},[a("path",{staticClass:"cls-1",attrs:{d:"M28.0418-.5H1910.1687A7.3313,7.3313,0,0,1,1917.5,6.8313V1072.1687a7.3313,7.3313,0,0,1-7.3313,7.3313H9.5857a7.3313,7.3313,0,0,1-6.5019-10.7185L82.97,915.4378a7.3313,7.3313,0,0,1,4.7467-3.7309l65.5121-16.1537a7.3313,7.3313,0,0,0,5.3518-5.3183l37.354-147.5006c.3684-1.4545.2815-2.9871-39.1684-2.25l-40.9845-25.9669a60.5186,60.5186,0,0,1-27.8974-45.8316L83.58,619.6409C161.5,643.5,105.1834,541.9083,113.5,525.5c12.3613-24.3883,75.9855-2.2338,75.9855-2.2338,1.245-2.3277,1.1426-5.145,24.9727-39.6721l-39.4141-62.3293C148.9572,452.2229,83.3762,415.078,83.5,413.5l58-45c.125-1.5943,14.8635-27.654,14-29l-37,8-45-11c-15.191-22.7866-38.7935-30.0367-34-57l35-26c-32.4694-41.9845-4.59-60.8868-3-62l22.1652,45.9844A70.6219,70.6219,0,0,0,123.73,176.7631a7.51,7.51,0,0,1,1.0211-4.1637L128.0884,167a22.5647,22.5647,0,0,0-10.8263-32.4328l-9.17-3.7578a7.1062,7.1062,0,0,1-2.5642-1.7616A50.0694,50.0694,0,0,1,94.92,79.7169l6.6282-20.2528a7.3313,7.3313,0,0,0-3.64-8.8128L24.714,13.3637A7.3313,7.3313,0,0,1,28.0418-.5Z"}}),a("path",{attrs:{d:"M1910.1689,1080H9.5859a7.8314,7.8314,0,0,1-6.9453-11.45L82.5264,915.2061a7.8327,7.8327,0,0,1,5.07-3.9844l65.5122-16.1533a6.819,6.819,0,0,0,4.9863-4.9561l37.354-147.501c.0649-.2549.0522-.3057.0088-.3613-1.0605-1.3369-13.355-1.7393-38.6831-1.2656l-.15.0029-.127-.0811L115.5137,714.94a61.3769,61.3769,0,0,1-28.1279-46.21l-4.3682-49.7852.7095.2178c16.9053,5.1738,28.7075,4.708,35.0786-1.39,11.5039-11.0107,4.36-38.6133-1.3809-60.793-3.7075-14.3262-6.91-26.6973-4.3706-31.7065,12.0273-23.73,70.1738-4.6675,76.18-2.623.0933-.1963.1865-.4072.2935-.6489,1.1689-2.6387,3.9028-8.8081,24.3311-38.42l-38.8765-61.479c-17.8076,20.2925-52.187,10.3394-71.1963,2.5439-10.1987-4.1826-20.8828-9.9321-20.7847-11.186l.0176-.2207,58.0356-45.0273c.3022-1.0146,1.88-4.0664,5.2837-10.5508,3.2236-6.14,7.9614-15.1646,8.6221-17.5337l-36.4673,7.8848L73.1919,336.9395l-.1079-.1621c-5.0371-7.5562-10.9023-13.2935-16.5742-18.8423-11.13-10.8882-20.7432-20.2915-17.502-38.5225l.0347-.1958.16-.1182,34.5913-25.6968c-11.88-15.4907-16.9473-29.5923-15.0615-41.92a30.8793,30.8793,0,0,1,12.4375-20.3608l.4814-.3359.3.4976,21.9082,45.4526A69.8125,69.8125,0,0,0,123.23,176.7837a8,8,0,0,1,1.0908-4.44l3.3374-5.5991A22.0651,22.0651,0,0,0,117.0728,135.03l-9.17-3.7578a7.6393,7.6393,0,0,1-2.7441-1.8872A50.6417,50.6417,0,0,1,94.4448,79.561l6.6279-20.2524a6.7966,6.7966,0,0,0-3.3916-8.2119L24.4868,13.8091a7.6194,7.6194,0,0,1-4.06-8.8057A7.62,7.62,0,0,1,28.042-1h1882.127A7.84,7.84,0,0,1,1918,6.8311V1072.1689A7.84,7.84,0,0,1,1910.1689,1080ZM174.4541,739.792c18.47,0,21.0381.8926,21.7871,1.8359a1.3189,1.3189,0,0,1,.1777,1.2295l-37.354,147.501a7.817,7.817,0,0,1-5.7168,5.6807L87.8359,912.1924a6.8325,6.8325,0,0,0-4.4229,3.4766L3.5273,1069.0117A6.8316,6.8316,0,0,0,9.5859,1079h1900.583a6.8389,6.8389,0,0,0,6.8311-6.8311V6.8311A6.8389,6.8389,0,0,0,1910.1689,0H28.042a6.6647,6.6647,0,0,0-6.6431,5.2368,6.6645,6.6645,0,0,0,3.542,7.6816L98.1353,50.2061a7.7908,7.7908,0,0,1,3.8877,9.4141L95.395,79.8726a49.6414,49.6414,0,0,0,10.502,48.8384,6.6441,6.6441,0,0,0,2.3848,1.6357l9.17,3.7583a23.0643,23.0643,0,0,1,11.0664,33.1514l-3.3374,5.6a7.0042,7.0042,0,0,0-.9512,3.8867A70.811,70.811,0,0,1,93.9517,237.894l-.4814.3369-.2559-.5293L71.3081,192.2534a29.9247,29.9247,0,0,0-11.5874,19.38c-1.8594,12.1533,3.2461,26.1362,15.1748,41.5605l.312.4033-35.25,26.1855c-3.0449,17.584,6.3633,26.7866,17.251,37.438,5.6685,5.5444,11.5278,11.2769,16.5986,18.84l44.6992,10.9263,37.2266-8.0488.1875.292c.541.8433-1.166,4.5522-8.6973,18.897-2.52,4.8-5.126,9.7642-5.2261,10.42l-.03.1968-.1606.1509L84.2241,413.5708c3.2422,2.623,31.6787,18.3931,57.832,19.4219,14.4175.5728,25.39-3.4868,32.6055-12.05l.44-.522,39.9556,63.1855-.1875.2725c-20.5469,29.769-23.2661,35.9077-24.4277,38.5288-.19.4292-.34.7666-.5156,1.0947l-.2017.377-.4038-.1406c-.6323-.22-63.3516-21.7339-75.375,1.9878-2.3677,4.6719.7905,16.8745,4.4473,31.0034,5.8062,22.4326,13.0317,50.3506,1.104,61.7666-6.6553,6.37-18.2241,6.9717-35.354,1.8379l4.2388,48.3086a60.3711,60.3711,0,0,0,27.667,45.4531l40.8579,25.8857C163.9531,739.8506,169.7266,739.792,174.4541,739.792Z"}})])])]),a("v-img",{staticClass:"svg__image",attrs:{"aspect-ratio":t.aspect,src:e("56e7")}})],1)],1)],1)],1)],1),a("div",{attrs:{id:"talksSection"}},[a("v-container",{staticClass:"container"},[a("h2",{staticClass:"sectionHeader"},[t._v("Talks")]),a("h2",{staticClass:"subtitleHeader"},[t._v("I really love to interact with people and see what we can learn together")]),a("v-container",{attrs:{fluid:"","grid-list-md":""}},[a("v-layout",{attrs:{row:"",wrap:"","fill-height":""}},t._l(t.talks,function(t){return a("card-talk",{key:t.title,attrs:{people:t.people,title:t.title,event:t.event,place:t.place,date:t.date,presentation:t.presentation,color:t.color}})}),1)],1)],1)],1),a("div",{attrs:{id:"workshopSection"}},[a("v-container",{staticClass:"container"},[a("h2",{staticClass:"sectionHeader"},[t._v("Workshops")]),a("h2",{staticClass:"subtitleHeader"},[t._v("Moments where we can spread knowledge")]),a("v-container",{attrs:{fluid:"","grid-list-md":""}},[a("v-layout",{attrs:{row:"",wrap:"","fill-height":""}},t._l(t.workshops,function(t){return a("card-talk",{key:t.title,attrs:{people:t.people,title:t.title,event:t.event,place:t.place,date:t.date,presentation:t.presentation,color:t.color}})}),1)],1)],1)],1),a("div",{attrs:{id:"contactSection"}},[a("v-container",{staticClass:"container"},[a("h2",{staticClass:"sectionHeader"},[t._v("Get in touch!")]),a("v-layout",{attrs:{row:"",wrap:"","justify-space-around":"","align-center":"","mt-2":""}},[a("v-flex",{staticStyle:{"border-style":"solid","border-color":"rgb(219, 245, 253)","border-width":"300","border-radius":"10px"},attrs:{sm12:"",md5:"",lg2:"","my-1":""},on:{click:function(i){return t.openLinkedin()}}},[a("v-layout",{attrs:{column:"","align-center":""}},[a("v-icon",{attrs:{large:""}},[t._v("mdi-linkedin")]),a("h2",{staticStyle:{"font-family":"'Caviar Dreams'"}},[t._v("Work profile")])],1)],1),a("v-flex",{staticStyle:{"border-style":"solid","border-color":"rgb(219, 245, 253)","border-width":"300","border-radius":"10px"},attrs:{sm12:"",md5:"",lg2:"","my-1":""},on:{click:function(i){return t.openGithub()}}},[a("v-layout",{attrs:{column:"","align-center":""}},[a("v-icon",{attrs:{large:""}},[t._v("mdi-github-circle")]),a("h2",{staticStyle:{"font-family":"'Caviar Dreams'"}},[t._v("Project historic")])],1)],1),a("v-flex",{staticStyle:{"border-style":"solid","border-color":"rgb(219, 245, 253)","border-width":"300","border-radius":"10px"},attrs:{sm12:"",md5:"",lg2:"","my-1":""},on:{click:function(i){return t.openInstagram()}}},[a("v-layout",{attrs:{column:"","align-center":""}},[a("v-icon",{attrs:{large:""}},[t._v("mdi-instagram")]),a("h2",{staticStyle:{"font-family":"'Caviar Dreams'"}},[t._v("What I'm doing")])],1)],1),a("v-flex",{staticStyle:{"border-style":"solid","border-color":"rgb(219, 245, 253)","border-width":"300","border-radius":"10px"},attrs:{sm12:"",md5:"",lg2:"","my-1":""},on:{click:function(i){return t.openTwitter()}}},[a("v-layout",{attrs:{column:"","align-center":""}},[a("v-icon",{attrs:{large:""}},[t._v("mdi-twitter")]),a("h2",{staticStyle:{"font-family":"'Caviar Dreams'"}},[t._v("Random stuff")])],1)],1),a("v-flex",{staticStyle:{"border-style":"solid","border-color":"rgb(219, 245, 253)","border-width":"300","border-radius":"10px"},attrs:{sm12:"",md5:"",lg5:"","my-1":""}},[a("v-layout",{attrs:{column:"","align-center":""}},[a("v-icon",{attrs:{large:""}},[t._v("mdi-gmail")]),a("h2",{staticStyle:{"font-family":"'Caviar Dreams'"}},[t._v("martinsthiagoaugusto@gmail.com")])],1)],1)],1),a("v-layout",{attrs:{"fill-height":"","justify-start":"","align-end":"","pt-4":"","pb-0":""}},[a("p",{staticStyle:{"font-family":"'Caviar Dreams'","font-size":"18px"}},[t._v("made with love and code from scratch. © 2019")])])],1)],1)])},s=[],r=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-card",{staticClass:"mx-auto my-2",attrs:{xs12:"",md4:"",lg3:"",color:t.color,dark:"",width:"350"}},[e("v-img",{staticClass:"white--text",attrs:{height:"150px",src:t.event.picture}}),e("v-dialog",{attrs:{"max-width":"300"},model:{value:t.dialog,callback:function(i){t.dialog=i},expression:"dialog"}},[e("v-card",{attrs:{color:"blue-grey lighten-5"}},[e("v-container",{attrs:{fluid:"","fill-height":""}},[e("v-layout",{attrs:{column:"","align-center":"","justify-center":""}},[e("v-img",{staticStyle:{"border-radius":"50%"},attrs:{width:"100",src:t.dialogPicture}}),e("h2",{staticStyle:{"font-family":"'Caviar Dreams'"}},[t._v(t._s(t.dialogName))]),e("a",{attrs:{href:t.dialogLinkedin,target:"_blank"}},[e("v-icon",[t._v("\n              mdi-linkedin\n            ")])],1)],1)],1)],1)],1),e("v-card-title",[e("v-layout",{attrs:{row:"","justify-space-between":"","align-top":"","fill-height":""}},[e("v-flex",[e("v-icon",[t._v("\n          "+t._s(t.event.type)+"\n        ")]),e("span",{staticClass:"title font-weight-light",staticStyle:{"margin-left":"4px"}},[t._v(t._s(t.event.name))])],1),e("v-layout",{attrs:{column:"","align-end":""}},[e("v-flex",[e("v-icon",[t._v(" mdi-map-marker-outline")]),e("span",{staticClass:"title font-weight-light"},[t._v(t._s(t.place))])],1),e("span",{staticClass:"title font-weight-light"},[t._v(t._s(t.date))])],1)],1)],1),e("v-card-text",{staticClass:"headline font-weight-bold",staticStyle:{"margin-top":"0px","padding-top":"0px"}},[t._v("\n    "+t._s(t.title)+"\n  ")]),e("v-spacer"),e("v-card-actions",{staticStyle:{"margin-top":"0"}},[e("v-list-tile",{staticClass:"grow"},[e("v-layout",{attrs:{"align-center":"","fill-height":"","justify-space-between":""}},[e("v-layout",{attrs:{row:""}},t._l(t.people,function(i){return e("v-list-tile-avatar",{key:i.name,attrs:{color:"grey darken-3"}},[e("v-img",{staticClass:"elevation-6",attrs:{src:i.pictureLink},on:{click:function(e){return t.showDialog(i)}}})],1)}),1),e("v-icon",{staticClass:"mr-1 rounded"},[t._v("mdi-presentation")])],1)],1)],1)],1)},l=[],c=(e("7f7f"),{name:"card-talk",props:["title","event","place","date","people","presentation","color"],mounted:function(){console.log(this)},data:function(){return{dialog:!1,dialogPicture:"",dialogName:"",dialogLinkedin:""}},methods:{getImgUrl:function(t){return e("de6e")(t)},showDialog:function(t){this.dialogPicture=t.pictureLink,this.dialogName=t.name,this.dialogLinkedin=t.linkedin,this.dialog=!0,console.log(t)}}}),d=c,p=e("2877"),m=e("6544"),u=e.n(m),h=e("b0af"),g=e("99d9"),v=e("12b2"),f=e("a523"),k=e("169a"),w=e("0e8f"),y=e("132d"),_=e("adda"),b=e("a722"),C=e("ba95"),A=e("c954"),F=e("9910"),L=Object(p["a"])(d,r,l,!1,null,null,null),Q=L.exports;u()(L,{VCard:h["a"],VCardActions:g["a"],VCardText:g["b"],VCardTitle:v["a"],VContainer:f["a"],VDialog:k["a"],VFlex:w["a"],VIcon:y["a"],VImg:_["a"],VLayout:b["a"],VListTile:C["a"],VListTileAvatar:A["a"],VSpacer:F["a"]});var x=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-card",[e("v-container",[e("v-layout",{attrs:{column:""}},[e("span",{staticClass:"projectTitle"},[t._v(t._s(t.project.title))]),e("span",{staticClass:"projectDescription"},[t._v(t._s(t.project.description))]),e("v-layout",{staticClass:"mt-2",attrs:{row:"",wrap:""}},[e("v-layout",{attrs:{column:"","justify-start":"","align-start":""}},[e("span",{staticStyle:{"font-family":"Bebas","font-size":"20px"}},[t._v("TEAM")]),e("v-layout",{attrs:{row:""}},t._l(t.project.people,function(i){return e("v-list-tile-avatar",{key:i.name,attrs:{color:"grey darken-3"}},[e("v-img",{staticClass:"elevation-6",attrs:{src:i.pictureLink},on:{click:function(e){return t.showDialog(i)}}})],1)}),1)],1),e("v-layout",{attrs:{column:"","justify-end":"","align-end":""}},[e("span",{staticStyle:{"font-family":"Bebas","font-size":"20px"}},[t._v("More")]),e("v-layout",{attrs:{row:""}},[e("v-icon",{staticClass:"mr-1 rounded"},[t._v("mdi-earth")]),e("v-icon",{staticClass:"mr-1 rounded"},[t._v("mdi-github-circle")]),e("v-icon",{staticClass:"mr-1 rounded"},[t._v("mdi-newspaper")])],1)],1)],1)],1)],1),e("v-carousel",t._l(t.project.pictures,function(t,i){return e("v-carousel-item",{key:i,attrs:{src:t.src,contain:"images/iluminae_2.gif"==t.src}})}),1),e("v-dialog",{attrs:{"max-width":"300"},model:{value:t.dialog,callback:function(i){t.dialog=i},expression:"dialog"}},[e("v-card",{attrs:{color:"blue-grey lighten-5"}},[e("v-container",{attrs:{fluid:"","fill-height":""}},[e("v-layout",{attrs:{column:"","align-center":"","justify-center":""}},[e("v-img",{staticStyle:{"border-radius":"50%"},attrs:{width:"100",src:t.dialogPicture}}),e("h2",{staticStyle:{"font-family":"'Caviar Dreams'"}},[t._v(t._s(t.dialogName))]),e("a",{attrs:{href:t.dialogLinkedin,target:"_blank"}},[e("v-icon",[t._v("\n              mdi-linkedin\n            ")])],1)],1)],1)],1)],1)],1)},S=[],j={props:["title","project"],data:function(){return{dialog:!1,dialogPicture:"",dialogName:"",dialogLinkedin:"",items:[{src:"https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"},{src:"https://cdn.vuetifyjs.com/images/carousel/sky.jpg"},{src:"https://cdn.vuetifyjs.com/images/carousel/bird.jpg"},{src:"https://cdn.vuetifyjs.com/images/carousel/planet.jpg"}]}},methods:{showDialog:function(t){this.dialogPicture=t.pictureLink,this.dialogName=t.name,this.dialogLinkedin=t.linkedin,this.dialog=!0,console.log(t)}}},I=j,V=(e("d2e5"),e("5e66")),E=e("3e35"),D=Object(p["a"])(I,x,S,!1,null,null,null),O=D.exports;u()(D,{VCard:h["a"],VCarousel:V["a"],VCarouselItem:E["a"],VContainer:f["a"],VDialog:k["a"],VIcon:y["a"],VImg:_["a"],VLayout:b["a"],VListTileAvatar:A["a"]});var P=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-card",{staticClass:"mx-auto my-2",attrs:{xs12:"",md4:"",lg3:"",color:t.hackathon.color,dark:"",width:"350"}},[e("v-img",{staticClass:"white--text",attrs:{height:"150px",src:t.hackathon.picture}}),e("v-card-title",[e("v-layout",{attrs:{row:"","justify-space-between":"","align-top":""}},[e("v-flex",{attrs:{sm6:""}},[e("span",{staticClass:"title font-weight-light"},[t._v(t._s(t.hackathon.title))])]),e("v-flex",[e("v-layout",{attrs:{column:"","align-end":""}},[e("v-flex",[e("v-icon",[t._v(" mdi-map-marker-outline")]),e("span",{staticClass:"title font-weight-light"},[t._v(t._s(t.hackathon.place))])],1),e("span",{staticClass:"title font-weight-light"},[t._v(t._s(t.hackathon.date))])],1)],1)],1)],1),e("v-card-text",{staticClass:"subheading",staticStyle:{"margin-top":"0px","padding-top":"0px"}},[t._v("\n    "+t._s(t.hackathon.solution)+"\n  ")]),e("v-layout",{staticClass:"ml-2",attrs:{row:"","align-center":"","justify-start":""}},[e("v-icon",{staticClass:"mr-1 rounded"},[t._v("mdi-trophy-award")]),e("span",[t._v(t._s(t.hackathon.position))])],1),e("v-card-actions",{staticStyle:{"margin-top":"0"}},[e("v-list-tile",[e("v-layout",{attrs:{column:"","align-start":"","justify-start":""}},[e("v-layout",{attrs:{row:""}},t._l(t.hackathon.people,function(i){return e("v-list-tile-avatar",{key:i.name,attrs:{color:"grey darken-3"}},[e("v-img",{staticClass:"elevation-6",attrs:{src:i.pictureLink},on:{click:function(e){return t.showDialog(i)}}})],1)}),1)],1)],1)],1),e("v-dialog",{attrs:{"max-width":"300"},model:{value:t.dialog,callback:function(i){t.dialog=i},expression:"dialog"}},[e("v-card",{attrs:{color:"blue-grey lighten-5"}},[e("v-container",{attrs:{fluid:"","fill-height":""}},[e("v-layout",{attrs:{column:"","align-center":"","justify-center":""}},[e("v-img",{staticStyle:{"border-radius":"50%"},attrs:{width:"100",src:t.dialogPicture}}),e("h2",{staticStyle:{"font-family":"'Caviar Dreams'"}},[t._v(t._s(t.dialogName))]),e("a",{attrs:{href:t.dialogLinkedin,target:"_blank"}},[e("v-icon",[t._v("\n              mdi-linkedin\n            ")])],1)],1)],1)],1)],1)],1)},G=[],T={name:"card-hackathon",props:["hackathon"],mounted:function(){console.log("Hackathonsss")},data:function(){return{dialog:!1,dialogPicture:"",dialogName:"",dialogLinkedin:""}},methods:{getImgUrl:function(t){return e("de6e")(t)},showDialog:function(t){this.dialogPicture=t.pictureLink,this.dialogName=t.name,this.dialogLinkedin=t.linkedin,this.dialog=!0,console.log(t)}}},M=T,R=Object(p["a"])(M,P,G,!1,null,null,null),Z=R.exports;u()(R,{VCard:h["a"],VCardActions:g["a"],VCardText:g["b"],VCardTitle:v["a"],VContainer:f["a"],VDialog:k["a"],VFlex:w["a"],VIcon:y["a"],VImg:_["a"],VLayout:b["a"],VListTile:C["a"],VListTileAvatar:A["a"]});var H={name:"app",components:{"card-talk":Q,"card-project":O,"card-hackathon":Z},data:function(){return{talks:[{event:{name:"Arduino Day",type:"mdi-book-open-variant",picture:"images/brasilino_talk.jpeg"},place:"Recife - BR",date:"Mar, 2019",title:'"Brasilino, como programar Arduino em PT-BR"',people:[{name:"Thiago Augusto",pictureLink:"https://media.licdn.com/dms/image/C4E03AQEZfwmF4I54zA/profile-displayphoto-shrink_200_200/0?e=1559779200&v=beta&t=Fa1PQey3niILFLAO605VUCs0FXDXGdr8FQSiFvsGWgg",linkedin:"https://www.linkedin.com/in/thiagoaugustosm/"},{name:"Otacilio Maia",pictureLink:"https://media.licdn.com/dms/image/C4D03AQE-2GQ-l4BPvQ/profile-displayphoto-shrink_800_800/0?e=1559779200&v=beta&t=YFAmwP6VggJNuR4XGvFaOqS_8ZGTZFejsfM8xILAxdQ",linkedin:"https://www.linkedin.com/in/otacilio/"},{name:"Erick Simões",pictureLink:"https://media.licdn.com/dms/image/C5603AQF_l6CE4giewQ/profile-displayphoto-shrink_800_800/0?e=1559779200&v=beta&t=otziMiXY3aqAEDpRo96HxOi0pKsxQhYM1_pF2VcccUg",linkedin:"https://www.linkedin.com/in/ericksimoes/"}],presentation:"",color:"#26c6da"},{event:{name:"JS Day",type:"mdi-language-javascript",picture:"images/js_day.jpg"},place:"Recife - BR",date:"Dec, 2018",title:'"Como criar experiências incríveis utilizando P5.js"',people:[{name:"Thiago Augusto",pictureLink:"https://media.licdn.com/dms/image/C4E03AQEZfwmF4I54zA/profile-displayphoto-shrink_200_200/0?e=1559779200&v=beta&t=Fa1PQey3niILFLAO605VUCs0FXDXGdr8FQSiFvsGWgg",linkedin:"https://www.linkedin.com/in/thiagoaugustosm/"}],presentation:"",color:"amber darken-4"},{event:{name:"Hacktoberfest Recife",type:"mdi-github-face",picture:"images/hacktoberfest.jpg"},place:"Recife - BR",date:"Oct, 2018",title:'"o que é open soure?"',people:[{name:"Thiago Augusto",pictureLink:"https://media.licdn.com/dms/image/C4E03AQEZfwmF4I54zA/profile-displayphoto-shrink_200_200/0?e=1559779200&v=beta&t=Fa1PQey3niILFLAO605VUCs0FXDXGdr8FQSiFvsGWgg",linkedin:"https://www.linkedin.com/in/thiagoaugustosm/"}],presentation:"https://speakerdeck.com/thiagoaugustosm/o-que-e-open-source",color:"indigo darken-3"}],workshops:[{event:{name:"Arduino Day",type:"mdi-book-open-variant",picture:"images/brasilino_workshop.jpg"},place:"Recife - BR",date:"Mar, 2019",title:'"Brasilino na prática, programando Arduino em português"',people:[{name:"Thiago Augusto",pictureLink:"https://media.licdn.com/dms/image/C4E03AQEZfwmF4I54zA/profile-displayphoto-shrink_200_200/0?e=1559779200&v=beta&t=Fa1PQey3niILFLAO605VUCs0FXDXGdr8FQSiFvsGWgg",linkedin:"https://www.linkedin.com/in/thiagoaugustosm/"},{name:"Otacilio Maia",pictureLink:"https://media.licdn.com/dms/image/C4D03AQE-2GQ-l4BPvQ/profile-displayphoto-shrink_800_800/0?e=1559779200&v=beta&t=YFAmwP6VggJNuR4XGvFaOqS_8ZGTZFejsfM8xILAxdQ",linkedin:"https://www.linkedin.com/in/otacilio/"}],presentation:"",color:"#26c6da"},{event:{name:"Campus Party",type:"mdi-brain",picture:"images/chatbot.jpg"},place:"Natal - BR",date:"Apr, 2018",title:'"ChatBots na prática, construindo seu primeiro ChatBot com DialogFlow"',people:[{name:"Thiago Augusto",pictureLink:"https://media.licdn.com/dms/image/C4E03AQEZfwmF4I54zA/profile-displayphoto-shrink_200_200/0?e=1559779200&v=beta&t=Fa1PQey3niILFLAO605VUCs0FXDXGdr8FQSiFvsGWgg",linkedin:"https://www.linkedin.com/in/thiagoaugustosm/"},{name:"Hugo Santos",pictureLink:"https://media.licdn.com/dms/image/C5603AQG_ZOigwpArew/profile-displayphoto-shrink_800_800/0?e=1559779200&v=beta&t=s_DrJdL_orcQPggDlhJU8CTddNtQxbuCco6e5qF8rgk",linkedin:"https://www.linkedin.com/in/hugo97s/"},{name:"Ramon Wanderley",pictureLink:"https://media.licdn.com/dms/image/C4D03AQEf79NhSKgA2A/profile-displayphoto-shrink_800_800/0?e=1559779200&v=beta&t=gedIVRnZjxhx2NsbavMqrbEd57lAV25doG1MZ8J6xIM",linkedin:"https://www.linkedin.com/in/ramonwanderley/"},{name:"Otacilio Maia",pictureLink:"https://media.licdn.com/dms/image/C4D03AQE-2GQ-l4BPvQ/profile-displayphoto-shrink_800_800/0?e=1559779200&v=beta&t=YFAmwP6VggJNuR4XGvFaOqS_8ZGTZFejsfM8xILAxdQ",linkedin:"https://www.linkedin.com/in/otacilio/"}],presentation:"https://speakerdeck.com/thiagoaugustosm/o-que-e-open-source",color:"blue darken-2"},{event:{name:"Campus Party",type:"mdi-brain",picture:"images/brasilino_cp.jpg"},place:"Natal - BR",date:"Apr, 2018",title:'"Construindo e submetendo sua própria biblioteca Arduino"',people:[{name:"Thiago Augusto",pictureLink:"https://media.licdn.com/dms/image/C4E03AQEZfwmF4I54zA/profile-displayphoto-shrink_200_200/0?e=1559779200&v=beta&t=Fa1PQey3niILFLAO605VUCs0FXDXGdr8FQSiFvsGWgg",linkedin:"https://www.linkedin.com/in/thiagoaugustosm/"},{name:"Hugo Santos",pictureLink:"https://media.licdn.com/dms/image/C5603AQG_ZOigwpArew/profile-displayphoto-shrink_800_800/0?e=1559779200&v=beta&t=s_DrJdL_orcQPggDlhJU8CTddNtQxbuCco6e5qF8rgk",linkedin:"https://www.linkedin.com/in/hugo97s/"},{name:"Ramon Wanderley",pictureLink:"https://media.licdn.com/dms/image/C4D03AQEf79NhSKgA2A/profile-displayphoto-shrink_800_800/0?e=1559779200&v=beta&t=gedIVRnZjxhx2NsbavMqrbEd57lAV25doG1MZ8J6xIM",linkedin:"https://www.linkedin.com/in/ramonwanderley/"},{name:"Otacilio Maia",pictureLink:"https://media.licdn.com/dms/image/C4D03AQE-2GQ-l4BPvQ/profile-displayphoto-shrink_800_800/0?e=1559779200&v=beta&t=YFAmwP6VggJNuR4XGvFaOqS_8ZGTZFejsfM8xILAxdQ",linkedin:"https://www.linkedin.com/in/otacilio/"}],presentation:"https://speakerdeck.com/thiagoaugustosm/o-que-e-open-source",color:"blue darken-2"},{event:{name:"Arduino Day",type:"mdi-wifi",picture:"images/nodemcu.png"},place:"Recife - BR",date:"Apr, 2018",title:'"NodeMcu - Introdução a IoT"',people:[{name:"Thiago Augusto",pictureLink:"https://media.licdn.com/dms/image/C4E03AQEZfwmF4I54zA/profile-displayphoto-shrink_200_200/0?e=1559779200&v=beta&t=Fa1PQey3niILFLAO605VUCs0FXDXGdr8FQSiFvsGWgg",linkedin:"https://www.linkedin.com/in/thiagoaugustosm/"},{name:"Saulo Barros",pictureLink:"https://media.licdn.com/dms/image/C4E03AQFT8WHhoWY5oQ/profile-displayphoto-shrink_800_800/0?e=1559779200&v=beta&t=bI7OjZSAOojZOJUJF1sghu9tWSRVKvP60m0inslYEDA",linkedin:"https://www.linkedin.com/in/saulo--barros/"}],presentation:"https://speakerdeck.com/thiagoaugustosm/o-que-e-open-source",color:"indigo darken-3"}],projects:[{title:"Padrinhos Mágicos",description:"Padrinhos Mágicos is a platform that connects volunteers to Children’s Homes and Homes for the Elderly, with the goal of bringing affection to those who need it. Finalist project at Campus Mobile Contest 2018, in Smart Cities category, out of over 60 participants. The last phase of the contest is still ongoing.",people:[{name:"Thiago Augusto",pictureLink:"https://media.licdn.com/dms/image/C4E03AQEZfwmF4I54zA/profile-displayphoto-shrink_200_200/0?e=1559779200&v=beta&t=Fa1PQey3niILFLAO605VUCs0FXDXGdr8FQSiFvsGWgg",linkedin:"https://www.linkedin.com/in/thiagoaugustosm/"},{name:"Hugo Santos",pictureLink:"https://media.licdn.com/dms/image/C5603AQG_ZOigwpArew/profile-displayphoto-shrink_800_800/0?e=1559779200&v=beta&t=s_DrJdL_orcQPggDlhJU8CTddNtQxbuCco6e5qF8rgk",linkedin:"https://www.linkedin.com/in/hugo97s/"},{name:"Samuel Barbosa",pictureLink:"https://media.licdn.com/dms/image/C4E03AQHD9t_URB4Isg/profile-displayphoto-shrink_800_800/0?e=1559779200&v=beta&t=lN2aPxs40RMZpn1X85EZufOchwkFNnASRcVsbEeOZSQ",linkedin:"https://www.linkedin.com/in/samuelbjsouza/"}],pictures:[{src:"images/pm_1.png"},{src:"images/pm_2.jpg"},{src:"images/pm_3.jpeg"}]},{title:"Brasilino",description:"Brasilino is a open source library that allows programming in Arduino language using commands facilitated in PT-BR. Brasilino has been teached in workshops among different states of Brazil and it has impacted the life of new coders.",people:[{name:"Thiago Augusto",pictureLink:"https://media.licdn.com/dms/image/C4E03AQEZfwmF4I54zA/profile-displayphoto-shrink_200_200/0?e=1559779200&v=beta&t=Fa1PQey3niILFLAO605VUCs0FXDXGdr8FQSiFvsGWgg",linkedin:"https://www.linkedin.com/in/thiagoaugustosm/"},{name:"Otacilio Maia",pictureLink:"https://media.licdn.com/dms/image/C4D03AQE-2GQ-l4BPvQ/profile-displayphoto-shrink_800_800/0?e=1559779200&v=beta&t=YFAmwP6VggJNuR4XGvFaOqS_8ZGTZFejsfM8xILAxdQ",linkedin:"https://www.linkedin.com/in/otacilio/"},{name:"Erick Simões",pictureLink:"https://media.licdn.com/dms/image/C5603AQF_l6CE4giewQ/profile-displayphoto-shrink_800_800/0?e=1559779200&v=beta&t=otziMiXY3aqAEDpRo96HxOi0pKsxQhYM1_pF2VcccUg",linkedin:"https://www.linkedin.com/in/ericksimoes/"}],pictures:[{src:"images/brasilino_1.png"},{src:"images/brasilino_cp.jpg"},{src:"images/brasilino_workshop.jpg"}]},{title:"Iluminaê",description:"Iluminaê is an Open Source project, hardware and software, capable of           transforming vibrations obtained through instruments typical of the Carnival of  Pernambuco, such as Tools, Boxes of war, metals, among others, in light and  color using RGB LED strips. It was implemented during the carnival of Recife in 2018, in the Curta  Pernambuco block located in Arsenal Square, Recife - Brazil.",people:[{name:"Thiago Augusto",pictureLink:"https://media.licdn.com/dms/image/C4E03AQEZfwmF4I54zA/profile-displayphoto-shrink_200_200/0?e=1559779200&v=beta&t=Fa1PQey3niILFLAO605VUCs0FXDXGdr8FQSiFvsGWgg",linkedin:"https://www.linkedin.com/in/thiagoaugustosm/"},{name:"Otacilio Maia",pictureLink:"https://media.licdn.com/dms/image/C4D03AQE-2GQ-l4BPvQ/profile-displayphoto-shrink_800_800/0?e=1559779200&v=beta&t=YFAmwP6VggJNuR4XGvFaOqS_8ZGTZFejsfM8xILAxdQ",linkedin:"https://www.linkedin.com/in/otacilio/"}],pictures:[{src:"images/iluminae.jpg"},{src:"images/iluminae_2.gif"}]}],hackathons:[{title:"Hackathon Truewind Outsystems",solution:"Repassa, a platform focused on helping university students before the enrollment process and during the academic period with their main difficulties related to the chosen subjects, won the first place in this hackathon, which also had training in the Outsystems platform.",place:"Recife - BR",date:"Mar. 2019",picture:"images/hackathon_outsystems.jpeg",people:[{name:"Thiago Augusto",pictureLink:"https://media.licdn.com/dms/image/C4E03AQEZfwmF4I54zA/profile-displayphoto-shrink_200_200/0?e=1559779200&v=beta&t=Fa1PQey3niILFLAO605VUCs0FXDXGdr8FQSiFvsGWgg",linkedin:"https://www.linkedin.com/in/thiagoaugustosm/"},{name:"Hugo Santos",pictureLink:"https://media.licdn.com/dms/image/C5603AQG_ZOigwpArew/profile-displayphoto-shrink_800_800/0?e=1559779200&v=beta&t=s_DrJdL_orcQPggDlhJU8CTddNtQxbuCco6e5qF8rgk",linkedin:"https://www.linkedin.com/in/hugo97s/"},{name:"João Rafael",pictureLink:"https://media.licdn.com/dms/image/C4D03AQEztE64Vc1cWg/profile-displayphoto-shrink_800_800/0?e=1559779200&v=beta&t=hLm1Zx0ION4SOcSdyuaXlGcZ32_yHnPieAYdLGO9n4A",linkedin:"https://www.linkedin.com/in/rafaeufaria/"}],position:"1st place",color:"blue"},{title:"Hacker Cidadão 6.0 - Cidades e Cidadão Conectados",solution:"Faciliti, a facilitator in the communication channel between Employment Agencies and citizens in search of opportunities.",place:"Recife - BR",date:"Nov. 2018",picture:"images/faciliti.jpeg",people:[{name:"Thiago Augusto",pictureLink:"https://media.licdn.com/dms/image/C4E03AQEZfwmF4I54zA/profile-displayphoto-shrink_200_200/0?e=1559779200&v=beta&t=Fa1PQey3niILFLAO605VUCs0FXDXGdr8FQSiFvsGWgg",linkedin:"https://www.linkedin.com/in/thiagoaugustosm/"},{name:"Marco Aurélio",pictureLink:"https://media.licdn.com/dms/image/C4D03AQGDyyySr-_Uyw/profile-displayphoto-shrink_800_800/0?e=1559779200&v=beta&t=hAReSK3OzmU4jBWj4xsH-36Sdaqkce-Pz3tTuGWvR5s",linkedin:"https://www.linkedin.com/in/marcoafsantana/"},{name:"Carol Vieira",pictureLink:"https://scontent.frec3-2.fna.fbcdn.net/v/t1.0-9/22489710_752326104952248_6113029507158867460_n.jpg?_nc_cat=104&_nc_ht=scontent.frec3-2.fna&oh=14c3fa1fc01a2ddf9e5afb7436c82926&oe=5D4FD3EA",linkedin:"#"},{name:"João Rafael",pictureLink:"https://media.licdn.com/dms/image/C4D03AQEztE64Vc1cWg/profile-displayphoto-shrink_800_800/0?e=1559779200&v=beta&t=hLm1Zx0ION4SOcSdyuaXlGcZ32_yHnPieAYdLGO9n4A",linkedin:"https://www.linkedin.com/in/rafaeufaria/"}],position:"1st place",color:"blue"},{title:"CodeCup 2018",solution:"Cérbero, a project with a new concept of TFA (Three Factor Authentication), with the purpose of reducing and ensuring that the customer is in the purchase, improves the user experience. All this, with a new algorithm, and a chatbot.",place:"Recife - BR",date:"Mar. 2018",picture:"https://scontent.frec3-1.fna.fbcdn.net/v/t1.0-9/29343051_1647815895297515_1309767748842160128_n.jpg?_nc_cat=111&_nc_ht=scontent.frec3-1.fna&oh=8e1380c3ccc8b5aa271c6182df07880f&oe=5D46DF6C",people:[{name:"Thiago Augusto",pictureLink:"https://media.licdn.com/dms/image/C4E03AQEZfwmF4I54zA/profile-displayphoto-shrink_200_200/0?e=1559779200&v=beta&t=Fa1PQey3niILFLAO605VUCs0FXDXGdr8FQSiFvsGWgg",linkedin:"https://www.linkedin.com/in/thiagoaugustosm/"},{name:"Marco Aurélio",pictureLink:"https://media.licdn.com/dms/image/C4D03AQGDyyySr-_Uyw/profile-displayphoto-shrink_800_800/0?e=1559779200&v=beta&t=hAReSK3OzmU4jBWj4xsH-36Sdaqkce-Pz3tTuGWvR5s",linkedin:"https://www.linkedin.com/in/marcoafsantana/"},{name:"Paula Soares",pictureLink:"https://media.licdn.com/dms/image/C4E03AQEEXk0pLIYu_Q/profile-displayphoto-shrink_800_800/0?e=1559779200&v=beta&t=FOhxQ9OhpQ5XUlVYn__h1zoApv1mtf1TQCDV4S9Y6HE",linkedin:"https://www.linkedin.com/in/soaresdelapaula/"},{name:"Otacilio Maia",pictureLink:"https://media.licdn.com/dms/image/C4D03AQE-2GQ-l4BPvQ/profile-displayphoto-shrink_800_800/0?e=1559779200&v=beta&t=YFAmwP6VggJNuR4XGvFaOqS_8ZGTZFejsfM8xILAxdQ",linkedin:"https://www.linkedin.com/in/otacilio/"},{name:"Ramon Wanderley",pictureLink:"https://media.licdn.com/dms/image/C4D03AQEf79NhSKgA2A/profile-displayphoto-shrink_800_800/0?e=1559779200&v=beta&t=gedIVRnZjxhx2NsbavMqrbEd57lAV25doG1MZ8J6xIM",linkedin:"https://www.linkedin.com/in/ramonwanderley/"},{name:"Jailson Dias",pictureLink:"https://media.licdn.com/dms/image/C4E03AQGPL9TMyWzJlw/profile-displayphoto-shrink_800_800/0?e=1559779200&v=beta&t=yBD5Ms5XKO2yQzrTI8uOHuQTfN61h4SWvq2eKoXVmeo",linkedin:"https://www.linkedin.com/in/jailsondias4/"}],position:"3rd place",color:"blue"},{title:"1º Desafio Augment",solution:"Aug, a collaborative chatbot capable of identifying investor profiles and finding content and startups directed through the algorithm QUEm (Quality of Entrepreneurial Users)",place:"Recife - BR",date:"Mar. 2018",picture:"images/aug.png",people:[{name:"Thiago Augusto",pictureLink:"https://media.licdn.com/dms/image/C4E03AQEZfwmF4I54zA/profile-displayphoto-shrink_200_200/0?e=1559779200&v=beta&t=Fa1PQey3niILFLAO605VUCs0FXDXGdr8FQSiFvsGWgg",linkedin:"https://www.linkedin.com/in/thiagoaugustosm/"},{name:"Caio Gomes",pictureLink:"https://media.licdn.com/dms/image/C5603AQF_rKwzaoSZHA/profile-displayphoto-shrink_800_800/0?e=1559779200&v=beta&t=BkEiHampKJUILVjf1fvVdf2PI9N_8M0dV8gvcyiSThE",linkedin:"https://www.linkedin.com/in/caiogomes001/"},{name:"Paula Soares",pictureLink:"https://media.licdn.com/dms/image/C4E03AQEEXk0pLIYu_Q/profile-displayphoto-shrink_800_800/0?e=1559779200&v=beta&t=FOhxQ9OhpQ5XUlVYn__h1zoApv1mtf1TQCDV4S9Y6HE",linkedin:"https://www.linkedin.com/in/soaresdelapaula/"},{name:"Otacilio Maia",pictureLink:"https://media.licdn.com/dms/image/C4D03AQE-2GQ-l4BPvQ/profile-displayphoto-shrink_800_800/0?e=1559779200&v=beta&t=YFAmwP6VggJNuR4XGvFaOqS_8ZGTZFejsfM8xILAxdQ",linkedin:"https://www.linkedin.com/in/otacilio/"},{name:"Saulo Barros",pictureLink:"https://media.licdn.com/dms/image/C4E03AQFT8WHhoWY5oQ/profile-displayphoto-shrink_800_800/0?e=1559779200&v=beta&t=bI7OjZSAOojZOJUJF1sghu9tWSRVKvP60m0inslYEDA",linkedin:"https://www.linkedin.com/in/saulo--barros/"}],position:"1st place",color:"blue"}]}},computed:{aspect:function(){return 1*window.innerWidth/2300}},methods:{openLinkedin:function(){window.open("https://www.linkedin.com/in/thiagoaugustosm/","_blank")},openGithub:function(){window.open("https://github.com/ThiagoAugustoSM","_blank")},openInstagram:function(){window.open("https://www.instagram.com/thiagoaugustosm/","_blank")},openTwitter:function(){window.open("https://twitter.com/thiagoaugustosm","_blank")}}},X=H,B=(e("034f"),e("7496")),N=Object(p["a"])(X,o,s,!1,null,null,null),U=N.exports;u()(N,{VApp:B["a"],VCard:h["a"],VContainer:f["a"],VFlex:w["a"],VIcon:y["a"],VImg:_["a"],VLayout:b["a"]});e("5363");a["a"].config.productionTip=!1,new a["a"]({iconfont:"mdi",render:function(t){return t(U)}}).$mount("#app")},"56e7":function(t,i,e){t.exports=e.p+"img/thiago.a851fe5d.jpg"},d2e5:function(t,i,e){"use strict";var a=e("dc23"),n=e.n(a);n.a},dc23:function(t,i,e){},de6e:function(t,i){function e(t){var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}e.keys=function(){return[]},e.resolve=e,t.exports=e,e.id="de6e"}});
//# sourceMappingURL=app.8ee11c95.js.map