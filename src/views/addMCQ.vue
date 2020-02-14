<template>
<v-container>
    <v-card>
        <v-card-title> Add Multiple Choice Question</v-card-title>
        <v-card-text>
            <v-form>
                <v-subheader>
                    Question Statement
                </v-subheader>
                <v-textarea v-model="questionStatement" outlined filled></v-textarea>

                <v-subheader>
                    List Options
                </v-subheader>
                <v-text-field v-model="op1" outlined filled placeholder="Option 1"></v-text-field>
                <v-text-field v-model="op2" outlined filled placeholder="Option 2"></v-text-field>
                <v-text-field v-model="op3" outlined filled placeholder="Option 3"></v-text-field>
                <v-text-field v-model="op4" outlined filled placeholder="Option 4"></v-text-field>
                
            </v-form>
        </v-card-text>

        <v-card-actions class="pb-5">
            <v-spacer></v-spacer>
            <v-btn @click="addQuestion" class="mr-5"> add question </v-btn>
            <v-btn @click="next" class="mr-5"> dashboard </v-btn>
        </v-card-actions>
    </v-card>
</v-container>
</template>

<script>
export default {

      beforeRouteLeave(to, from, next){
        if(this.questionStatement !== "" || this.op1 !== "" || this.op2 !== "" || this.op3 !== "" || this.op4 !== ""){
            alert('You have unsaved edits! Press "Add question" to save');
            next(false);
        } else {
            next();
        }
    },
    
    data(){
        return {
            questionStatement: "",
            op1: "",
            op2: "",
            op3: "",
            op4: "",
        }
    },
    methods: {
        addQuestion: function(){
            this.$store.commit('addQuestion', {
                type: 'Multiple Choice Question',
                questionStatement: this.questionStatement,
                op1: this.op1,
                op2: this.op2,
                op3: this.op3,
                op4: this.op4,
            })
        },

        next: function(){
            this.$router.push('/createTest');
        }
    }

}
</script>