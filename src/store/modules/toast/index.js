export default {   
            
    namespaced: true,

    state: {
        toasts: []
        // 배열로 받아주게 바뀌었음.
        // 하나씩 넣으면 컴퓨티드로 인해 다 바뀌기 때문에 주석처리해준다.
        // showToast: false,
        // toastMessage: '',
        // toastAlertType: '',
        // timeout : null
    },
    mutations: { //값 변경 시 이용 //(){}만 사용해도 : furnction과 같은 효과

        // 역시나 배열로 받기에 이전코드 제거
        // UPDATE_TOAST_STATUS (state, payload){
        //     state.showToast = payload;
        // },
        // UPDATE_TOAST_MESSAGE(state, payload){
        //     state.toastMessage = payload;
        // },
        // UPDATE_TOAST_ALERT_TYPE (state, payload){
        //     state.toastAlertType = payload;
        // },
        // UPDATE_TOAST_TIMEOUT(state, payload){
        //     state.timeout = payload;
        // },

        // toast 추가 해준다.
        ADD_TOAST(state, payload) {
            state.toasts.push(payload);
        },
        //toast 삭제 해준다.
        REMOVE_TOAST (state) {
            state.toasts.shift();
        }
    },
    actions: { //mutation 접근 시 이용
        triggerToast({ commit }, payload){
            // commit('UPDATE_TOAST_STATUS', true);
            // commit('UPDATE_TOAST_MESSAGE', message);
            // commit('UPDATE_TOAST_ALERT_TYPE', type);
            commit('ADD_TOAST', { 
                id: Date.now(),
                message: payload.message,
                type: payload.type 
            });
            setTimeout(()=>{
                // commit('UPDATE_TOAST_STATUS', false);
                // commit('UPDATE_TOAST_MESSAGE', '');
                // commit('UPDATE_TOAST_ALERT_TYPE', '');
                commit("REMOVE_TOAST");
            }, 5000);
        }
    },
    getters: {
        toastMessageAdd (state) {
            return state.toastMessage + "!!!"    
        }
    }
}