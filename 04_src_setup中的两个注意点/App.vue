<template>
    <Demo name='jack' age=20 @hello='test'>
        <template v-slot:first>
            <span>123</span>
        </template>
        <template v-slot:second>
            <span>456</span>
        </template>
    </Demo>
</template>

<script>
import Demo from "./components/demo.vue";
export default {
    name: "App",
    components: { Demo },
    setup() {
        function test(value) {
            console.log(`自定义事件hello被触发，收到参数${value}`);
        }
        return { test };
    },
};
</script>

<style>
</style>
