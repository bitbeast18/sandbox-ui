<template>
  <v-container>
    <v-card>
      <v-card-title>Dashboard</v-card-title>
      <v-card-text>
        <v-form>
          <v-subheader>Email address</v-subheader>
          <v-text-field
            v-model="email"
            filled
            outlined
            placeholder="This will be used to send test related data"
          ></v-text-field>
          <v-subheader>Software requirement</v-subheader>

          <v-combobox
            :items="swlist"
            clearable
            small-chips
            v-model="swrequired"
            multiple
            outlined
            filled
          ></v-combobox>
        </v-form>
      </v-card-text>
      <v-card-actions class="pb-5">
        <v-spacer></v-spacer>
        <v-btn @click="save" class="mr-5">Save</v-btn>
        <v-btn @click="next" class="mr-5">next section</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      swlist: [
        "python",
        "cpp",
        "java",
        "c",
        "tensorflow",
        "pytorch",
        "pandas",
        "sklearn"
      ],
      swrequired: [],
      email: ""
    };
  },

  methods: {
    save: function() {
      this.$store.commit("setTestDetails", {
        email: this.email,
        swreq: this.swrequired
      });
    },
    next: function(){
      this.$router.push('/addCodeTask');
    }
  }
};
</script>