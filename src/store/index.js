import Vuex from "vuex";
import Vue from "vue";
import objectPath from "object-path"
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    count: 0,
    choosetab: 0,
    resume: {
      config: [
        { field: "profile", icon: "mingpian" },
        { field: "workhistory", icon: "bag" },
        { field: "projects", icon: "xiangmu" },
        { field: "school", icon: "xuexiao" },
        { field: "awards", icon: "jiangbei" },
        { field: "introduce", icon: "ziwomiaoshu" }
      ],
      profile: {
        姓名: "",
        居住城市: "",
        年龄: "",
        Email: "",
        手机: "",
        Github: "",
        求职意向: ""
      },
      workhistory: {
        公司:'',
        时间: "",
        职位: ""
      },
      projects: [
        {
          项目: "",
          项目简介:"",
          预览地址: ""
        }
      ],
      school: {
        学校: "",
        专业: "",
        time: "",
        学位: ""
      },
      awards: [
        {
          time: "",
          奖项: ""
        }
      ],
      introduce: {
        自我评价: ""
      }
    }
    // whatcontent: [ "mingpian","bag","xiangmu","xuexiao","jiangbei","phone"],
  },
  mutations: {
    switchTab(state, payload) {
      state.choosetab = payload;
    },
    updata(state, {path, value}) {
        objectPath.set(state.resume,path,value)
    },
    addproject(state){
        state.resume.projects.push({
          项目: "",
          项目简介: "",
          预览地址: ""
        });
    }
  }
});