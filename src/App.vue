<template>
  <v-app>
    <vHeader />
    <router-view />
    <vFooter></vFooter>
  </v-app>
</template>

<script>
import vSidebar from './components/sidebar.vue';
import vHeader from './components/header.vue'
import vFooter from './components/footer.vue';

export default {
  name: 'App',
  components: {
    vSidebar,
    vHeader,
    vFooter
  }
}
</script>

<style scoped>
*{
    background-color: #111C41;
    scroll-behavior: smooth;
}</style>