<script setup>
import TopBar from './components/TopNavbar.vue'
import Footer from './components/FooterBottom.vue'
</script>

<template>
  <div>
    <TopBar id="homebar" />
    <router-view id="view" />
    <Footer id="footer" />
  </div>
</template>

<style>
#homebar {
  height: 5vh;
}

#view {
  min-height: 95vh;
}
</style>
