<script setup lang="ts">
import {onBeforeMount, reactive, ref} from 'vue'
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, BarElement, CategoryScale, LinearScale } from 'chart.js'
import api from "@/api/backend";

ChartJS.register(Title, Tooltip, BarElement, CategoryScale, LinearScale)
const isLoaded = ref(false);
const chartParam = reactive({
    chartData: {
        labels: [ '1982', '1987', '1991', '1994', '1995', '1996', '1997', '1999', '2000', '2001', '2003', '2004', '2012' ],
        datasets: [
            {
                data: [],
                backgroundColor:'#915a5a'
            },
        ]
    },
    chartOptions: {
        responsive: true
    }
})


const templateImg = ref(new URL(`@/assets/template01.png`, import.meta.url).href);


onBeforeMount(()=>{
    api.sample.getBooksRepartition().then((response)=>{
        if(response.status === 200){
            chartParam.chartData.datasets[0].data = response.data.data
            chartParam.chartData.labels = response.data.labels
            isLoaded.value = true
        }
    })
})


</script>


<template>
    <v-card>
        <v-card-title>{{ $t('components.chartSample.title') }}</v-card-title>
        <v-card-subtitle>{{ $t('components.chartSample.subtitle') }}</v-card-subtitle>
        <v-card-text>
            <v-skeleton-loader type="card" v-if="!isLoaded"></v-skeleton-loader>
            <div v-else>
                <Bar
                    id="my-chart-id"
                    :options="chartParam.chartOptions"
                    :data="chartParam.chartData"
                />

                <v-img
                    aspect-ratio="1/1"
                    cover
                    :alt="$t('components.chartSample.title')"
                    :src="templateImg"
                    class="mx-auto mt-8"
                ></v-img>
            </div>

        </v-card-text>
    </v-card>
</template>
