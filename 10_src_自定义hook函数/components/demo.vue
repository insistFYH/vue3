<template>
    <h2>点击鼠标的x坐标：{{point.x}},y坐标：{{point.y}}</h2>
</template>

<script>
import usePoint from "../hooks/usePoint";
export default {
    name: "Demo",
    setup() {
        let point = usePoint();
        return { point };
    },
};
</script>

<style>
</style>