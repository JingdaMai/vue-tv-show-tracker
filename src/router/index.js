import Vue from 'vue';
import Router from 'vue-router';

import ShowDetails from "../components/ShowDetails";
import Subscriptions from '../components/Subscriptions';

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: Subscriptions},
    { path: '/show/:id', component: ShowDetails}
  ]
});
