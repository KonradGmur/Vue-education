<template>
  <div id="app">
    <h1>Witaj w Vue.js</h1>
    <ul>
      <li><router-link to="/">Strona główna</router-link></li>
      <li><router-link :to="{ name: 'o nas' }">O nas</router-link></li>
      <li><router-link to="/kontakt">Kontakt</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
</style>
