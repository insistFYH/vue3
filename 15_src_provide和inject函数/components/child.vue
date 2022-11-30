<template>
    <div class="child">
        <h1>Child组件</h1>
        <Grandson />
    </div>
</template>

<script>
import Grandson from "./grandson.vue";
export default {
    name: "Child",
    components: { Grandson },
};
</script>

<style>
.child {
    background-color: rgb(92, 206, 92);
    padding: 10px;
}
</style>