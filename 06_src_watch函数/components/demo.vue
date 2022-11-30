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
import { ref, reactive, watch } from "vue";
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
        // 对单个ref定义属性进行监视
        // watch(
        //     sum,
        //     (newValue, oldValue) => {
        //         console.log("sum属性进行了修改", newValue, oldValue);
        //     },
        //     { immediate: true }
        // );
        // 对多个ref定义属性进行监视
        // watch(
        //     [sum, msg],
        //     (newValue, oldValue) => {
        //         console.log("sum属性或msg属性进行了修改", newValue, oldValue);
        //     },
        //     { immediate: true }
        // );
        // 对reactive定义的数据的全部属性进行监视
        // watch(
        //     person,
        //     (newValue, oldValue) => {
        //         console.log("person中属性进行了修改", newValue, oldValue);
        //     },
        //     { immediate: true, deep: false }
        // );
        //对reactive定义的数据的单个属性进行监视;
        watch(
            () => person.name,
            (newValue, oldValue) => {
                console.log("person的job属性进行了修改", newValue, oldValue);
            },
            { immediate: true, deep: false }
        );
        // 对reactive定义的数据的某些属性进行监视;
        // watch(
        //     [() => person.job, () => person.name],
        //     (newValue, oldValue) => {
        //         console.log(
        //             "person的job或name属性进行了修改",
        //             newValue,
        //             oldValue
        //         );
        //     },
        //     { immediate: true, deep: false }
        // );
        return { sum, msg, person };
    },
};
</script>

<style>
</style>