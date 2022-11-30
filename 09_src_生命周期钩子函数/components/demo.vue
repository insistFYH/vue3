<template>
    <span>总数：{{sum}}</span>
    <button @click="sum++">加数</button>
</template>

<script>
import {
    ref,
    onBeforeMount,
    onMounted,
    onUpdated,
    onBeforeUpdate,
    onBeforeUnmount,
    onUnmounted,
} from "vue";
export default {
    name: "Demo",
    setup() {
        console.log("------beforeCeate、create");
        let sum = ref(99);
        onBeforeMount(() => {
            console.log("------onBeforeMount");
        });
        onMounted(() => {
            console.log("------onMounted");
        });
        onBeforeUpdate(() => {
            console.log("------onBeforeUpdate");
        });
        onUpdated(() => {
            console.log("------onUpdated");
        });
        onBeforeUnmount(() => {
            console.log("------ onBeforeUnMount");
        });
        onUnmounted(() => {
            console.log("------onUnmounted");
        });
        return { sum };
    },
};
</script>

<style>
</style>