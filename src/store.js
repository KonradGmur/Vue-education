import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    licznik: 0,
  },
  mutations: {
    dodaj(state) {
      state.licznik++;
    },
    odejmij(state) {
      state.licznik--;
    },
  },
  actions: {
    zwiekszLicznik({ commit }) {
      commit("dodaj");
    },
    zmniejszLicznik({ commit }) {
      commit("odejmij");
    },
  },
  getters: {
    pobierzLicznik: (state) => {
      return state.licznik;
    },
  },
});
