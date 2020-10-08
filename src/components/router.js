import VueRouter from "vue-router";

const Home = { template: "<div>Strona główna</div>" };
const About = { template: "<div>O nas</div>" };
const Contact = { template: "<div>Kontakt</div>" };

const router = new router({
  routes: [
    { path: "/", component: Home },
    { path: "/onas", component: About },
    { path: "/kontakt", component: Contact },
  ],
});

export default router;
