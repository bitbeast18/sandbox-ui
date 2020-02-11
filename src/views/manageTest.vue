<template>
  <v-container>
    <v-row justify="center" align="start" no-gutters>
      <v-col class="d-flex justify-center align-center" cols="12">
        <v-col cols="2">
          <v-text-field outlined rounded dense filled hide-details placeholder="Test ID"></v-text-field>
        </v-col>
        <v-col cols="2">
          <v-text-field outlined rounded dense filled hide-details placeholder="Password"></v-text-field>
        </v-col>
        <v-btn small>load</v-btn>
      </v-col>

      <v-col class="d-flex justify-center flex-grow-1" cols="12">
        <v-col cols="6">
          <v-card height="70vh" class="fill-height">
            <v-card-title>Test Takers</v-card-title>
            <v-divider></v-divider>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card height="70vh">
            <v-card-title>Real Time Log</v-card-title>
            <v-divider></v-divider>
          </v-card>
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>