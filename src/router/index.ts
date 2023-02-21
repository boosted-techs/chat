import { createRouter, createWebHistory } from "vue-router"
import loginComponent from "../components/loginComponent.vue"
import registerComponent from "../components/registerComponent.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: registerComponent,
    },
    {
      path : "/register.html",
      name : 'register',
      component: registerComponent
    }
  ],
});

export default router;
