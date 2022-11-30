<template>
    <button @click="test">测试接收父组件的传递</button>
</template>

<script>
export default {
    name: "Demo",
    props: ["name"],
    emit: ["hello"],
    setup(props, content) {
        function test() {
            console.log(props);
            console.log(content);
            console.log(content.attrs);
            console.log(content.emit);
            console.log(content.slots);
            content.emit("hello", "just run");
        }
        return {
            test,
        };
    },
};
</script>

<style>
</style>