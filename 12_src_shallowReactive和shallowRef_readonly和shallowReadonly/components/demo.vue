<template>
    <h4>{{person}}</h4>
    <h2>姓名：{{name}}</h2>
    <h2>年龄：{{age}}</h2>
    <h2>薪资：{{job.j1.salary}}</h2>
    <button @click="name+='~'">修改姓名</button>
    <button @click="age++">增长年龄</button>
    <!-- 此时不生效，因为使用了shallowReative，不能对深层数据进行修改 -->
    <button @click="job.j1.salary++">涨薪</button>
    <hr>
    <br>
    <h2>{{x}}</h2>
    <!-- 生成新的对象数据替换 -->
    <button @click="x={y:20}">修改x属性</button>
    <hr>
    <h2>卧室：{{bedroom}}</h2>
    <h2>厨房：{{kitchen}}</h2>
    <h2>电视：{{lobby.TV}}</h2>
    <button @click="kitchen++">增大厨房的占地面积</button>
    <button @click="lobby.TV++">增大电视的占地面积</button>
</template>

<script>
import {
    ref,
    reactive,
    toRef,
    toRefs,
    shallowReactive,
    shallowRef,
    readonly,
    shallowReadonly,
} from "vue";
export default {
    name: "Demo",
    setup() {
        //数据
        // let person = reactive({
        // 对象数据，只能最外层属性变化
        let person = shallowReactive({
            name: "张三",
            age: 18,
            job: {
                j1: {
                    salary: 20,
                },
            },
        });
        // 对象数据，不会修改对象中的属性，而是生成新的对象替换
        let x = shallowRef({
            y: 0,
        });
        let house = reactive({
            bedroom: 80,
            kitchen: 50,
            lobby: {
                TV: 10,
                chair: 20,
            },
        });
        // 设置house为深只读
        // house = readonly(house);
        //设置house为浅只读
        house = shallowReadonly(house);
        return {
            ...toRefs(person),
            x,
            ...toRefs(house),
        };
    },
};
</script>

