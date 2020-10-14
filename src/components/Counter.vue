<template>
  <div>
    <h1>Wartość licznika to: {{ licznik }}</h1>
    <button @click="zwiekszLicznik">Dodaj 1</button>
    <button @click="zmniejszLicznik">Odejmij 1</button>
  </div>
</template>

<script>
import store from "../store";

export default {
  computed: {
    licznik: () => store.getters.pobierzLicznik,
  },
  methods: {
    dodaj: () => store.dispatch("zwiekszLicznik"),
    odejmij: () => store.dispatch("zmniejszLicznik"),
  },
};
</script>