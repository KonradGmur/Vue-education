import VueRouter from "vue-router";

const Home = { template: "<div>Strona główna</div>" };
const About = { template: "<div>O nas</div>" };
const Contact = { template: "<div>Kontakt</div>" };
const UserGeneral = {
  template: "<div>informacje o użytkowniku <router-view/></div>",
};
const User = {
  props: ["userId"],
  template: "<div>Id użytkownika: {{userId}}</div>",
};

const router = new router({
  mode: "history",
  routes: [
    { path: "/", component: Home },
    { path: "/onas", component: About },
    { path: "/kontakt", alias: "/constact", component: Contact },
    {
      path: "/uzytkownicy",
      component: UserGeneral,
      children: [
        {
          path: "profil/:userId",
          component: User,
          props: true,
        },
      ],
    },
    { path: "/uzytkownik/:userId", component: User, props: true },
  ],
});

export default router;
