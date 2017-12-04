<template>
 <transition name="slide-fade">
  <div id = 'topbar' v-if='resume.show'>
  <div class="logo">
      <img  src="//ozuq4db16.bkt.clouddn.com/1.PNG" alt="">
    </div>
    <div class='topbarbtn'>
      <el-button type="info" size="small" @click = 'previewresume'>预览</el-button>
      <el-button type="info" size="small" @click.prevent='saveORupdate'>保存</el-button>
      <el-button type="info" size="small" @click.prevent='loginout'>登出</el-button>       
    </div>
  </div>
 </transition>
</template>
<script>
import AV from '../lib/leancloud'
export default {
  computed:{
    resume(){
      return this.$store.state
    }
  },
  methods:{
    previewresume(){
      this.$store.commit("showresume",0)
    },
    saveORupdate(){
      if(this.resume.resume.id){
        console.log(1)
        this.updateresume()
      }else{
        console.log(2)
        this.saveresume()
      }
    },
    saveresume(){
      let state = JSON.stringify(this.resume.resume)
      let Post = AV.Object.extend('ResumeList')
      let post = new Post()
      post.set("content",state)
      let acl = new AV.ACL();
      acl.setPublicReadAccess(false);
      acl.setPublicWriteAccess(false);
      acl.setWriteAccess(AV.User.current(),true);
      acl.setReadAccess(AV.User.current(),true);
      post.setACL(acl);
      post.save().then((resume1)=>{
        this.resume.resume.id = resume1.id
        console.log(resume1.id)
      }).catch((error)=>{
        console.log(3)
      })
    },
    updateresume(){
      let state = JSON.stringify(this.resume.resume)
      let resume = AV.Object.createWithoutData('ResumeList',this.resume.resume.id);
      resume.set('content',state)
      console.log(this.resume.resume.id)
      resume.save();
      console.log(4)
    },
    loginout(){
      // localStorage.clear()
      // location.reload()
      AV.User.logOut();
      this.$store.commit('isUser',null)
    }
  }
}
</script>

<style lang="scss" scoped>
#topbar {
  width: 100%;
  display: flex;
  justify-content:space-between;
  align-items: center;
  padding: 16px;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);
  border-radius: 5px;
  background: #f7fafc;
  // animation: fade-in 0.3s;
  .logo img {
    width:12rem;
  }
}
</style>
