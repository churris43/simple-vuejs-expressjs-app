<script setup lang="ts">
    import { reactive } from 'vue';
    import { useToast } from 'vue-toastification';
    import { useRouter, useRoute } from 'vue-router';
    import { onMounted } from 'vue';

    import axios from 'axios';
    
    const router = useRouter();
    const route = useRoute();

    const applicationId: number = route.params.id;

    const toast = useToast();

    const application: Object = Object;

    //defaults
    const form: Object = reactive(
        {
            companyName: '',
            ad: '',
            create_time: '',
        }
    )

    onMounted(async () => {
        try {
            const response = await axios.get(`/api/application/${applicationId}`);
            form.companyName = response.data.companyName;
            form.ad = response.data.ad;
            form.create_time = response.data.create_time.substring(0,16);
        } catch (error) {
            console.log('Error fetching applications', error)
        }
    })

    const editApplication = async () => {
        const newApplication:Object = {
            companyName: form.companyName,
            ad: form.ad,
            create_time: form.create_time,
        }
        try {
            const response = await axios.put(`/api/application/${applicationId}`, newApplication);
            toast.success("Application succedfuly edited");
            router.push(`/application/${applicationId}`);
        } catch (error) {
            console.error("Error creating the new application", error)
            toast.error("Unable to edit the application");
        }
    };
</script>

<template>
    <form @submit.prevent="editApplication">
        <label for="companyName" class=" font-semibold mb-2">Company Name:</label>
        <input 
            v-model="form.companyName"
            type="text" id="companyName" name="companyName" 
            class="border rounded w-fit py-2 px-3"
            required />

                <label for="ad" class="block font-semibold mb-2">Ad:</label>
        <textarea
            v-model="form.ad"
            id="ad" name="ad" 
            class="w-fit px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 min-h-[100px] resize-y"
            required>
        </textarea>

        <label for="create_time" class="block font-semibold mb-2">Create Time:</label>
        <input 
            v-model="form.create_time"
            type="datetime-local" id="create_time" name="create_time" 
            class="w-fit px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4" />
        
        <button type="submit" 
            class="w-fit bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200">
            Save
        </button>
    </form>
</template>