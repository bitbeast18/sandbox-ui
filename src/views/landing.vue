<template>
  <v-container>
    <v-card>
      <v-card-title>Test Summary</v-card-title>
      <v-card-subtitle>Test was successfully created</v-card-subtitle>

      <v-divider></v-divider>

      <v-row justify="space-around">
        <v-col cols="3">
          <v-subheader class="pl-0">Test ID</v-subheader>
          <p class="font-weight-bold">{{testId}}</p>
        </v-col>

        <v-col cols="3">
          <v-subheader class="pl-0">Created By</v-subheader>
          <p class="font-weight-bold">{{testAuthor}}</p>
        </v-col>
        <v-col cols="3">
          <v-subheader class="pl-0">Questions count</v-subheader>
          <p class="font-weight-bold">{{questionCount}}</p>
        </v-col>
      </v-row>
      <v-divider></v-divider>

      <v-card-text>
        <v-subheader>Questions</v-subheader>

        <v-row v-for="(question, idx) in questions" :key="idx">
          <v-col cols="12">
            <v-card class="grey lighten-3">
              <v-card-title>Question {{idx + 1}}</v-card-title>
              <v-card-subtitle>{{question.type}}</v-card-subtitle>
              <v-card-text>{{question.questionStatement}}</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions class="pb-5">
        <v-spacer></v-spacer>
        <v-btn @click="close" class="mr-5">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>

export default {

  beforeRouteLeave(to, from, next){
    if(confirm("Are you sure you want to exit? Make sure you've noted the Test ID")){
      this.$store.commit('resetStore');
      next();
    } else {
      next(false);
    }
  },

  computed: {
    questions() {
      return this.$store.state.questions;
    },
    testId(){
      return this.$store.state.testId;
    },
    testAuthor() {
      return this.$store.state.userEmail;
    },
    questionCount() {
      return this.$store.state.questions.length;
    }
  },

  methods: {
    close: function() {
      this.$router.push("/");
      this.$store.commit("resetStore");
    }
  }
};
</script>