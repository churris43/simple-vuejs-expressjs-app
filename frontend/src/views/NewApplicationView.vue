<script setup lang="ts">
    import { reactive } from 'vue';
    import { format } from 'date-fns';
    import { useToast } from 'vue-toastification';
    import { useRouter } from 'vue-router';

    import axios from 'axios';
    
    const router = useRouter();

    const toast = useToast();

    const showSuccessToast = () => {
        toast.success("Application added succesfully")
    };

    const showErrorToast = () => {
        toast.error(
            "Something went wrong",
                {timeout: 2000}
        );
    };

    const formattedCurrentDateTime: string = format(new Date(), "yyyy-MM-dd'T'HH:mm:ss");

    //defaults
    const form: Object = reactive(
        {
            companyName: '',
            ad: '',
            create_time: '',
        }
    )

    const handleSubmit = async () => {
        const newApplication:Object = {
            companyName: form.companyName,
            ad: form.ad,
            create_time: form.create_time,
        }
        try {
            const response = await axios.post('api/application', newApplication);
            showSuccessToast();
            router.push('/applications');
        } catch (error) {
            console.error("Error creating the new application", error)
            showErrorToast();
        }
    };
</script>

<template>
    <form @submit.prevent="handleSubmit">
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
        Submit
    </button>
    </form>
</template>