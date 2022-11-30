<template>
    <h4>{{person}}</h4>
    <h2>姓名：{{name}}</h2>
    <h2>年龄：{{age}}</h2>
    <h2>薪资：{{job.j1.salary}}</h2>
    <button @click="name+='~'">修改姓名</button>
    <button @click="age++">增长年龄</button>
    <button @click="job.j1.salary++">涨薪</button>
</template>

<script>
import { ref, reactive, toRef, toRefs } from "vue";
export default {
    name: "Demo",
    setup() {
        //数据
        let person = reactive({
            name: "张三",
            age: 18,
            job: {
                j1: {
                    salary: 20,
                },
            },
        });

        const x = toRefs(person);
        console.log("******", x);

        return {
            // person,
            // 适用于少量的对象属性对外使用
            // name: toRef(person, "name"),
            // age: toRef(person, "age"),
            // salary: toRef(person.job.j1, "salary"),
            // 适用于较多的对象属性对外使用
            ...toRefs(person),
        };
    },
};
</script>

