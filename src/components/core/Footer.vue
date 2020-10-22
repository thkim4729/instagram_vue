<template>
    <v-footer absolute class="font-weight-medium footer" max-height="48px" elevation="2" color="white">
        <v-row justify="space-between" dense>
            <v-col class="text-center icon-container d-flex justify-center" cols="2" v-for="(tab, i) in tabs" :key="i">
                <router-link :to="tab.to" class="icon-box">
                    <v-btn icon>
                        <v-icon large>
                            {{ tab.icon }}
                        </v-icon>
                    </v-btn>
                </router-link>
            </v-col>
            <v-col class="icon-container" cols="2">
                <router-link to="/">
                    <v-btn icon>
                        <v-avatar size="36">
                            <v-img src="https://pm1.narvii.com/6720/31e2a365d17c441a4a15863002bb91c59c7c156d_hq.jpg"></v-img>
                        </v-avatar>
                    </v-btn>
                </router-link>
            </v-col>
        </v-row>
    </v-footer>
</template>

<script>
export default {
    name: 'footer',
    data() {
        return {
            tabs: [
                {
                    to: '/',
                    icon: 'mdi-home-variant',
                },
                {
                    to: '/',
                    icon: 'mdi-magnify',
                },
                {
                    to: '/',
                    icon: 'mdi-plus-box-outline',
                },
                {
                    to: '/',
                    icon: 'mdi-heart-outline',
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
.icon-container {
    display: flex;
    // flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
    // height: 48px;
    padding: 0;
}

// .font-weight-medium {
//     border-top: 1px solid #ccc;
//     background: white;
// }
</style>
