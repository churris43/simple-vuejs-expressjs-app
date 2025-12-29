<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router';

const isActiveLink = (routePath: [string]): boolean =>   {
    const route = useRoute();
    // This highlights when the route is /application/:id
    // This can be improved, maybe by using regex
    if (route.path.startsWith("/application/")) {
        if (routePath.find(path => path.startsWith("/application/")))
            return true;
    }

    return routePath.includes(route.path);
}
</script>

<template>
    <ul>
        <li><RouterLink
            :class="[isActiveLink(['/']) ? 'bg-amber-100' : '']"
            to="/">Home</RouterLink>
        </li>
        <li><RouterLink
            :class="[isActiveLink(['/applications', '/application/*'])
            ? 'bg-amber-100' : '']"
             to="/applications">Applications</RouterLink>
        </li>
        <li><RouterLink
            :class="[isActiveLink(['/new']) ? 'bg-amber-100' : '']"
            to="/new">Add Application</RouterLink>
        </li>
    </ul>
</template>