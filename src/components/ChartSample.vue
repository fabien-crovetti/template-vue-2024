<script setup lang="ts">
import {onBeforeMount, reactive, ref} from 'vue'
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, BarElement, CategoryScale, LinearScale } from 'chart.js'
import api from "@/api/backend";

ChartJS.register(Title, Tooltip, BarElement, CategoryScale, LinearScale)
const isLoaded = ref(false);
const chartParam = reactive({
    chartData: {
        labels: [],
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
    api.sample.getBooks().then((response)=>{
        if(response.status === 200){
            let labels = []
            let count = []
            response.data.forEach((book)=>{
                if(!count[book.releaseDate.slice(0,4)]){
                    count[book.releaseDate.slice(0,4)] = 1
                    labels.push(book.releaseDate.slice(0,4))
                }else{
                    count[book.releaseDate.slice(0,4)]++
                }
            })
            labels.sort()

            chartParam.chartData.datasets[0].data = labels.map((date)=>{
                return count[date]
            })
            chartParam.chartData.labels = labels
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
