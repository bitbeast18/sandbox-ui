<template>
<v-container>
    <v-card>
        <v-card-title> Add Writing Task </v-card-title>
        <v-card-text>
            <v-form>
                <v-subheader>
                    Question Statement
                </v-subheader>
                <v-textarea v-model="questionStatement" outlined filled></v-textarea>
                <v-subheader>
                    Word Limit
                </v-subheader>
                <v-text-field v-model="wordLimit" outlined filled> </v-text-field>
            </v-form>
        </v-card-text>

        <v-card-actions class="pb-5">
            <v-spacer></v-spacer>
            <v-btn @click="addQuestion" class="mr-5"> add question </v-btn>
            <v-btn @click="next" class="mr-5"> next section </v-btn>
        </v-card-actions>
    </v-card>
</v-container>
</template>

<script>
export default {

      beforeRouteLeave(to, from, next){
        if(this.questionStatement !== "" || this.wordLimit !== ""){
            alert('You have unsaved edits! Press "Add question" to save');
            next(false);
        } else {
            next();
        }
    },
    
    data(){
        return {
            questionStatement: "",
            wordLimit: ""
        }
    },

    methods: {
        addQuestion: function(){
            this.$store.commit('addQuestion', {
                type: 'Writing Task',
                questionStatement: this.questionStatement,
                wordLimit: this.wordLimit
            })
        },

        next: function(){
            this.$router.push('/addMCQ');
        }

    }
}
</script>