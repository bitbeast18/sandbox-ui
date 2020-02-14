<template>
  <v-container>
    <v-card>
      <v-card-title>Add Coding Task</v-card-title>
      <v-card-text>
        <v-form>
          <v-subheader>Question Statement</v-subheader>
          <v-textarea v-model="questionStatement" outlined filled></v-textarea>

          <v-subheader>Constraints</v-subheader>
          <v-textarea v-model="constraints" outlined filled></v-textarea>

          <v-subheader>Sample Input</v-subheader>
          <v-textarea v-model="sample_in" outlined filled></v-textarea>

          <v-subheader>Sample Output</v-subheader>
          <v-textarea v-model="sample_out" outlined filled></v-textarea>
        </v-form>
      </v-card-text>

      <v-card-actions class="pb-5">
        <v-spacer></v-spacer>
        <v-btn @click="addQuestion" class="mr-5">add question</v-btn>
        <v-btn @click="next" class="mr-5">next section</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  beforeRouteLeave(to, from, next) {
    if (
      this.questionStatement !== "" ||
      this.constraints !== "" ||
      this.sample_in !== "" ||
      this.sample_out !== ""
    ) {
      alert('You have unsaved edits! Press "Add question" to save');
      next(false);
    } else {
      next();
    }
  },

  data() {
    return {
      questionStatement: "",
      constraints: "",
      sample_in: "",
      sample_out: ""
    };
  },

  methods: {
    addQuestion: function() {
      if (this.questionStatement === "") {
        alert("Cannot add empty question! Please add a question statement.");
        return;
      }

      this.$store.commit("addQuestion", {
        type: "Coding Task",
        questionStatement: this.questionStatement,
        constraints: this.constraints,
        sample_in: this.sample_in,
        sample_out: this.sample_out
      });

      this.$store.commit("activateSnackbar", "Question added successfully!");
      this.questionStatement = "";
      this.constraints = "";
      this.sample_in = "";
      this.sample_out = "";
    },

    next: function() {
      this.$router.push("/addWritingTask");
    }
  }
};
</script>