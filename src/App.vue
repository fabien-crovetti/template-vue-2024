
<script lang="ts" setup>
import AppContainer from "@/layout/AppContainer.vue";

import {ref} from "vue"

const hasJwt = ref(false)

if(localStorage.getItem("accessToken")){
    hasJwt.value = true
}

</script>

<template>
    <app-container v-if="hasJwt"/>
    <router-view v-else/>
</template>
