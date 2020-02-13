<template>
  <v-container>
    <v-card>
      <v-card-title>Dashboard</v-card-title>
      <v-card-text>
        <v-form>
          <v-subheader>
            Email address
          </v-subheader>
          <v-text-field filled rounded outlined placeholder="This will be used to send test related data"></v-text-field>
          <v-subheader>
            Languages & Tools allowed
          </v-subheader>
          
        </v-form>
      </v-card-text>
      <v-card-actions class="pb-5">
        <v-spacer></v-spacer>
        <v-btn class="mr-5">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>