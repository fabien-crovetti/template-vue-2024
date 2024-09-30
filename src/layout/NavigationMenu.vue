<script lang="ts" setup>
import LocaleSelector from "@/layout/LocaleSelector.vue";

</script>


<template>
    <v-card>
        <v-card-text>
            <v-row>
                <v-col :cols="10">
                    <h5 class="text-h5">{{ $t('navigation.appTitle') }}</h5>
                </v-col>
                <v-col :cols="2" class="text-right">
                    <locale-selector/>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>



<style scoped lang="scss">


</style>
