<template>
  <v-container fluid class=" d-flex grey lighten-1 flex-column fill-height" >
    <v-list width="100%">
      <v-list-item @click="moveToMCQ">
        <v-list-item-title>Add Multiple Choice Question</v-list-item-title>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item @click="moveToCode">
        <v-list-item-title>Add Coding Task</v-list-item-title>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item @click="moveToWrite">
        <v-list-item-title>Add Writing Task</v-list-item-title>
      </v-list-item>
      <v-divider></v-divider>
    </v-list>
    <v-spacer></v-spacer>
    <v-btn large width="100%" @click="submitExit">Submit & Exit</v-btn>
  </v-container>
</template>

<script>
export default {
    methods: {
        moveToMCQ: function(){
            this.$router.push('/addMCQ');
        },
        moveToCode: function(){
            this.$router.push('/addCodeTask');
        },
        moveToWrite: function(){
            this.$router.push('/addWritingTask');
        },
        submitExit: function(){
            this.$store.commit('setCreateMode', false);
            this.$router.push('/');
        }
    }
}
</script>