export default {
    resetStore(state){
        state.testId = null;
        state.userEmail = null;
        state.questions = [],
        state.swreq = []
    },

    setSWReq(state, payload){
        state.swreq = payload;
    },

    setUserEmail(state, payload){
        state.userEmail = payload;
    },

    addQuestion(state, payload){
        state.questions.push(payload);
    },

    activateSnackbar(state, payload){
        state.snackbar = true;
        state.snackbarText = payload;
    },

    deactivateSnackbar(state){
        state.snackbar = false;
        state.snackbarText = "";
    },

    changeLogLoader(state, payload){
        state.logLoader = payload;
    }
}