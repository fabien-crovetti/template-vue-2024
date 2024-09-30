<script setup lang="ts">

import {onBeforeMount} from "vue";
import {useAppStore} from "@/store/app";
import api from "@/api/backend";
import NavigationMenu from "@/layout/NavigationMenu.vue";

import AppLoader from "@/layout/AppLoader.vue";
const store = useAppStore()


function initApp(){
    let app : Application = {
        initialisationComplete: false,
        loggedIn: false,
    }

    api.sample.getAppData().then((response)=>{
        if(response.status === 200){
            app.initialisationComplete = true
            store.setApp(app)
        }
    })

}


onBeforeMount(()=>{
    initApp()
})

</script>

<template>
    <app-loader
        v-if="!store.app.initialisationComplete"
    />
    <v-app v-else>
        <navigation-menu class="mb-12"/>
        <v-main class="px-8">
            <router-view/>
        </v-main>
    </v-app>
</template>

<style scoped>

</style>
