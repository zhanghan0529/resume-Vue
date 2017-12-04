import Vuex from "vuex";
import Vue from "vue";
import objectPath from "object-path";
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    current: 0,
    Login: 1,
    count: 0,
    choosetab: 0,
    currentUser: null,
    showresume: 1,
    show:true,
    user: {
      id:'',
      usename:''
    },
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
        职业: "",
        居住城市: "",
        年龄: "",
        Email: "",
        手机: "",
        Github: "",
        求职意向: ""
      },
      workhistory: [
        {
          公司: "",
          开始时间: "",
          结束时间: "",
          职位: ""
        }
      ],
      projects: [
        {
          项目: "",
          项目简介: "",
          预览地址: ""
        }
      ],
      school: {
        学校: "",
        专业: "",
        开始时间: "",
        结束时间:"",
        学位: ""
      },
      awards: [
        {
          时间: "",
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
      // localStorage.setItem("state", JSON.stringify(state));
    },
    updata(state, { path, value }) {
      objectPath.set(state.resume, path, value);
      // localStorage.setItem("state", JSON.stringify(state));
    },
    // initState(state, payload) {
    //   Object.assign(state, payload);
    // },
    addproject(state, payload) {
      if (payload === "workhistory") {
        state.resume[payload].push({ 公司: "", 开始时间: "", 结束时间: "",职位: "" });
      } else if (payload === "projects") {
        state.resume[payload].push({ 项目: "", 项目简介: "", 预览地址: "" });
      } else if (payload === "awards") {
        state.resume[payload].push({ 时间: "", 奖项: "" });
      }
      // Object.assign(obj, state.resume[payload][0]);
      // for(let value in obj){
      //     obj[value]='';
      // }
      // state.resume[payload].push(obj);
    }, //添加一个item
    deleteproject(state, { item, which }) {
      let index = state.resume[which].indexOf(item);
      state.resume[which].splice(index, 1);
    }, //删除item
    signup(state) {
      state.Login = 0;
    },
    login(state) {
      state.Login = 1;
    },
    setUser(state,payload){
      Object.assign(state.user,payload)
      // console.log(state.user)
    },
    isUser(state,payload){
     this.state.currentUser = payload;
    },
    showresume(state,payload){
      this.state.showresume = payload;
      this.state.show = !this.state.show;
      console.log(this.state.show);
    }
  }
});
