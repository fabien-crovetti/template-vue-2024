<script setup lang="ts">

import { ref } from "vue"
import api from "@/api/backend";

const loginError = ref(false)
const showPlainPassword = ref(false)
const isFormValid = ref(false)
const login = ref('')
const password = ref('')


function setLoginError(){
    loginError.value = true
    login.value = ''
    password.value = ''
}

function checkCredential(){
    loginError.value = false
    api.sample.loginCheck({username:login.value, password:password.value})
    .then(res=>{
        if(res.data.refresh_token){
            localStorage.setItem("accessToken", res.data.token)
            localStorage.setItem("refreshToken", res.data.refresh_token)
            window.location.href = '/'
        }
        else{
            setLoginError()
        }
    }).catch(()=>{
        setLoginError()
    })
}

const loginRules = [(value: string) => {
    const regex = /^.*@([\w-]+\.)+[\w-]{2,4}$/g;
    if(value && regex.exec(value) !== null){
       return true
    }
    else {
        return 'Error'
    }
}]
const passwordRules = [(value: string) => {

    if(value){
       return true
    }
    else {
       return 'Error'
    }
}]

</script>


<template>
    <v-card min-width="400">
        <v-card-text class="text-left">
            <h3 class="text-h3 text-center mt-6 mb-8">{{ $t('components.loginForm.title') }}</h3>

            <div class="text-subtitle-1 text-medium-emphasis">{{ $t('components.loginForm.account') }}</div>
            <v-form v-model="isFormValid">

                <v-text-field
                    v-model="login"
                    :rules="loginRules"
                    density="compact"
                    placeholder="Email address"
                    prepend-inner-icon="mdi-email-outline"
                    variant="outlined"
                >
                    <template v-slot:message>
                        {{ $t('components.loginForm.accountCheckError') }}
                    </template>
                </v-text-field>

                <div class="text-subtitle-1 text-medium-emphasis">{{ $t('components.loginForm.password') }}</div>

                <v-text-field
                    v-model="password"
                    :rules="passwordRules"
                    :append-inner-icon="showPlainPassword ? 'mdi-eye-off' : 'mdi-eye'"
                    :type="showPlainPassword ? 'text' : 'password'"
                    density="compact"
                    placeholder="Enter your password"
                    prepend-inner-icon="mdi-lock-outline"
                    variant="outlined"
                    @click:append-inner="showPlainPassword = !showPlainPassword"
                    @keydown.enter="checkCredential"
                >
                    <template v-slot:message>
                        {{ $t('components.loginForm.passwordCheckError') }}
                    </template>
                </v-text-field>

                <v-btn
                    class="mt-4"
                    color="primary"
                    size="large"
                    variant="tonal"
                    block
                    @click="checkCredential"
                    :disabled="!isFormValid"
                >
                    {{ $t('components.loginForm.btnLogin') }}
                </v-btn>

                <p class="mt-4 text-center text-red-darken-1" v-if="loginError">
                    <v-icon icon="mdi-alert-circle-outline" class="mr-2"/>
                    {{ $t('components.loginForm.loginCheckError') }}
                </p>
            </v-form>
        </v-card-text>
    </v-card>
</template>
