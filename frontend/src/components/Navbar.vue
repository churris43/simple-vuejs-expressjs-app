<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router';

const isActiveLink = (routePath: string): boolean =>   {
    const route = useRoute();
    return route.path === routePath;
}
</script>

<template>
    <ul>
        <li><RouterLink
            :class="[isActiveLink('/') ? 'bg-amber-100' : '']"
            to="/">Home</RouterLink>
        </li>
        <li><RouterLink
            :class="[isActiveLink('/applications') ? 'bg-amber-100' : '']"
             to="/applications">Applications</RouterLink>
        </li>
        <li><RouterLink
            :class="[isActiveLink('/new') ? 'bg-amber-100' : '']"
            to="/new">Add Application</RouterLink>
        </li>
    </ul>
</template>