<script setup lang="ts">
import { DefineProps } from 'vue';
defineProps({
    title: {
        type: String,
        default: "Missing Title"
    },
    subtitle: {
        type: String,
        default: "Missing Subtitle"
    },
});
</script>

<template>
    <h1>{{ title }}</h1>
    <h2>{{ subtitle }}</h2>
</template>