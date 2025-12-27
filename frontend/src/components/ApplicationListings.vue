<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import ApplicationListing from './ApplicationListing.vue';
    import { defineProps } from 'vue';

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
            const response = await fetch('http://localhost/api/application');
            applications.value = await response.json();
        } catch (error) {
            console.log('Error fetching applications')
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