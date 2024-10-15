<script lang="ts" setup>
import {ref} from "vue";
import LocaleSelector from "@/layout/LocaleSelector.vue";
import UserMenu from "@/layout/UserMenu.vue";

const drawer = ref(false);


</script>


<template>

    <v-app-bar :elevation="2">

        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-app-bar-title>{{ $t('navigation.appTitle') }}</v-app-bar-title>

        <locale-selector class="mr-2"/>

        <template v-slot:append>
            <user-menu class="mr-2"/>
        </template>
    </v-app-bar>

    <v-navigation-drawer
        v-model="drawer"
        :location="$vuetify.display.mobile ? 'bottom' : undefined"
        temporary
    >
        <v-list>
            <v-list-item :title="$t('navigation.navigationTitle')" :subtitle="$t('navigation.navigationSubtitle')"></v-list-item>

            <v-divider class="my-4"/>

            <router-link class="clean-link" to="/">
                <v-list-item link>
                    <v-icon icon="mdi-home-circle" class="mr-2" color="grey-darken-1"/>
                    <span>{{ $t('navigation.pageLink.index') }}</span>
                </v-list-item>
            </router-link>

            <router-link class="clean-link" to="/profile">
                <v-list-item link>
                    <v-icon icon="mdi-card-account-details-outline" class="mr-2" color="grey-darken-1"/>
                    <span>{{ $t('navigation.pageLink.profile') }}</span>
                </v-list-item>
            </router-link>
        </v-list>
    </v-navigation-drawer>
</template>



<style scoped lang="scss">


</style>
