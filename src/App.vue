<template>
  <div id="app">
    <div v-if = 'count.currentUser===null||count.user.id===""'>
      <Login @success='logined($event)'/>
    </div>
    <div v-else class="seciton">
      <TopBar/>
      <div class='content'>
        <EditorTab/>
        <Preview/>
      </div>
    </div>
  </div>
</template>
<script>
import TopBar from "./components/TopBar";
import EditorTab from "./components/EditorTab";
import Preview from "./components/Preview";
import Login from "./components/Login";
import store from "./store/index";
import AV from "./lib/leancloud";
import "./css/csshake-slow.min.css";
import getUser from "./lib/getUser";

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
      console.log(1);
      this.getResume()
    }
  },
  components: {
    TopBar,
    EditorTab,
    Preview,
    Login
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
#app {
  background: linear-gradient(to bottom, #8ac0e2, #f7fafc);
}
.seciton {
  /* height: 100%; */
  padding: 16px;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.content {
  margin-top: 16px;
  display: flex;
  height: 100%;
}
</style>
