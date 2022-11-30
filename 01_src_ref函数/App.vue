<template>
    <h1>基本信息</h1>
    <ul>
        <li>{{name}}</li>
        <li>{{age}}</li>
        <li>{{job.type}}</li>
        <li>{{job.salary}}</li>
    </ul>
    <button @click="changeInfo">修改基本信息</button>
</template>

<script>
import { ref } from "vue";
export default {
    name: "App",
    setup() {
        let name = ref("jack");
        let age = ref(20);
        let job = ref({
            type: "software engineer",
            salary: "1w",
        });
        function changeInfo() {
            name.value = "mike";
            job.value.salary = "2w";
            console.log(name.value);
            console.log(job.value);
        }
        return { name, age, job, changeInfo };
    },
};
</script>

<style>
</style>
