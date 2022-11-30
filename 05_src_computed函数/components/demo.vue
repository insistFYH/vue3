<template>
    <h1>姓名案例</h1>
    姓：<input type="text" v-model="name.firstName">
    <br>
    名：<input type="text" v-model="name.lastName">
    <br>
    <span>姓名：{{fullName}}</span>
    <br>
    <input type="text" v-model="fullName">

</template>

<script>
import { reactive } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
export default {
    name: "Demo",
    setup() {
        const name = reactive({
            firstName: "李",
            lastName: "明",
        });
        let fullName = computed({
            get() {
                return name.firstName + "-" + name.lastName;
            },
            set(value) {
                const arr = value.split("-");
                name.firstName = arr[0];
                name.lastName = arr[1];
            },
        });
        return { name, fullName };
    },
};
</script>

<style>
</style>