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
    <RouterLink :to="`/application/edit/${applicationId}`" v-slot="{ navigate }">
    <button  @click="navigate" class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded shadow">
        Edit
    </button>
    </RouterLink>
    
    <button @click="deleteApplication"
        class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded shadow">
        Delete
    </button>
</template>