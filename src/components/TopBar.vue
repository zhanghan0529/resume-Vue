<template>
  <div id = 'topbar'>
  <div class="logo">
      <img  src="//ozuq4db16.bkt.clouddn.com/1.PNG" alt="">
    </div>
    <div class='topbarbtn'>
      <el-button type="info" size="small">注销</el-button>
      <el-button type="info" size="small">预览</el-button>
    </div>
    
  </div>
</template>


<style lang="scss">
#topbar {
  width: 100%;
  display: flex;
  justify-content:space-between;
  align-items: center;
  padding: 16px;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);
  border-radius: 5px;
  animation: fade-in 0.3s;
  .logo img {
    width:12rem;
    
  }

}
</style>
