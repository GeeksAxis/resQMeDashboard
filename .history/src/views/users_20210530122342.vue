<template>
    <v-app>
        <v-container>
            <v-row>
                <v-col cols="12" md="4">
                    <v-card>
                        <v-card-text>
                            <v-list>
                                <v-list-item v-for="user in users" :key="user._id">
                                    <v-list-item-avatar>
                                        <v-avatar
                                            size="avatarSize"
                                            color="red"
                                        >
                                            <img src="{{"profilePicture"}} alt="alt">
                                        </v-avatar>
                                    </v-list-item-avatar>
                                    <v-list-item-title>
                                        {{user.username}}
                                    </v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-card-text>
                    </v-card>

                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>