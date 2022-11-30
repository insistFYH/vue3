<template>
    <button @click="isShow=!isShow">显示隐藏Demo</button>
    <br>
    <Demo v-if="isShow"></Demo>
    <Test></Test>
</template>

<script>
import Demo from "./components/demo.vue";
import Test from "./components/test.vue";
import { ref } from "vue";
export default {
    name: "App",
    components: { Demo, Test },
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
