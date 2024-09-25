<script setup>
import NavComp from '../components/layouts/nav.vue';
import FooterComp from '../components/layouts/footer.vue';
import Hero from '../components/home/hero.vue';

// export default {
//   name: 'Friend',
//   metaInfo: {
//     title: 'Friend',
//     meta: [
//       {
//         name: 'description',
//         content: 'Introducing Friend. not imaginary.'
//       },
//       {
//         name: 'og:title',
//         content: 'Friend.'
//       },
//       {
//         name: 'og:description',
//         content: 'Introducing Friend. not imaginary.'
//       },
//       {
//         name: 'og:type',
//         content: 'website.'
//       },
//     ],
//     link: [
//       {
//         rel: 'canonical', href: 'https://friend.com'
//       }
//     ]
//   }
// }
</script>

<template>
  <div class="relative">
    <NavComp />
    <router-view />
  </div>
</template>