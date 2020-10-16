<template>
    <div class="appbar">
        <v-app-bar color="white accent-4" dense>
            <v-btn icon>
                <v-icon medium>mdi-camera-outline</v-icon>
            </v-btn>

            <v-spacer></v-spacer>

            <v-toolbar-title>
                <router-link to="/">
                    <v-img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png">
                    </v-img>
                </router-link>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
                <v-icon medium>mdi-send-outline</v-icon>
            </v-btn>

        </v-app-bar>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>

</style>