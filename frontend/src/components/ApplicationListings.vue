<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import ApplicationListing from './ApplicationListing.vue';
    import { defineProps } from 'vue';
    import axios from 'axios';

    defineProps({
        limit: Number
    });

    interface Application {
     id: number,
     companyName: string,
     ad: string,
     create_time: string
    }

    const applications = ref<Application[]>([])
    onMounted(async () => {
        try {
            const response = await axios.get('/api/application');
            applications.value = response.data;
        } catch (error) {
            console.log('Error fetching applications', error)
        }
    })
</script>

<template>
  <section class="bg-blue-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
        Browse Applications
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ApplicationListing
            v-for="application in applications.slice(0, limit || applications.length)"
            :key="application.id"
            :application="application"
        />
        </div>
    </div>
  </section>
</template>