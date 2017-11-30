<template>
  <div id='preview'>
    <div class='pcontent'>
      <div class="profile">
        <h1>{{resume.profile.姓名}}</h1>
        <h3>{{resume.profile.职业}}</h3>
        <hr>
        <div class="inform">
          <h2>基本信息</h2>
          <p><span>年龄：</span>{{resume.profile.年龄}}</p>
          <p><span>城市：</span>{{resume.profile.居住城市}}</p>
          <p><span>Email：</span>{{resume.profile.Email}}</p>
          <p><span>手机：</span>{{resume.profile.手机}}</p>
          <p><span>Github：</span>{{resume.profile.Github}}</p>
          <hr>
          <h2>求职意向</h2>
          <p>{{resume.profile.求职意向}}</p>
        </div>
        <hr>
      </div>
      <div class="workhistory" v-if='resume.workhistory.length!==0'>
        <h2>工作经历</h2>
        <div class= "item" v-for ='(item,i) in resume.workhistory' >
           <p><span>公司：</span>{{item.公司}}</p>
           <p><span>工作时间：</span>{{item.开始时间}} - {{item.结束时间}}</p>
           <p><span>职位：</span>{{item.职位}}</p>
        </div>
        <hr>
      </div>
      <div class="projects" v-if='resume.projects.length!==0'>
        <h2>项目经验</h2>
        <div class= "item" v-for ='item in resume.projects'>
          <h3>{{item.项目}}</h3>
          <p><span>项目简介：</span>{{item.项目简介}}</p>
          <p><span>线上地址：</span>{{item.预览地址}}</p>
        </div>
        <hr>
      </div>
      <div class="school">
        <h2>教育背景</h2>
        <p><span>学校：</span>{{resume.school.学校}}</p>
        <p><span>专业：</span>{{resume.school.专业}}</p>
        <p><span>时间：</span>{{resume.school.开始时间}}-{{resume.school.结束时间}}</p>
        <p><span>学位：</span>{{resume.school.学位}}</p>
        <hr>
      </div> 
      <div class="awards" v-if='resume.awards.length!==0'>
        <h2>获得荣誉</h2>
        <div class= "item" v-for='item in resume.awards'>
          <p><span>时间：</span>{{item.时间}}</p>
          <p><span>获奖内容：</span>{{item.奖项}}</p>
        </div>
        <hr>
      </div>
      <div class="introduce">
        <h2>自我评价</h2>
        <p>{{resume.introduce.自我评价}}</p>
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
  color:#444;
  p {
    white-space: pre;
    // span{
    //   // font-weight: bold;
    // }
  }
  .pcontent {
    margin: 16px 32px;
  }
  .profile > h3{
    font-weight: normal;
  }
  .pcontent h2{
    // color: #0f88eb;
    display: inline-block;
  }
  .item{
    margin: 0 0 16px 0;
  }
}
</style>
