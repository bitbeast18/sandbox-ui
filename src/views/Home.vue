<template>
  <v-container class="grey lighten-2 fill-height">
    <v-row justify="space-around">
      <v-card elevation="24" width="40%">
        <v-card-title>Create Test</v-card-title>
        <v-card-text>
          This utility allows you to create a Test which consists of
          Coding Tasks, Writing Tasks and Multiple Choice Questions.
          A unique Test ID will be generated upon successful creation
          of the test. You can provide the Test Takers with this ID and
          they can login to Sandbox.
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="enterCreateMode" class="ma-5" large width="200px">Create Test</v-btn>
        </v-card-actions>
      </v-card>

      <v-card elevation="24" width="40%">
        <v-card-title>Manage Test</v-card-title>
        <v-card-text>
          This utility allows you to manage and monitor your test.
          This provides an interface for real time monitoring of test takers
          and the corresponding test data upon completion of test. You will need a
          Test ID to proceed. If you dont have one then check Create Test.
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="enterManageMode" large class="ma-5" width="200px">Manage Test</v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  methods: {
    enterCreateMode: function() {
      this.$router.push("/createTest");
    },
    enterManageMode: function() {
      this.$router.push("/manageTest");
    }
  }
};
</script>