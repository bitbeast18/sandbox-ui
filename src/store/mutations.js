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
        console.log(payload);
        state.questions.push(payload);
    }
}