<script setup lang="ts">

import TableSample from "@/components/TableSample.vue";
import ChartSample from "@/components/ChartSample.vue";

</script>

<template>
    <v-row>
        <v-col :cols="6">
            <table-sample/>
        </v-col>
        <v-col :cols="6">
            <chart-sample/>
        </v-col>
    </v-row>
</template>

<style scoped lang="scss">

</style>
