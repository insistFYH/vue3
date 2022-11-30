<template>
    <h1>App组件</h1>
</template>

<script>
import {
    reactive,
    ref,
    readonly,
    isRef,
    isReactive,
    isReadonly,
    isProxy,
} from "vue";
export default {
    name: "App",
    setup() {
        let sum = ref(99);
        let car = reactive({
            brand: "奔驰",
            price: 50,
        });
        car = readonly(car);
        console.log(isRef(sum));
        console.log(isReactive(car));
        console.log(isReadonly(car));
        console.log(isProxy(sum));
        console.log(isProxy(car));
        return { sum, car };
    },
};
</script>

<style>
.app {
    background-color: pink;
    padding: 10px;
}
</style>
