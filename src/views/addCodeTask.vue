<template>
<v-container>
    <v-card>
        <v-card-title> Add Coding Task </v-card-title>
        <v-card-text>
            <v-form>
                <v-subheader>
                    Problem Statement
                </v-subheader>
                <v-textarea v-model="problemStatement" outlined filled></v-textarea>
                
                <v-subheader>
                    Constraints
                </v-subheader>
                <v-textarea v-model="constraints" outlined filled></v-textarea>
                
                <v-subheader>
                    Sample Input
                </v-subheader>
                <v-textarea v-model="sample_in" outlined filled></v-textarea>
                
                <v-subheader>
                    Sample Output
                </v-subheader>
                <v-textarea v-model="sample_out" outlined filled></v-textarea>
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
    
    data(){
        return {
            problemStatement: "",
            constraints: "",
            sample_in: "",
            sample_out: "",
        }
    },

    methods: {
        addQuestion: function(){
            this.$store.commit('addQuestion', {
                type: 'Coding Task',
                problemStatement: this.problemStatement,
                constraints: this.constraints,
                sample_in: this.sample_in,
                sample_out: this.sample_out
            })
        },

        next: function(){
            this.$router.push('/addWritingTask');
        }

    }
}
</script>