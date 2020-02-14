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

    }
}