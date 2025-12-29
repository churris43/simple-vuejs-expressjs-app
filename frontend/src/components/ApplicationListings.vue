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
    <ul>
        <ApplicationListing
            v-for="application in applications.slice(0, limit || applications.length)"
            :key="application.id"
            :application="application">
        </ApplicationListing>
    </ul>
</template>