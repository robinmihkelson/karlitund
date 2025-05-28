<template>
  <RouterView></RouterView>
</template>

<script>
import Page1 from './components/Page1.vue';

export default {
  name: 'App',
  components: {
    Page1, 
  },
};
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
