import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const Resume = ()=> import('@/components/Resume.vue');
const Login  = ()=> import('@/components/Login.vue')
const router = new VueRouter({
  routes: [
    { path: "/login", component: Login },
    { path: "/resume", component: Resume }
  ]
});

export default router;
