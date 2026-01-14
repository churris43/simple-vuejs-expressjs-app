<script setup lang="ts">
import { reactive } from "vue";
import { useToast } from "vue-toastification";
import { useRouter, useRoute } from "vue-router";
import { onMounted } from "vue";
import { RouterLink } from "vue-router";

import axios from "axios";

const router = useRouter();
const route = useRoute();

const applicationId: number = route.params.id;

const toast = useToast();

const application: Object = Object;

//defaults
const form: Object = reactive({
  companyName: "",
  ad: "",
  create_time: "",
});

onMounted(async () => {
  try {
    const response = await axios.get(`/api/application/${applicationId}`);
    form.companyName = response.data.companyName;
    form.ad = response.data.ad;
    form.create_time = response.data.create_time.substring(0, 16);
  } catch (error) {
    console.log("Error fetching applications", error);
  }
});

const editApplication = async () => {
  const newApplication: Object = {
    companyName: form.companyName,
    ad: form.ad,
    create_time: form.create_time,
  };
  try {
    const response = await axios.put(
      `/api/application/${applicationId}`,
      newApplication
    );
    toast.success("Application succedfuly edited");
    router.push(`/application/${applicationId}`);
  } catch (error) {
    console.error("Error creating the new application", error);
    toast.error("Unable to edit the application");
  }
};
</script>

<template>
  <section class="bg-green-50">
    <div class="container m-auto max-w-4xl py-24">
      <div
        class="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
      >
        <form @submit.prevent="editApplication">
          <h2 class="text-3xl text-center font-semibold mb-6">
            Edit Application
          </h2>

          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2"
              >Company Name</label
            >
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
              >Job Description</label
            >
            <textarea
              id="ad"
              v-model="form.ad"
              name="ad"
              class="border rounded w-full py-2 px-3"
              rows="12"
            ></textarea>
          </div>

          <div class="mb-4">
            <label for="create_time" class="block text-gray-700 font-bold mb-2"
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
            <button
              type="submit"
              class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mb-2"
            >
              Save Changes
            </button>
            <RouterLink
              :to="'/application/' + applicationId"
              class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline block text-center"
            >
              Cancel
            </RouterLink>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
