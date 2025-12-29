<script setup lang="ts">
    import { DefineProps, ref, computed } from 'vue';
    import { format, parseISO } from 'date-fns';

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
    <span>Id: {{ application.id }}</span><br>
    <span>Company: {{ application.companyName }}</span><br>
    <span>Ad: {{ truncatedAd }}</span><br>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="toggleFullAd">
        {{ showFullAd ? 'less' : 'More' }}
    </button>
    <span>Time: {{ formatDate(application.create_time) }}</span><br><br>
</template>