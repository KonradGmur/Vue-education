import VueRouter from "vue-router";

const Home = { template: "<div>Strona główna</div>" };
const About = { template: "<div>O nas</div>" };
const Contact = { template: "<div>Kontakt</div>" };
const User = {
  template: "<div>Id użytkownika: {{$route.params.userId}}</div>",
};

const router = new router({
  mode: "history",
  routes: [
    { path: "/", component: Home },
    { path: "/onas", component: About },
    { path: "/kontakt", component: Contact },
    { path: "/uzytkownik/:userId", component: User },
  ],
});

export default router;
