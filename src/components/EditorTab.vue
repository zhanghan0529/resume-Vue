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

      <!-- <li v-for = "(item,index) in resume.config" v-bind:class='{active:choosetab===index}'>
        <div v-if='resume[item.field] instanceof Array'>
          <div v-for='sumitem in resume[item.field]'>
           <div v-for='(value,key) in sumitem'>
            <label>{{key}}</label>
            <el-input :value="value" placeholder="请输入内容"></el-input>
           </div>
          </div>
        </div>
        <div v-else v-for = '(value,key) in resume[item.field]'>
          <label>{{key}}</label>
          <el-input :value="value" @input = 'changedata(item.field,key,$event)' placeholder="请输入内容"></el-input>
        </div>   
      </li>  -->
      <li v-bind:class='{active:choosetab===0}'>
        <div v-for='(value,key) in resume.profile'>
          <label>{{key}}</label>  
          <el-input :value="value" @input = 'changedata(`${"profile"}.${key}`,$event)' placeholder="请输入内容"></el-input>
        </div>
      </li>
      <li v-bind:class='{active:choosetab===1}'>
        <div v-for='(value,key) in resume.workhistory'>
          <div v-if='key==="时间"'>
            <label style='display:block'>{{key}}</label>      
              <el-date-picker :value="value" @input = 'changedata(`${"workhistory"}.${key}`,$event)' type="month" value-format ='yyyy.MM' placeholder="选择日期"></el-date-picker>
          </div>
          <div v-else>
            <label>{{key}}</label>  
               <el-input :value="value" @input = 'changedata(`${"workhistory"}.${key}`,$event)' placeholder="请输入内容"></el-input>
          </div>
        </div>
      </li>
      <li v-bind:class='{active:choosetab===2}'>
        <div class="projects" v-for='(item,i) in resume.projects'>
          <div v-for ='(value,key) in item'>
             <div v-if = 'key==="项目简介"'>
               <label>{{key}}</label> 
               <el-input type="textarea" :rows="4"  @input = 'changedata(`${"projects"}.${i}.${key}`,$event)' placeholder="请输入内容" ></el-input>
             </div>
             <div v-else>
               <label>{{key}}</label>
                <el-input :value="value" @input = 'changedata(`${"projects"}.${i}.${key}`,$event)' placeholder="请输入内容"></el-input>
             </div>
          </div>
        </div>
        <i class="el-icon-circle-plus" @click.prevent='add1'></i>
      </li>
      <li v-bind:class='{active:choosetab===3}'>
         <div v-for='(value,key) in resume.school'>
          <div v-if='key==="time"'>
            <label>时间</label>  
              <el-date-picker :value="value" @input = 'changedata(`${"school"}.${key}`,$event)' value-format ='yyyy.MM' type="daterange" range-separator="-" start-placeholder="开始日期" end-placeholder="结束日期">
              </el-date-picker>
          </div>
          <div v-else>
            <label>{{key}}</label>  
               <el-input :value="value" @input = 'changedata(`${"school"}.${key}`,$event)' placeholder="请输入内容"></el-input>
          </div>
        </div>
      </li>
      <li v-bind:class='{active:choosetab===4}'>
        <div v-for='(item,i) in resume.awards'>
          <div v-for ='(value,key) in item'>
             <div v-if = 'key==="time"'>
              <label>时间</label>  
              <el-date-picker :value="value" @input = 'changedata(`${"awards"}.${i}.${key}`,$event)' type="month" value-format ='yyyy.MM' placeholder="选择日期"></el-date-picker>
             </div>
             <div v-else>
               <label>{{key}}</label>
                <el-input :value="value" @input = 'changedata(`${"awards"}.${i}.${key}`,$event)' placeholder="请输入内容"></el-input>
             </div>
          </div>
        </div>
      </li>
      <li v-bind:class='{active:choosetab===5}'>
        <div v-for ='(value,key) in resume.introduce'>
            <label>{{key}}</label> 
          <el-input type="textarea" :rows="4"  @input = 'changedata(`${"introduce"}.${key}`,$event)' placeholder="请输入内容" ></el-input>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "EditorTab",
  computed: {
    choosetab: {
      get() {
        return this.$store.state.choosetab;
      },
      set(index) {
        return this.$store.commit("switchTab", index);
      }
    },
    resume() {
      return this.$store.state.resume;
    }
  },
  methods: {
    add1(){
      this.$store.commit("addproject");
    },
    changedata(path, value) {
      console.log(path);
      this.$store.commit("updata", {
        path,
        value
      });
    }
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
    padding: 16px 32px;
    overflow: auto;
    // background: white;
    flex: 1;
    li {
      display: none;
      margin: 0 auto;
      div{
        margin: 8px 0;
      }
      .el-textarea__inner:focus {
        border-color:#bbb;
        outline: 0;
        /* text-shadow: 0 0 black; */
      }
      .el-input__inner:focus {
        border-color:#bbb;
        outline: 0;
        /* text-shadow: 0 0 black; */
      }
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
 