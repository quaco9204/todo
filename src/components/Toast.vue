<template>
    <div class="toast-box">

        <!-- for문을 사용하였기에 transtion은 -group으로 여러개 적용해야 한다. -->
        <transition-group name="slide">
            <div 
                v-for="toast in toasts"
                :key="toast.id"
                class="alert"
                :class="`alert-${toast.type}`"
                role="alert"
            >
                {{ toast.message }}
            </div>
        </transition-group>

    </div>


</template>

<script>
    import { useToast } from '@/composables/toast'

    export default {
        // props:{
        //     message: {
        //         type : String,
        //         required: true
        //     },
        //     type: {
        //         type: String,
        //         default: 'success'
        //     }
        // }
        setup() {
            const { toasts } = useToast();
            return {
                toasts
            }
        }
    }
</script>

<style>
    .toast-box {
        position: fixed;
        right: 10px;
        top: 10px;
    }
</style>

<style scoped>
    .slide-enter-active,
    .slide-leave-active {
        transition: opacity 0.5s ease, transform 0.5s ease;
    }
    .slide-enter-from, 
    .slide-leave-to {
        opacity: 0;
        transform: translateY(-30px);
    }
    .slide-enter-to,
    .slide-leave-from {
        opacity: 1;
        transform: translateY(0);
    }
</style>
