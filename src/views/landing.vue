<template>
  <v-container>
    <v-card>
      <v-card-title>Test Summary</v-card-title>
      <v-card-subtitle>Test was successfully created</v-card-subtitle>

      <v-divider></v-divider>

      <v-row justify="space-around">
        <v-col cols="3">
          <p class>Test ID</p>
          <p>{{testId}}</p>
        </v-col>

        <v-col cols="3">
          <p>Created By :</p>
          <p>{{testAuthor}}</p>
        </v-col>
        <v-col cols="3">
          <p>Problems count :</p>
          <p>{{problemCount}}</p>
        </v-col>
      </v-row>
      <v-divider></v-divider>

      <v-card-text>
        <v-subheader>Problems</v-subheader>

        <v-row v-for="(problem, idx) in problems" :key="idx">
          <v-col cols="!2">
            <v-card class="grey lighten-3">
              <v-card-title>Problem {{idx + 1}}</v-card-title>
              <v-card-subtitle>{{problem.type}}</v-card-subtitle>
              <v-card-text>{{problem.statement}}</v-card-text>
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
  computed: {
    problems() {
      return this.$store.state.problems;
    },
    testId() {
      return this.$store.state.testId;
    },
    testAuthor() {
      return this.$store.state.testAuthor;
    },
    problemCount() {
      return this.$store.state.problems.length;
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