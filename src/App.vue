<template>
  <v-app class="grey lighten-2" app>
    <AppBar></AppBar>

    <v-navigation-drawer v-if="createMode" width="25%" app>
      <NavBar></NavBar>
    </v-navigation-drawer>

    <v-content class="grey lighten-2" app>
      <v-snackbar v-model="snackbar" top :timeout="5000">
        {{notification}}
        <v-btn @click="close">close</v-btn>
      </v-snackbar>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import AppBar from "@/components/AppBar.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  components: {
    AppBar,
    NavBar
  },

  computed: {
    createMode: function() {
      if (
        this.$route.name === "Home" ||
        this.$route.name === "ManageTest" ||
        this.$route.name === "Landing"
      ) {
        return false;
      } else {
        return true;
      }
    },

    snackbar: {
      get() {
        return this.$store.state.snackbar;
      },
      set(){
        this.$store.commit('deactivateSnackbar');
      }
    },

    notification: function() {
      return this.$store.state.snackbarText;
    }
  },

  methods: {
    close: function() {
      this.$store.commit("deactivateSnackbar");
    }
  }
};
</script>