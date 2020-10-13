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
    {
      path: "/",
      component: Home,
      meta: {
        wymagajLogowania: true,
        title: "Strona Główna",
      },
    },
    {
      path: "/onas",
      component: About,
      meta: {
        title: "O nas",
      },
    },
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

// router.beforeEach((to, from, next) => {
// if(to.path.startsWith('./konto'))
// if(to.meta.wymagajLogowania{
// next("/login")
// }else {
//   next()
// })
// });

router.afterEach((to) => {
  document.title.to.meta.title;
});

export default router;
