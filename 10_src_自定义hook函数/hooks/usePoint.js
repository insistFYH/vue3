import { reactive, onMounted, onBeforeUnmount } from 'vue'
export default function() {
    let point = reactive({
        x: 0,
        y: 0,
    });

    function setPoint(e) {
        point.x = e.pageX;
        point.y = e.pageY;
        console.log(e.pageX, e.pageY);
    }
    onMounted(() => {
        window.addEventListener("click", setPoint);
    });
    onBeforeUnmount(() => {
        window.removeEventListener("click", setPoint);
    });
    return point
}