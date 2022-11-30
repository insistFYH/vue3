<template>
    <div class="son">
        <h3>我是Son组件（孙），{{car.name}}--{{car.price}}</h3>
        <Dialog />
    </div>
</template>

<script>
import { inject } from "vue";
import Dialog from "./dialog.vue";
export default {
    name: "Son",
    components: { Dialog },
    setup() {
        let car = inject("car");
        return { car };
    },
};
</script>

<style>
.son {
    background-color: orange;
    padding: 10px;
}
</style>