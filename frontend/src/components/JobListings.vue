<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import JobListing from './JobListing.vue';
    import { defineProps } from 'vue';

    defineProps({
        limit: Number
    });

    interface Application {
     id: number
     name: string
     create_time: string
    }

    const applications = ref<Application[]>([])
    onMounted(async () => {
        try {
            const response = await fetch('http://localhost/api/test');
            applications.value = await response.json();
        } catch (error) {
            console.log('Error fetching applicatiokns')
        }
    })
</script>

<template>
    <ul>
        <JobListing
            v-for="application in applications.slice(0, limit || applications.length)"
            :key="application.id"
            :application="application">
        </JobListing>
    </ul>
</template>