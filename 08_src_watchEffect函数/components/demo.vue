<template>
    <span>总数：{{sum}}</span>
    <br>
    <span>信息：{{msg}}</span>
    <br>
    <ul>
        <li>名字：{{person.name}}</li>
        <li>职业：{{person.job.type}}</li>
        <li>工资：{{person.job.salary}}</li>
    </ul>
    <button @click="sum++">加数</button>
    <button @click="msg+='!'">修改信息</button>
    <button @click="person.job.salary++">加工资</button>
    <button @click="person.name+='@'">修改名字</button>
</template>

<script>
import { ref, reactive, watchEffect } from "vue";
export default {
    name: "Demo",
    setup() {
        let sum = ref(99);
        let msg = ref("hello");
        const person = reactive({
            name: "jack",
            age: 20,
            job: {
                type: "police",
                salary: 10000,
            },
        });
        watchEffect(() => {
            let sumB = sum.value;
            let salaryB = person.job.salary;
            console.log("watchEffect配置的回调执行了");
        });
        return { sum, msg, person };
    },
};
</script>

<style>
</style>