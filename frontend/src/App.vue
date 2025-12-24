<script setup  lang="ts">
    import { ref, onMounted } from 'vue';
    const applications = ref([]);

    onMounted(async () => {
        try {
            const response = await fetch('http://localhost/api/test');
            const data = await response.json();
            //applications.value = data.map({application} => application.name);
            //applications.value = data.map((application) => application.name);
            applications.value = data.map((application: { name: string }) => application.name);


        } catch (error) {
            console.log('Error fetching applicatiokns')
        }
    })
</script>

<template>
    <h1> Vue Applications</h1>
    <h3>Applications</h3>
    <ul>
        <li v-for="application in applications" :key="application">
        {{ application }}
        </li>
    </ul>
</template>