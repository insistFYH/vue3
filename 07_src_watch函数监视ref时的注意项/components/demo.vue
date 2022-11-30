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
        const person = ref({
            name: "jack",
            age: 20,
            job: {
                type: "police",
                salary: 10000,
            },
        });
        watch(sum, (newValue, oldValue) => {
            console.log("sum属性进行了修改", newValue, oldValue);
        });
        //此时相当于对reactive定义的响应性数据进行监视
        // 法一：
        // watch(person.value, (newValue, oldValue) => {
        //     console.log("person的job属性进行了修改", newValue, oldValue);
        // });
        // 法二：
        watch(
            person,
            (newValue, oldValue) => {
                //此时相当于对reactive定义的响应性数据进行监视
                console.log("person的job属性进行了修改", newValue, oldValue);
            },
            {
                deep: true,
            }
        );
        return { sum, msg, person };
    },
};
</script>

<style>
</style>