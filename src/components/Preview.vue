<template>
  <div id='preview'>
    <div class='pcontent'>
      <div class="profile">
        <h1>{{resume.profile.姓名}}</h1>
        <h2>{{resume.profile.职业}}</h2>
        <hr>
        <div class="inform">
          <h2>基本信息</h2>
          <p>年龄：{{resume.profile.年龄}}</p>
          <p>城市：{{resume.profile.居住城市}}</p>
          <p>Email：{{resume.profile.Email}}</p>
          <p>手机：{{resume.profile.手机}}</p>
          <p>Github：{{resume.profile.Github}}</p>
          <hr>
          <h2>求职意向</h2>
          <p>{{resume.profile.求职意向}}</p>
        </div>
        <hr>
      </div>
      <div class="workhistory" v-if='resume.workhistory.length!==0'>
        <h2>工作经历</h2>
        <div v-for ='(item,i) in resume.workhistory' >
           <p>公司：{{item.公司}}</p>
           <p>工作时间：{{item.开始时间}}-{{item.结束时间}}</p>
           <p>职位：{{item.职位}}</p>
           <hr>
        </div> 
      </div>
    

             <!-- {{resume.profile}}
          {{resume.workhistory}} -->
     <!-- <div v-for = 'item in resume.projects'>
       <div v-for = '(value,key) in item'>
           {{key}}
           {{value}}
   </div> -->

   <!-- {{resume.workhistory}}
   {{resume.school}}
{{resume.awards}}
{{resume.introduce}} -->
    </div>


</div>


  </div>
</template> 
<script>
export default {
  computed: {
    resume() {
      return this.$store.state.resume;
    }
  },
  methods: {}
};
</script>

<style lang='scss'>
#preview {
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  flex: 1;
  animation: fade-in 0.3s;
  background: #f7fafc;
  overflow: auto;
  font-size: 1rem;
  color:#222;
  p {
    white-space: pre-line;
  }
  .pcontent {
    margin: 16px 32px;
  }
}
</style>
