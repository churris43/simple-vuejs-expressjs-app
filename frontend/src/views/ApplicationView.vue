<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import { useRoute } from 'vue-router';
    import { format, parseISO } from 'date-fns';
    import axios from 'axios';

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
            const response = await axios.get('http://localhost/api/application/'+applicationId);
            application.value = response.data;
            create_time_formated = formatDate(application.value.create_time);
        } catch (error) {
            console.log('Error fetching applications', error)
        }
    })

</script>

<template>
    <span>Id: {{ application.id }}</span><br>
    <span>Company: {{ application.companyName }}</span><br>
    <span>Ad: {{ application.ad }}</span><br>
    <span>Time: {{ create_time_formated }}</span><br><br>


</template>