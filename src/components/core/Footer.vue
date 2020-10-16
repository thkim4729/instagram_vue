<template>
    <div class="footer">
        <v-card height="150">
            <v-footer absolute class="font-weight-medium" max-height="48px">
                <v-col class="text-center icon-container" cols="12">
                    <div class="icon-box" v-for="item in icons" :key="item">
                        <v-btn icon>
                            <v-icon medium>
                                {{item.icon}}
                            </v-icon>
                        </v-btn>
                    </div>
                    <!--icon-box-->
                </v-col>
            </v-footer>
        </v-card>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                icons: [{
                        icon: "mdi-home"
                    },
                    {
                        icon: "mdi-magnify"
                    },
                    {
                        icon: "mdi-plus-box-outline"
                    },
                    {
                        icon: "mdi-heart-outline"
                    },
                    {
                        icon: "mdi-account-outline"
                    }
                ]
            };
        },
    }
</script>

<style lang="scss" scoped>
    .footer {}

    .icon-container {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;
        padding: 0;
    }
</style>