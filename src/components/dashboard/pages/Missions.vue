<template>
    <v-container>

        <!-- CURRENT USER -->
        <v-card>
            <v-card-text>
                <h1>Missions</h1>
                <h4>Tralalala</h4>
            </v-card-text>
        </v-card>
        <!-- / CURRENT USER -->

        <!-- CURRENT MISSIONS -->
        <v-card class="mt-4">
            <v-card-text>
                <v-list>
                    <template v-for="(mission, index) in missions">

                    </template>
                </v-list>
            </v-card-text>
        </v-card>
        <!-- / CURRENT MISSIONS -->

    </v-container>
</template>