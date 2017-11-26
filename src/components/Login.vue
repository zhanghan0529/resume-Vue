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
            <input type="text"  value="" placeholder="账号">
            <input type="password"  value="" placeholder="密码">
            <a class="linksign" @click='signup'>没有账号,赶紧注册~</a>
            <a class="loginbtn">登陆</a>
        </div>
        <div class="signup" v-else>
            <input type="text"  value="" placeholder="账号">
            <input type="password"  value="" placeholder="密码">
            <input type="password"  value="" placeholder="确认密码">
            <a class="loginbtn" @click = 'login'>注册</a>
        </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  methods: {
      signup(){
          this.$store.commit('signup');
      },
      login(){
          this.$store.commit('login')
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
      }
      .words {
        font-size: 1.2rem;
        margin-top: 16px;
        color: #bbb;
      }
    }

    .loginandsign {
      width: 50%;
      display: flex;
      align-items: center;
      text-align: center;
      animation: fade-in 0.4s;
      .signup,
      .logined {
        /* height: 100%; */
        display: flex;
        flex-direction: column;
        justify-content: center;
        animation: fade-in 1s;
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
      .linksign:hover,.loginbtn:hover {
        opacity: 0.8;
      }
    }
  }
}
</style>
