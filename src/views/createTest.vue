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
            :rules="emailRules"
            outlined
            placeholder="This will be used to send test related data"
          ></v-text-field>
          <v-subheader>Software requirement</v-subheader>

          <v-combobox
            :items="swlist"
            clearable
            small-chips
            v-model="swreq"
            multiple
            outlined
            filled
          ></v-combobox>
        </v-form>
      </v-card-text>
      <v-card-actions class="pb-5">
        <v-spacer></v-spacer>
        <v-btn @click="save" class="mr-5">Show questions</v-btn>
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
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
    };
  },

  computed: {
    email: {
      get(){
        return this.$store.state.userEmail
      },

      set(newVal){
        this.$store.commit('setUserEmail', newVal);
      }
      
    },

    swreq: {
      get(){
        return this.$store.state.swreq;
      },
      set(newVal){
        this.$store.commit('setSWReq', newVal);
      }
    }
  },

  methods: {
    save: function(){
      return "hi"
    },
    next: function(){
      this.$router.push('/addCodeTask');
    }
  }
};
</script>