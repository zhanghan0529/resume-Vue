<template>
  <div id="app">
    <TopBar/>
    <div class='content'>
    <EditorTab/>
    <Preview/>
    </div>
  </div>
</template>
<script>

import TopBar from "./components/TopBar";
import EditorTab from "./components/EditorTab";
import Preview from "./components/Preview";
import store from './store/index'
export default {
  name: "app",
  store,
  components: {
    TopBar,EditorTab,Preview
  }
};
</script>
<style>
@keyframes fade-in{
  0%{opacity:0;}
  100%{opacity:1;}
}
#app {
  background:#f7fafc;
  height: 100vh;
  padding:16px;
  display: flex;
  flex-direction: column;
}
.content{
  margin-top: 16px;
  display: flex;
  height: 100%;
}

</style>
