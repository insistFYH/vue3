<template>
    <input type="text" v-model="keywords">
    <br>
    <span>{{keywords}}</span>
</template>

<script>
import { ref, customRef } from "vue";
export default {
    name: "Demo",
    setup() {
        function myRef(value, delay) {
            let timer;
            return customRef((track, trigger) => {
                return {
                    get() {
                        console.log(`获取容器中的值${value}`);
                        track();
                        return value;
                    },
                    set(newValue) {
                        console.log(`设置容器中的新值${newValue}`);
                        clearTimeout(timer);
                        timer = setTimeout(() => {
                            value = newValue;
                            trigger();
                        }, delay);
                    },
                };
            });
        }
        //返回一个对象（常用）
        let keywords = myRef("hello", 500);
        return { keywords };
    },
};
</script>

