<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import { useRoute } from 'vue-router';
    import { format, parseISO } from 'date-fns';
    import axios from 'axios';
    import DeleteEditButtons from '../components/DeleteEditButtons.vue';

    const route = useRoute();

    const applicationId: number = route.params['id'];

    let create_time_formated: string = ref("");

    const application = ref(Object);
    
    // Helper function to format dates
    const formatDate = (mysqlDatetime: string): string => {
        const isoDate = mysqlDatetime.replace(' ', 'T')
        return format(parseISO(isoDate), 'dd/MM/yyyy HH:mm')
    };

    onMounted(async () => {
        try {
            const response = await axios.get('/api/application/'+applicationId);
            application.value = response.data;
            create_time_formated = formatDate(application.value.create_time);
        } catch (error) {
            console.log('Error fetching applications', error)
        }
    })

    
</script>

<template>
    <div class="container m-auto py-10 px-6">
        <div class="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
            <h3 class="text-green-800 text-lg font-bold mb-6">Company</h3>
            <h1 class="text-3xl font-bold mb-4">{{ application.companyName }}</h1>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-md mt-6">
            <h3 class="text-green-800 text-lg font-bold mb-6">Job Ad</h3>
            <p class="mb-4">{{ application.ad }}</p>

            <h3 class="text-green-800 text-lg font-bold mb-2">Date Applied</h3>
            <p class="mb-4">{{ create_time_formated }}</p>
        </div>
    </div>
    <div class="bg-white p-6 rounded-lg shadow-md mt-6">
        <DeleteEditButtons />
    </div>
</template>