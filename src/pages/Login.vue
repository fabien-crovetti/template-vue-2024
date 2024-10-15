<script setup lang="ts">

import LoginForm from "@/components/LoginForm.vue";


</script>

<template>

    <div style="height: 100vh" class="login-container">
        <div class="text-center d-flex justify-center" style="height: 100%">
            <div class="align-self-center ">
                <login-form/>
            </div>
        </div>
    </div>


</template>

<style scoped lang="scss">
.login-container {
    background-image: url("@/assets/loginBackground.png");
    background-size: cover;
}
</style>
