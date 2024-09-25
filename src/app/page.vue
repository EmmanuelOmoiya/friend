<script setup>
import NavComp from '../components/layouts/nav.vue';
import FooterComp from '../components/layouts/footer.vue';
import Hero from '../components/home/hero.vue';
</script>

<template>
  <div class="relative">
    <NavComp />
    <router-view />
  </div>
</template>