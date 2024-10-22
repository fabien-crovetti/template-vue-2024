<script setup>

import { useAccountManager } from "@/composable/accountManager";
const {logout} = useAccountManager()



</script>

<template>
    <div>
        <v-menu>
            <template v-slot:activator="{ props }">
            <span v-bind="props" class="cursor-pointer">
                <v-icon icon="mdi-account-circle" color="primary" size="x-large"/>
            </span>

            </template>
            <v-list width="150">
                <v-list-item class="user-menu-container">
                    <router-link to="/profile" class="clean-link">
                        <v-list-item-title class="cursor-pointer mb-2 pa-2" >
                            <span><v-icon icon="mdi-card-account-details-outline" class="mr-2"/>Profile</span>
                        </v-list-item-title>
                    </router-link>

                    <v-divider/>

                    <v-list-item-title class="cursor-pointer mt-6 pa-2" @click="logout()">
                        <span><v-icon icon="mdi-logout" class="mr-2"/>Logout</span>
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </div>
</template>

<style scoped lang="scss">

.user-menu-container{
    .v-list-item-title{
        background-color: transparent;
        transition: background-color 0.3s;
        &:hover{
            background-color: #d3d3d3;
        }
    }
    .v-icon{
        opacity: 0.7;
    }
}


</style>
