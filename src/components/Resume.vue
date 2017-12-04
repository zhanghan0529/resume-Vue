<template>
<div class="seciton">
   <TopBar/>
  <div class='content'>
    <EditorTab/>
    <Preview/>
  </div>
  <transition name="slide-fade">
  <el-button class="goback" type="info" size="small" v-if='!count.show' @click.prevent='goback'>返回</el-button> 
  </transition>
</div>
</template>
<script>
import TopBar from "./TopBar";
import EditorTab from "./EditorTab";
import Preview from "./Preview";
export default {
  components: {
    TopBar,
    EditorTab,
    Preview
  },
  computed:{
    count(){
      return this.$store.state
    }
  },
  methods:{
    goback(){
      this.$store.commit('showresume',1)
    }
  }
};
</script>
<style lang='scss' scoped>

.seciton {
  padding: 16px;
  height: 100%;
  display: flex;
  flex-direction: column;
  animation: fade-in 0.3s;
  // .active{
  //   display: none;
  // }
  .goback{
    position: fixed;
    right: 5rem;
    bottom: 5rem;
  }
}
.content {
  margin-top: 16px;
  display: flex;
}
</style>

