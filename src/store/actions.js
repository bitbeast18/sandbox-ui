import {db} from '@/firebase/init';
import router from '@/router/index';

export default {
    submit({state}){

        state.loader = true;

        if(state.userEmail === null || state.userEmail === undefined){
            alert('Email address is mandatory! Check Dashboard.');  
            state.loader = false;
            return;
        }

        if(state.questions.length < 1){
            alert("You haven't added any problem!");
            state.loader = false;
            return;
        }

        db.collection('testBunch').add({
            email: state.userEmail,
            questions: state.questions,
            swreq: state.swreq
        }).then((docref) => {
            state.testId = docref.id;
            state.loader = false;
            router.push('/landing');
        }).catch(err => {
            alert(err.message);
        })

    },

    startLogging({state, commit}, payload){

        commit('changeLogLoader', true);

        db.collection('testBunch').doc(payload.testId).get().then((ref) => {

            if(ref.data().password === payload.password){

                db.collection('activeTestTakers').doc(payload.testId).get()
                .then((newref) => {
                    state.testtakers = Object.keys(newref.data());
                    commit('changeLogLoader', false);
                }).catch(err => {
                    console.log(err);
                    commit('changeLogLoader', false);
                })

            } else {
                commit('changeLogLoader', false);
                commit('activateSnackbar', "Wrong password! Try again");
            }

        }).catch(err => {
            console.log(err.message);
            commit('changeLogLoader', false);
        })

    }
}