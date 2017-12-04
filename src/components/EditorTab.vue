<template>
 <transition name="slide-fade">
  <div id="editor" v-if = 'count.show'>
    <ul class='class-icons' >
      <li v-for = "(item,index) in count.resume.config" v-bind:class="{active:choosetab===index}" @click = 'choosetab = index'>
            <svg class="icon" aria-hidden="true" >
            <use v-bind:xlink:href="`#icon-${count.resume.config[index].icon}`"></use>
         </svg>
      </li>

    </ul>
    <ul class='to-input'>

      <!-- <li v-for = "(item,index) in count.resume.config" v-bind:class='{active:choosetab===index}'>
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
        <div v-for='(value,key) in count.resume.profile'>
          <label>{{key}}</label>  
          <el-input :value="value" @input = 'changedata(`${"profile"}.${key}`,$event)' v-bind:placeholder="`请输入${key}`"></el-input>
        </div>
      </li>
      <li v-bind:class='{active:choosetab===1}'>
        <div class="workhistory" v-for="(item,i) in count.resume.workhistory">
          <div v-for='(value,key) in item'>
            <div v-if='key==="开始时间"||key==="结束时间"'>
              <label>{{key}}</label>      
             <!-- <el-date-picker :value="value" @input = 'changedata(`${"workhistory"}.${i}.${key}`,$event)' value-format ='yyyy.MM' type="daterange" selectableRange= "string" range-separator="-" start-placeholder="开始日期" end-placeholder="结束日期">ZA
              </el-date-picker> -->
              <el-date-picker :value="value" @input = 'changedata(`${"workhistory"}.${i}.${key}`,$event)' type="month" value-format ='yyyy.MM' placeholder="选择日期"></el-date-picker>
            </div>
           <div v-else>
            <label>{{key}}</label>  
               <el-input :value="value" @input = 'changedata(`${"workhistory"}.${i}.${key}`,$event)' v-bind:placeholder="`请输入${key}名称`"></el-input>
           </div>
         </div>
             <i class="el-icon-delete" @click.prevent='deleteitem(item,"workhistory")'></i>
             <hr>
        </div>
        <button class="addmore" @click.prevent='additem("workhistory")'>+</button>
      </li>
      <li v-bind:class='{active:choosetab===2}'>
        <div class="projects" v-for='(item,i) in count.resume.projects'>
          <div v-for ='(value,key) in item'>
             <div v-if = 'key==="项目简介"'>
               <label>{{key}}</label> 
               <el-input type="textarea" :rows="4"  @input = 'changedata(`${"projects"}.${i}.${key}`,$event)'  v-bind:placeholder="`请输入${key}`" ></el-input>
             </div>
             <div v-else>
               <label>{{key}}</label>
                <el-input :value="value" @input = 'changedata(`${"projects"}.${i}.${key}`,$event)' placeholder="请输入内容"></el-input>
             </div>
          </div>
             <i class="el-icon-delete" @click.prevent='deleteitem(item,"projects")'></i>
          <hr>
        </div>
        <button class="addmore" @click.prevent='additem("projects")'>+</button>
      </li>
      <li v-bind:class='{active:choosetab===3}'>
         <div v-for='(value,key) in count.resume.school'>
            <div v-if='key==="开始时间"||key==="结束时间"'>
              <label>{{key}}</label>      
             <!-- <el-date-picker :value="value" @input = 'changedata(`${"workhistory"}.${i}.${key}`,$event)' value-format ='yyyy.MM' type="daterange" selectableRange= "string" range-separator="-" start-placeholder="开始日期" end-placeholder="结束日期">ZA
              </el-date-picker> -->
              <el-date-picker :value="value" @input = 'changedata(`${"school"}.${key}`,$event)' type="month" value-format ='yyyy.MM' placeholder="选择日期"></el-date-picker>
            </div>
              <!-- <el-date-picker :value="value" @input = 'changedata(`${"school"}.${key}`,$event)' value-format ='yyyy.MM' type="daterange" range-separator="-" start-placeholder="开始日期" end-placeholder="结束日期">
              </el-date-picker> -->
          <div v-else>
            <label>{{key}}</label>  
               <el-input :value="value" @input = 'changedata(`${"school"}.${key}`,$event)' v-bind:placeholder="`请输入${key}`"></el-input>
          </div>
        </div>
      </li>
      <li v-bind:class='{active:choosetab===4}'>
        <div v-for='(item,i) in count.resume.awards'>
          <div v-for ='(value,key) in item'>
             <div v-if = 'key==="时间"'>
              <label>时间</label>  
              <el-date-picker :value="value" @input = 'changedata(`${"awards"}.${i}.${key}`,$event)' type="month" value-format ='yyyy.MM' placeholder="选择日期"></el-date-picker>
              <!-- <label>结束时间</label>  
              <el-date-picker :value="value" @input = 'changedata(`${"awards"}.${i}.${key}`,$event)' type="month" value-format ='yyyy.MM' placeholder="选择日期"></el-date-picker> -->
             </div>
             <div v-else>
               <label>{{key}}</label>
                <el-input :value="value" @input = 'changedata(`${"awards"}.${i}.${key}`,$event)' v-bind:placeholder="`请输入${key}`"></el-input>
             </div>
          </div>
             <i class="el-icon-delete" @click.prevent='deleteitem(item,"awards")'></i>
             <hr>
        </div>
        <button class="addmore" @click.prevent='additem("awards")'>+</button>
      </li>
      <li v-bind:class='{active:choosetab===5}'>
        <div v-for ='(value,key) in count.resume.introduce'>
            <label>{{key}}</label> 
          <el-input type="textarea" :rows="4"  @input = 'changedata(`${"introduce"}.${key}`,$event)' v-bind:placeholder="`请简述${key}`" ></el-input>
        </div>
      </li>
    </ul>
  </div>
   </transition>
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
    count() {
      return this.$store.state;
    }
  },
  methods: {
    additem(item) {
      this.$store.commit("addproject", item);
    },
    deleteitem(item, which) {
      // console.log(item)
      this.$store.commit("deleteproject", { item, which });
    },
    changedata(path, value) {
      // console.log(path);
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
  height: 696px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  margin-right: 1rem;
  display: flex;
  // animation: fade-in 0.3s;
  background: #f7fafc;
  overflow: hidden;
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
      div {
        margin: 8px 0;
      }
      label {
        display: block;
        font-size: 0.8rem;
        color: #555;
      }
      .el-textarea__inner:focus {
        border-color: #bbb;
        outline: 0;
        /* text-shadow: 0 0 black; */
      }
      .el-input__inner:focus {
        border-color: #bbb;
        outline: 0;
        /* text-shadow: 0 0 black; */
      }
      .el-range-editor.is-active,
      .el-range-editor.is-active:hover {
        border-color: #bbb;
      }
      .el-icon-delete {
        color: orange;
        font-size: 1rem;
        cursor: pointer;
      }
      .el-icon-delete:hover {
        opacity: 0.7;
      }
      hr {
        border: 0.5px solid #d8dce5;
      }
      .addmore {
        background: #8ac0e2;
        border: 1px solid #8ac0e2;
        color: white;
        font-size: 1.5rem;
        padding: 4px 32px;
        border-radius: 5px;
        outline-style: none;
        display: block;
        margin: 0 auto;
        cursor: pointer;
      }
      .addmore:hover {
        opacity: 0.7;
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
 