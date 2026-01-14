<script setup lang="ts">
import { RouterLink, useRoute } from "vue-router";
import logo from "../assets/img/logo.png";

const isActiveLink = (routePath: [string]): boolean => {
  const route = useRoute();
  // This highlights when the route is /application/:id
  // This can be improved, maybe by using regex
  if (route.path.startsWith("/application/")) {
    if (routePath.find((path) => path.startsWith("/application/"))) return true;
  }

  return routePath.includes(route.path);
};
</script>

<template>
  <nav class="bg-green-700 border-b border-green-500">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between">
        <div
          class="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
        >
          <!-- Logo -->
          <RouterLink class="flex flex-shrink-0 items-center mr-4" to="/">
            <img class="h-10 w-auto" :src="logo" alt="Vue Job Applications" />
            <span class="hidden md:block text-white text-2xl font-bold ml-2"
              >Job Applications Vue.js</span
            >
          </RouterLink>
          <div class="md:ml-auto">
            <div class="flex space-x-2">
              <RouterLink
                to="/"
                :class="[
                  isActiveLink(['/'])
                    ? 'bg-green-900'
                    : 'hover:bg-gray-900 hover:text-white',
                  'text-white',
                  'px-3',
                  'py-2',
                  'rounded-md',
                ]"
                >Home</RouterLink
              >
              <RouterLink
                to="/applications"
                :class="[
                  isActiveLink(['/applications', '/application/*'])
                    ? 'bg-green-900'
                    : 'hover:bg-gray-900 hover:text-white',
                  'text-white',
                  'px-3',
                  'py-2',
                  'rounded-md',
                ]"
                >Applications</RouterLink
              >
              <RouterLink
                to="/new"
                :class="[
                  isActiveLink(['/new'])
                    ? 'bg-green-900'
                    : 'hover:bg-gray-900 hover:text-white',
                  'text-white',
                  'px-3',
                  'py-2',
                  'rounded-md',
                ]"
                >Add Application</RouterLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
