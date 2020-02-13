<template>
<v-container>
    <v-card>
        <v-card-title> Add Multiple Choice Question</v-card-title>
        <v-card-text>
            <v-form>
                <v-subheader>
                    Problem Statement
                </v-subheader>
                <v-textarea outlined filled></v-textarea>
                <v-subheader>
                    No. of Options
                </v-subheader>
                <v-text-field outlined filled></v-text-field>
                <v-subheader>
                    List Options
                </v-subheader>
                <v-text-field outlined filled placeholder="Option 1"></v-text-field>
                <v-text-field outlined filled placeholder="Option 2"></v-text-field>
                <v-text-field outlined filled placeholder="Option 3"></v-text-field>
                <v-text-field outlined filled placeholder="Option 4"></v-text-field>
                
            </v-form>
        </v-card-text>

        <v-card-actions class="pb-5">
            <v-spacer></v-spacer>
            <v-btn class="mr-5"> add question </v-btn>
            <v-btn class="mr-5"> dashboard </v-btn>
        </v-card-actions>
    </v-card>
</v-container>
</template>