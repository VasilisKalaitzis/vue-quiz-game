<template>
  <div id="app">
    <Layout/>
  </div>
</template>

<script>
import Layout from "./components/Layout.vue";

export default {
  name: "app",
  components: {
    Layout
  }
};
</script>

<style>
#app {
  font: 400 50px/1 "Great Vibes", Helvetica, sans-serif;
  color: black;
  text-shadow: 4px 4px 3px rgba(0, 0, 0, 0.1);
  text-align: center;
}
body {
  margin: 0;
}
/* hide all scrollbars */
::-webkit-scrollbar {
  display: none;
}
@media screen and (max-width: 600px) {
  #app {
    font-size: 20px;
  }
}
</style>
