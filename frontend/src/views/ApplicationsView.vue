<script setup lang="ts">
    import Hero from '../components/Hero.vue';
    import HomeCard from '../components/HomeCard.vue';
    import ApplicationListings from '../components/ApplicationListings.vue';
</script>

<template>
    <Hero title="List of Applications" subtitle="Here is the list of Applications"/>
    <HomeCard />
    <ApplicationListings :limit="4"/>
</template>