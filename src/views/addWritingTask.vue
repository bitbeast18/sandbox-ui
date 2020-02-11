<template>
<v-container>
    <v-card>
        <v-card-title> Add Writing Task </v-card-title>
        <v-card-text>
            <v-form>
                <v-subheader>
                    Problem Statement
                </v-subheader>
                <v-textarea outlined filled></v-textarea>
                <v-subheader>
                    Word Limit
                </v-subheader>
                <v-text-field outlined filled> </v-text-field>
            </v-form>
        </v-card-text>

        <v-card-actions class="pb-5">
            <v-spacer></v-spacer>
            <v-btn class="mr-5"> add more </v-btn>
            <v-btn class="mr-5"> next section </v-btn>
        </v-card-actions>
    </v-card>
</v-container>
</template>