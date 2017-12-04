<template>
  <div id="app">
    <div v-if = 'count.currentUser===null||count.user.id===""'>
      <Login @success='logined($event)'/>
    </div>
    <div v-else class="seciton">
      <Resume/>
    </div>
  </div>
    <!-- <router-link to="/login" tag="div" v-if = 'count.currentUser===null||count.user.id===""'>
              <Login @success='logined($event)'/>
   </router-link>   
      <router-link  v-else to="/resume" tag='div'>
      <Resume/>
      </router-link>
      
    <router-view></router-view> -->

    
  </div>
</template>
<script>

import Login from "./components/Login";
import store from "./store/index";
import AV from "./lib/leancloud";
import "./css/csshake-slow.min.css";
import getUser from "./lib/getUser";
import Resume from './components/Resume';
export default {
  name: "app",
  store,
  AV,
  created() {
    // let state = localStorage.getItem('state')
    // if(state){
    //   state = JSON.parse(state)
    // }
    // this.$store.commit('initState',state)
    this.$store.commit("setUser", getUser());
    this.$store.commit("isUser", getUser());
    if (this.count.user.id) {
      // console.log(1);
      this.getResume()
    }
  },
  components: {
    Login,
    Resume,
  },
  computed: {
    count() {
      return this.$store.state;
    },
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    logined(user) {
      // this.$store.state
      // location.reload();
      this.$store.commit("setUser", user);
      this.getResume()
    },
    getResume() {
      let query = new AV.Query("ResumeList");
      query.find().then(results => {
        let resume = results[0];
        let id = resume.id;
         console.log(this.count.id)
        this.count.id = id;
        this.count.resume = JSON.parse(resume.attributes.content);
      });
    }
  }
};
</script>
<style>
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateY(-10px);
  opacity: 0;
}
#app {
  background: linear-gradient(to bottom, #8ac0e2, #f7fafc);
}

</style>
