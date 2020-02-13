<template>
  <div class="d-flex grey lighten-4 flex-column fill-height">
      <v-list nav>
      <v-list-item-group v-model="item">
        <v-list-item @click="moveToDash">
          <v-list-item-icon>
            <v-icon> {{icons.mdiViewDashboardOutline}} </v-icon> 
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title> Dashboard </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item @click="moveToCode">
          <v-list-item-icon>
            <v-icon> {{icons.mdiXml}} </v-icon> 
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title> Add Coding Task </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item @click="moveToWrite">
          <v-list-item-icon>
            <v-icon> {{icons.mdiPencilBoxOutline}} </v-icon> 
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title> Add Writing Task </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item @click="moveToMCQ">
          <v-list-item-icon>
            <v-icon> {{icons.mdiFormatListChecks}} </v-icon> 
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title> Add Multiple Choice Question </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-list-item-group>
    </v-list>
    <v-spacer></v-spacer>
    <v-btn large class="ma-4 grey lighten-1 elevation-1" @click="submitExit">Submit</v-btn>
  </div>
</template>

<script>

import {

  mdiViewDashboardOutline,
  mdiFormatListChecks,
  mdiXml,
  mdiPencilBoxOutline

} from '@mdi/js';

export default {

  data(){
    return {
      icons: {
        mdiViewDashboardOutline,
        mdiFormatListChecks,
        mdiXml,
        mdiPencilBoxOutline

      },
      item: 0,
    }
  },

  methods: {
    moveToDash: function() {
      this.$router.push("/createTest");
    },
    moveToMCQ: function() {
      this.$router.push("/addMCQ");
    },
    moveToCode: function() {
      this.$router.push("/addCodeTask");
    },
    moveToWrite: function() {
      this.$router.push("/addWritingTask");
    },
    submitExit: function() {
      this.$router.push("/landing");
    }
  }
};
</script>