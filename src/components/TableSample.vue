<script setup lang="ts">

import {ref, onBeforeMount} from "vue";
import api from "@/api/backend";

const waitingDataLoading = ref(true)
const tableItems = ref([])





onBeforeMount(()=>{
    api.sample.getBooks().then((response)=>{
        if(response.status === 200){
            tableItems.value = response.data
            waitingDataLoading.value = false
        }
    })
})

</script>


<template>
    <v-card>
        <v-card-title>{{ $t('components.tableSample.title') }}</v-card-title>
        <v-card-subtitle>{{ $t('components.tableSample.subtitle') }}</v-card-subtitle>
        <v-card-text>
            <v-data-table
                :headers="[
                    { title: $t('components.tableSample.tableHeader.title'), value: 'title', sortable: true },
                    { title: $t('components.tableSample.tableHeader.author'), value: 'author', sortable: true  },
                    { title: $t('components.tableSample.tableHeader.date'), value: 'date', align: 'end', sortable: true  }
                ]"
                :items="tableItems"
                :loading="waitingDataLoading"
                :sort-by="[{ key: 'date', order: 'asc' }]"
            >
                <template v-slot:loading>
                    <v-skeleton-loader type="table-row@10"></v-skeleton-loader>
                </template>
            </v-data-table>
        </v-card-text>
    </v-card>
</template>
