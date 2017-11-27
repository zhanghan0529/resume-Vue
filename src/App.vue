<template>
  <div id="app">
    <div v-if = 'count.current===0'>
      <Login/>
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
import Login from './components/Login';
import store from './store/index';
import AV from './lib/leancloud';
import './css/csshake-slow.min.css';

export default {
  name: "app",
  store,
  AV,
  components: {
    TopBar,EditorTab,Preview,Login
  },
  computed:{
    count(){
    return this.$store.state;
    }
  }
};
</script>
<style>
@keyframes fade-in{
  0%{opacity:0;}
  100%{opacity:1;}
}
#app {
  background:linear-gradient(to bottom, #8ac0e2, #f7fafc);

}
.seciton{
  /* height: 100%; */
    padding:16px;
    height: 100vh;
    display: flex;
    flex-direction: column;
}
.content{
  margin-top: 16px;
  display: flex;
  height: 100%;
}

</style>
