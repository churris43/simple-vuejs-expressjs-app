<script setup lang="ts">
    import { DefineProps, ref, computed } from 'vue';
    import { format, parseISO } from 'date-fns';
    import { RouterLink } from 'vue-router';

    const props = defineProps({
        application: Object,
    });

    // Helper function to format dates
    const formatDate = (mysqlDatetime: string): string => {
        const isoDate = mysqlDatetime.replace(' ', 'T')
        return format(parseISO(isoDate), 'dd/MM/yyyy HH:mm')
    };

    const showFullAd = ref(false);

    const toggleFullAd = (): void => {
        showFullAd.value = !showFullAd.value;
    };

    const truncatedAd = computed<string>(() => {
        let ad: string = props.application.ad;
        if (!showFullAd.value) {
            ad = ad.substring(0, 10) + '...';
        }
        return ad;
    });
</script>

<template>
    <div class="bg-white rounded-xl shadow-md relative">
        <div class="p-4">
        <div class="mb-5">
            <div>
            {{ application.companyName }}
            </div>
        </div>
        <div class="mb-5">
            <div>
            {{ truncatedAd }}
            </div>
            <button
            @click="toggleFullAd"
            class="text-green-500 hover:text-green-600 mb-5"
            >
            {{ showFullAd ? 'Less' : 'More' }}
            </button>
        </div>

        <div class="mb-5">
            <div>
            {{ formatDate(application.create_time) }}
            </div>
        </div>
        
        <div class="border border-gray-100 mb-5"></div>

        <div class="flex flex-col lg:flex-row justify-between mb-4">
            <RouterLink
            :to="'/application/'+application.id"
            class="h-[36px] bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-center text-sm"
            >
            Read More
            </RouterLink>
        </div>
    </div>
  </div>
</template>