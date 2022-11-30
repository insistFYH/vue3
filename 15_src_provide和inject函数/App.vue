<template>
    <div class="app">
        <h1>App组件,汽车品牌：{{car.brand}},价格：{{car.price}}w</h1>
        <Child></Child>
    </div>
</template>

<script>
import Child from "./components/child.vue";
import { reactive, provide } from "vue";
export default {
    name: "App",
    components: { Child },
    setup() {
        let car = reactive({
            brand: "奔驰",
            price: 50,
        });
        provide("car", car);
        return { car };
    },
};
</script>

<style>
.app {
    background-color: pink;
    padding: 10px;
}
</style>
