<script setup lang="ts">
import Hero from "../components/Hero.vue";
import HomeCards from "../components/HomeCards.vue";
import ApplicationListings from "../components/ApplicationListings.vue";
</script>

<template>
  <Hero
    title="Manage your applications"
    subtitle="This is a sample of a CRUD application to manage job applications built for learning purposess.

"
  />
  <HomeCards />
  <ApplicationListings :limit="3" />
</template>
