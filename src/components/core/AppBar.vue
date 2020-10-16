<template>
    <v-app-bar color="white" dense elevation="1">
        <router-link to="/">
            <v-btn icon>
                <v-icon large>mdi-camera-outline</v-icon>
            </v-btn>
        </router-link>

        <v-spacer></v-spacer>

            <router-link to="/">
                <v-img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                    alt="로고" max-width="120">
                </v-img>
            </router-link>

        <v-spacer></v-spacer>

        <router-link to="/">
            <v-btn icon>
                <v-icon large>mdi-send-outline</v-icon>
            </v-btn>
        </router-link>
    </v-app-bar>
</template>

<script>
    export default {
        name: "appbar"
    }
</script>

<style lang="scss" scoped>

</style>