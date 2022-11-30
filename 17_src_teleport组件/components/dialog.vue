<template>
    <div>
        <button @click="isShow=!isShow">弹出对话框</button>
        <teleport to='body'>
            <div v-if="isShow" class="mask">
                <div class="dialog">
                    <h1>对话框</h1>
                    <h4>内容一</h4>
                    <h4>内容二</h4>
                    <h4>内容三</h4>
                    <button @click="isShow=!isShow">关闭</button>
                </div>
            </div>
        </teleport>
    </div>
</template>

<script>
import { ref } from "vue";
export default {
    name: "Dialog",
    setup() {
        let isShow = ref(false);
        return { isShow };
    },
};
</script>

<style scoped>
.mask {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(185, 179, 179, 0.5);
}
.dialog {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    height: 250px;
    padding: 10px;
    text-align: center;
    background-color: skyblue;
}
</style>