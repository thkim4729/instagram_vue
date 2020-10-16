<template>
    <div class="footer">
        <v-footer absolute padless class="font-weight-medium" max-height="48px">
            <v-row justify="center">
                <v-col class="text-center icon-container" cols="2" v-for="item in icons" :key="item">
                    <div class="icon-box">
                        <v-btn icon>
                            <v-icon medium>
                                {{item.icon}}
                            </v-icon>
                        </v-btn>
                    </div>
                    <!--icon-box-->
                </v-col>
            </v-row>
        </v-footer>
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
        // flex-flow: row nowrap;
        justify-content: space-around;
        align-items: center;
        padding: 0;
        height: 48px;
    }

    .font-weight-medium {
        border-top: 1px solid #ccc;
        background: white;
    }
</style>