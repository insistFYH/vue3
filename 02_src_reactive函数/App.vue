<template>
    <h1>基本信息</h1>
    <ul>
        <li>{{person.name}}</li>
        <li>{{person.age}}</li>
        <li>{{person.job.type}}</li>
        <li>{{person.job.salary}}</li>
        <li>{{person.hobby[0]}}</li>
    </ul>
    <button @click="changeInfo">修改基本信息</button>
</template>

<script>
import { reactive } from "vue";
export default {
    name: "App",
    setup() {
        const person = reactive({
            name: "jack",
            age: 20,
            job: {
                type: "software engineer",
                salary: "1w",
            },
            hobby: ["篮球", "台球"],
        });
        function changeInfo() {
            person.name = "mike";
            person.job.salary = "2w";
            person.hobby[0] = "编程";
            console.log(person.name);
            console.log(person.job);
            console.log(person);
        }
        return { person, changeInfo };
    },
};
</script>

<style>
</style>
