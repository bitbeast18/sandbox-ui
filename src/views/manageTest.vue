<template>
  <v-container class="pa-2" fluid>
    <v-row justify="center" align="start" class="px-6 my-2 mx-4 white elevation-6" no-gutters>
      <v-col class="d-flex justify-center align-center" cols="12">
        <v-col cols="3">
          <v-text-field
            v-model="testId"
            outlined
            rounded
            dense
            filled
            hide-details
            placeholder="Test ID"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
            v-model="password"
            type="password"
            outlined
            rounded
            dense
            filled
            hide-details
            placeholder="Password"
          ></v-text-field>
        </v-col>
        <v-btn small :loading="loader" @click="load">load</v-btn>
      </v-col>
    </v-row>

    <v-row no-gutters class="mt-3" justify="center">
      <v-col cols="5">
        <v-subheader class="pl-2 title">Test Takers</v-subheader>
      </v-col>

      <v-col class="ml-6" cols="5">
        <v-subheader class="pl-2 title">Realtime Logs</v-subheader>
      </v-col>
    </v-row>

    <v-row no-gutters justify="center">
      <v-col cols="5">
        <v-card height="66vh" class="list">
          <v-card-text>
            <v-alert
              elevation="4"
              v-for="(item, idx) in testtakers"
              :key="idx"
              dense
              color="grey lighten-2"
              class="pa-0 px-4"
            >
              <v-row>
                <v-col class="grow font-weight-bold">{{item}}</v-col>
                <v-col class="shrink">
                  <v-btn small>block</v-btn>
                </v-col>
              </v-row>
            </v-alert>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col class="ml-6" cols="5">
        <v-card height="66vh" class="list">
          <v-card-text>
            <v-alert
              elevation="4"
              v-for="(item, idx) in logs"
              :key="idx"
              dense
              color="grey lighten-2"
              class="pa-0 px-4"
              dismissible
            >
              <v-row>
                <v-col class="shrink font-weight-bold">{{item.id}}</v-col>
                <v-col class="grow ml-4">{{item.msg}}</v-col>
              </v-row>
            </v-alert>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      testId: "",
      password: ""
    };
  },

  computed: {
    testtakers() {
      return this.$store.state.testtakers;
    },
    logs() {
      return this.$store.state.logs;
    },
    loader(){
      return this.$store.state.logLoader;
    }
  },

  methods: {
    load: function() {
      this.$store.commit("changeLogLoader", true);
      this.$store.dispatch("startLogging", {
        testId: this.testId,
        password: this.password
      });
    }
  }
};
</script>

<style>
.list {
  overflow-y: scroll;
}
</style>