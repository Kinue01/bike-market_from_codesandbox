import Home from "@/components/Home.vue";
import Login from "@/components/Login.vue";
import Register from "../components/Register.vue";
import Catalog from "../components/Catalog.vue";
import { createRouter, createWebHistory } from "vue-router";

const Profile = () => import("@/components/Profile.vue");

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
  },
  {
    path: "/catalog",
    component: Catalog,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
