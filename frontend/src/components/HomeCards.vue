<script setup lang="ts">
import { RouterLink } from "vue-router";
import HomeCard from "./HomeCard.vue";
</script>

<template>
  <section class="py-4"></section>
  <div class="container-xl lg:container m-auto">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
      <HomeCard>
        <h2 class="text-2xl font-bold">For Developers</h2>
        <p class="mt-2 mb-4">Browse our Vue jobs and start your career today</p>
        <RouterLink
          to="/application'"
          class="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
        >
          Browse Applications
        </RouterLink>
      </HomeCard>
      <HomeCard bg="bg-green-100">
        <h2 class="text-2xl font-bold">For Employers</h2>
        <p className="mt-2 mb-4">Add an Application</p>
        <RouterLink
          to="/new"
          class="inline-block bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-600"
        >
          Add Application
        </RouterLink>
      </HomeCard>
    </div>
  </div>
</template>
