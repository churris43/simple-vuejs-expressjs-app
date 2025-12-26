<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import { format, parseISO } from 'date-fns';

    interface Application {
     id: number
     name: string
     create_time: string
    }

    const applications = ref<Application[]>([])
    // Helper function to format dates
    const formatDate = (mysqlDatetime: string): string => {
        const isoDate = mysqlDatetime.replace(' ', 'T')
        return format(parseISO(isoDate), 'dd/MM/yyyy HH:mm')
    }
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
        <li v-for="application in applications" :key="application.id">
            <span>Id: {{ application.id }}</span><br>
            <span>Name: {{ application.name }}</span><br>
            <span>Time: {{ formatDate(application.create_time) }}</span>
        </li>
    </ul>
</template>