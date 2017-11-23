<template>
  <div id="editor">
    <ul class='class-icons' >
      <li v-for = "(item,index) in resume.config" v-bind:class="{active:choosetab===index}" @click = 'choosetab = index'>
              <svg class="icon" aria-hidden="true" >
            <use v-bind:xlink:href="`#icon-${resume.config[index].icon}`"></use>
         </svg>
      </li>
    </ul>
    <ul class='to-input'>
      <li v-for = "(item,index) in resume.config" v-bind:class='{active:choosetab===index}'>
        <div v-for = '(value,key) in resume[item.field]'>
       <label>{{key}}</label>
            <el-input v-model="resume[item.field][key]" placeholder="请输入内容"></el-input>
        </div>   
      </li> 
      <!-- <li v-bind:class='{active:choosetab===1}'>2</li>
      <li v-bind:class='{active:choosetab===2}'>3</li>
      <li v-bind:class='{active:choosetab===3}'>4</li>
      <li v-bind:class='{active:choosetab===4}'>5</li>
      <li v-bind:class='{active:choosetab===5}'>6</li> -->
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      choosetab: 0,
      resume: {
        config: [
          { field: "profile", icon: "mingpian" },
          { field: "workhistory", icon: "bag" },
          { field: "projects", icon: "xiangmu" },
          { field: "school", icon: "xuexiao" },
          { field: "awards", icon: "jiangbei" },
          { field: "contancts", icon: "phone" }
        ],
        profile: {
          name: "",
          city: "",
          title: ""
        },
        workhistory:{
          公司:'',
          职位:'',
          时间:''
        },
        projects:{
          项目:'',
          时间:'',
          线上地址:''
        },
        school:{
          学校:'',
          起止时间:'',
          学位:''
        },
        awards:{
          获奖时间:'',
          获奖内容:''
        },
        contancts:{
          手机:'',
          QQ:'',
          Email:'',
          WeChat:'',
          Github:''
        }
      }
      // whatcontent: [ "mingpian","bag","xiangmu","xuexiao","jiangbei","phone"],
    };
  }
};
</script>

 <style lang='scss'>
#editor {
  width: 30rem;
  height: 100%;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  margin-right: 1rem;
  display: flex;
  overflow: hidden;
  animation: fade-in 0.3s;
  .class-icons {
    height: 100%;
    background: #555;
    li {
      padding: 16px;
      cursor: pointer;
    }
    .active {
      fill: #555;
      background: white;
      animation: fade-in 0.3s;
      .icon {
        fill: #555;
      }
    }
  }
  .to-input {
    margin: 16px;
    background: white;
    flex: 1;
    li {
      display: none;
    }
    .active {
      display: block;
    }
  }
}
.icon {
  width: 2.5rem;
  height: 2.5rem;
  vertical-align: -0.15em;
  fill: white;
  overflow: hidden;
}
</style>
 