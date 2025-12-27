<script setup lang="ts">
    import Hero from '../components/Hero.vue';
    import HomeCard from '../components/HomeCard.vue';
    import JobListings from '../components/JobListings.vue';
</script>

<template>
    <Hero title="List of Applications" subtitle="Here is the list of Applications"/>
    <HomeCard />
    <JobListings :limit="4"/>
</template>