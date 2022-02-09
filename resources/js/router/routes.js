const routes = [
    {
        path: "/",
        component: () => import("../pages/home.vue"),
        name: "home",
    },
    {
        path: "/about",
        component: () => import("../pages/about.vue"),
        name: "about",
    },
];
export default routes;
