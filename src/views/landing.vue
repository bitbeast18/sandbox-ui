<template>
    <v-container>
        <v-card>
            <v-card-title> Test Summary </v-card-title>
            <v-card-subtitle> Test was successfully created </v-card-subtitle>
            <v-card-text>
                <v-row justify="space-around">
                    <v-col cols="3">
                        <p class=""> Test ID : 2198273 </p>
                    </v-col>
                    
                    <v-col cols="3">
                        <p> created By : pro.bbcom18@gmail.com </p>
                    </v-col>
                </v-row>

                <v-row justify="space-around">
                    <v-col cols="3">
                        <p> Problems count : 6 </p>
                    </v-col>
                </v-row>

            </v-card-text>
            <v-card-actions class="pb-5">
                <v-spacer></v-spacer>
                <v-btn @click="close" class="mr-5"> Close </v-btn> 
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script>
export default {
    methods: {
        close: function(){
            this.$router.push('/');
        }
    }
}
</script>