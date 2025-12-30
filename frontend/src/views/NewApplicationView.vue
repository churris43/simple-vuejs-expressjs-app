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
  <section class="bg-green-50">
    <div class="container m-auto max-w-2xl py-24">
      <div class="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
        <form @submit.prevent="handleSubmit">
          <h2 class="text-3xl text-center font-semibold mb-6">Add Application</h2>

          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2">Company Name</label>
            <input
              type="text"
              v-model="form.companyName"
              id="companyName"
              name="companyName" 
              class="border rounded w-full py-2 px-3 mb-2"
              required
            />
          </div>
          <div class="mb-4">
            <label for="ad" class="block text-gray-700 font-bold mb-2"
              >Job Ad</label
            >
            <textarea
              id="ad"
              v-model="form.ad"
              name="ad"
              class="border rounded w-full py-2 px-3"
              rows="4"
            ></textarea>
          </div>

          <div class="mb-4">
            <label
              for="create_time"
              class="block text-gray-700 font-bold mb-2"
              >Submission Date</label
            >
            <input
              type="datetime-local"
              v-model="form.create_time"
              id="create_time"
              name="create_time"
              class="border rounded w-full py-2 px-3"
            />
          </div>

          <div>
            <button type="submit" 
                    class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline">
                    Add Application
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>