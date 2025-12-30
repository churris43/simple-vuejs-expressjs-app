<script setup lang="ts">
    import { useRoute, Router, useRouter } from 'vue-router';
    import axios from 'axios';
    import { useToast } from 'vue-toastification';
    import { RouterLink } from 'vue-router';

    const route = useRoute();
    const router = useRouter();
    const toast = useToast();

    const applicationId: number = route.params['id'];

    const deleteApplication = async () => {    
        try {
            const confirm = window.confirm("Are you sure you want to delete this application?");
            if (confirm) {
                const response = await axios.delete('/api/application/' + applicationId);
                toast.success("Application Deleted");
                router.push("/applications");        
            }            
        } catch (error) {
            toast.error("Unable to delete Application");
        }
    };
</script>

<template>
    <h3 class="text-xl font-bold mb-6">Manage Application</h3>
    <RouterLink
        :to="`/application/edit/${applicationId}`"
        class="bg-green-500 hover:bg-green-600 text-white text-center font-bold py-2 px-4 rounded-full w-fit focus:outline-none focus:shadow-outline mt-4 ">
        Edit Application
    </RouterLink>
    
    <button @click="deleteApplication"
        class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-fit focus:outline-none focus:shadow-outline mt-4 ">
        Delete
    </button>
</template>