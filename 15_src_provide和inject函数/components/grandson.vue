<template>
    <div class="grandson">
        <h1>Grandson组件,汽车品牌：{{car.brand}},价格：{{car.price}}w</h1>
    </div>
</template>

<script>
import { inject } from "vue";
export default {
    name: "Grandson",
    setup() {
        let car = inject("car");
        return { car };
    },
};
</script>

<style>
.grandson {
    background-color: skyblue;
}
</style>