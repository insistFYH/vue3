<template>
    <h1>点击鼠标的x坐标：{{point.x}},y坐标：{{point.y}}</h1>
</template>

<script>
import usePoint from "../hooks/usePoint";
export default {
    name: "Test",
    setup() {
        let point = usePoint();
        return { point };
    },
};
</script>

<style>
</style>