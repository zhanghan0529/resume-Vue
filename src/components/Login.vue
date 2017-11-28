<template>
<div class="login">
  <div>
    <div class="logo">
        <div >
        <img class="shake-slow shake-constant shake-constant--hover" src="//ozuq4db16.bkt.clouddn.com/1.PNG" alt="">
        <div class='words'>Create your resume</div>
        </div>
    </div>
    <div class="loginandsign">
        <div class="logined" v-if = 'count.Login===1'>
          <form @submit.prevent='Login'>
            <input type="text" v-model = 'formData.username' value="" placeholder="账号">
            <input type="password" v-model='formData.password' value="" placeholder="密码">
            <a class="linksign" @click='signup'>没有账号,赶紧注册~</a>
            <input class="loginbtn" type = 'submit' value='登陆'>
            <div class='message'>{{message}}</div>
          </form>
        </div>
        <div class="signup" v-else>
          <form @submit.prevent = 'signUp'>
            <input type="text" v-model = 'formData.username' value="" placeholder="账号">
            <input type="password" v-model='formData.password' value="" placeholder="密码">
            <input type="password" v-model='formData.cfpassword' value="" placeholder="确认密码">
            <input class="loginbtn" type = 'submit' value='注册'>
            <div class='message'>{{message}}</div>
            <a class="linksign" @click='login'>已有账号,回去登陆~</a>
          </form>
        </div>
    </div>
  </div>
</div>
</template>
<script>
import AV from "../lib/leancloud";
export default {
  data() {
    return {
      message: "",
      formData: {
        username: "",
        password: "",
        cfpassword: ""
      }
    };
  },
  methods: {
    signUp() {
      let { username, password, cfpassword } = this.formData;
      let user = new AV.User();
      if (password === cfpassword) {
        user.setUsername(username);
        user.setPassword(password);
        user.signUp().then(loginedUser => {
          this.message = "注册成功";
          // this.$store.commit("login");
        },
        (error)=> {
          this.message = "注册失败⊙﹏⊙" ;
        });
      } else {
        this.message = "两次密码不一致~";
      }
    },
    Login() {
      let { username, password } = this.formData;
      AV.User
        .logIn(username, password)
        .then(loginedUser => {}, (error)=> {
          // this.message = "用户不存在或者密码错误~";
          this.message = "用户不存在或者密码错误~";
        });
    },
    signup() {
      this.$store.commit("signup");
      this.message = "";
    },
    login() {
      this.$store.commit("login");
      this.message = "";
    }
  },
  computed: {
    count() {
      return this.$store.state;
    }
  }
};
</script>

<style lang= 'scss'>
.login {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  animation: fade-in 0.3s;
  > div {
    width: 50%;
    height: 50%;
    /* border: 1px solid red; */
    border-radius: 5px;
    display: flex;
    .logo {
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      animation: fade-in 0.5s;
      img {
        width: 80%;
        border-radius: 5px;
        box-shadow: 0 1px 2px 2px rgba(0, 0, 0, 0.16),
          0 1px 2px 0px rgba(0, 0, 0, 0.08);
        padding: 16px;
        background: #f7fafc;
      }
      .words {
        font-size: 1.2rem;
        margin-top: 16px;
        color: #aaa;
      }
    }

    .loginandsign {
      width: 50%;
      display: flex;
      align-items: center;
      text-align: center;
      animation: fade-in 0.4s;
      .signup form,
      .logined form {
        /* height: 100%; */
        display: flex;
        flex-direction: column;
        justify-content: center;
        .message {
          color: #ff6122;
          font-size: 0.8rem;
          margin-bottom: 4px;
        }
      }
      input {
        width: 100%;
        padding: 16px;
        margin: 8px 0;
        /* margin-top: -30px; */
        border-radius: 5px;
        outline-style: none;
        border: none;
        background: #d6eafa;
        font-size: 1rem;
      }
      .linksign {
        text-decoration-line: underline;
        font-size: 0.8rem;
        color: #0f88eb;
        margin: 0 0 8px 0;
        cursor: pointer;
      }
      .loginbtn {
        padding: 8px;
        background: #0f88eb;
        border-radius: 5px;
        color: white;
        font-size: 1rem;
        width: 80%;
        margin: 8px auto;
        cursor: pointer;
      }
      .linksign:hover,
      .loginbtn:hover {
        opacity: 0.8;
      }
    }
  }
}
</style>
