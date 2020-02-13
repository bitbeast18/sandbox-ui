export default {
    resetStore(state){
        state.testId = null;
        state.testAuthor = null;
        state.questions = []
    },

    setTestDetails(state, payload){
        state.userEmail = payload.email;
        state.swreq = payload.swreq;
    },

    addQuestion(state, payload){
        state.questions.push(payload);
        console.log(payload);
    }
}