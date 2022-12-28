import {createRouter, createWebHistory} from "vue-router";
import Services from "./components/Services.vue";
import Contacts from "./components/Contacts.vue";
import Portfolio from "./components/Portfolio.vue";
import Reviews from "./components/Reviews.vue";
import HomePage from "./pages/HomePage.vue";


const routes = [
    {
        path: "/",
        name: "home",
        component: HomePage,
    },
    {
        path: "/",
        name: "services",
        component: Services,
    },
    {
        path: "/portfolio",
        name: "portfolio",
        component: Portfolio,
    },
    {
        path: "/contacts",
        name: "contacts",
        component: Contacts,
    },
    {
        path: "/reviews",
        name: "reviews",
        component: Reviews,
    },
];
    export default createRouter({
    history: createWebHistory(),
    routes,
});