import { computed } from 'vue';
import { useStore } from 'vuex';

export const useToast = () => {

    const store = useStore();
    const toasts = computed(() => store.state.toast.toasts);
    
    // vuex에서는 state 접근시 computed를 통해서 가져와야 한다.
    // Toast 관련
    // let showToast = computed(()=>store.state.toast.showToast);
    // // let toastMessage = computed(()=>store.state.toastMessage);
    // let toastMessage = computed(()=>store.getters['toast/toastMessageAdd']);
    // let toastAlertType = computed(()=>store.state.toast.toastAlertType);
    
    const triggerToast = (message, type="success") => {
        store.dispatch('toast/triggerToast', {message, type});
    }

    return {
        // showToast,
        // toastMessage,
        // toastAlertType,
        toasts,
        triggerToast
    }
}   

