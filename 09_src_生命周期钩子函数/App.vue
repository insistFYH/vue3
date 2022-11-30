<template>
    <button @click="isShow=!isShow">显示隐藏Demo</button>
    <br>
    <Demo v-if="isShow"></Demo>
</template>

<script>
import Demo from "./components/demo.vue";
import { ref } from "vue";
export default {
    name: "App",
    components: { Demo },
    setup() {
        let isShow = ref(true);
        return {
            isShow,
        };
    },
};
</script>

<style>
</style>
