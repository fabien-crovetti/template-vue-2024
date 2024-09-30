<script lang="ts" setup>

const emit = defineEmits(['loadingCompleted'])

function hideLoader(){
    emit('loadingCompleted')
}

defineExpose({ hideLoader });

</script>


<template>
    <div style="height: 100vh">
        <div class="text-center d-flex justify-center" style="height: 100%">
            <div class="align-self-center ">
                <v-progress-circular
                    :size="70"
                    :width="7"
                    color="primary"
                    indeterminate
                />
            </div>
        </div>
    </div>
</template>



<style scoped lang="scss">


</style>
