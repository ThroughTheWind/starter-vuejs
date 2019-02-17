import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/pages/home/Home.vue';
import Random from '@/components/pages/random/Random.vue';
import ChildRandom from '@/components/pages/random/ChildRandom.vue';
import SignUpPage from '@/components/pages/authentication/SignUpPage.vue';
import SignInPage from '@/components/pages/authentication/SignInPage.vue';
import LostPasswordPage from '@/components/pages/authentication/LostPasswordPage.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/random',
      name: 'random',
      component: Random,
      children: [
        { path: '', component: ChildRandom },
        { path: '*', component: ChildRandom },
        // ...other sub routes
      ],
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: SignUpPage,
    },
    {
      path: '/sign-in',
      name: 'sign-in',
      component: SignInPage,
    },
    {
      path: '/lost-password',
      name: 'lost-password',
      component: LostPasswordPage,
    },
  ],
});
