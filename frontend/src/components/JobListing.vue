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
    }

    const showFullName = ref(false);

    const truncatedName = computed<string>(() => {
        let name: string = props.application.name;
        if (!showFullName.value) {
            name = name.substring(0, 10) + '...';
        }
        return name;
    });
</script>

<template>
    <span>Id: {{ application.id }}</span><br>
    <span>Name: {{ truncatedName }}</span><br>
    <span>Time: {{ formatDate(application.create_time) }}</span><br><br>
</template>