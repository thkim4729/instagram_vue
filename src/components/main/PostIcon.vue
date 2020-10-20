<template>
    <v-row class="icons-container" no-gutters>
        <v-btn icon large>
            <v-icon>mdi-heart-outline</v-icon>
        </v-btn>
        <v-btn icon large>
            <v-icon>mdi-chat-outline</v-icon>
        </v-btn>
        <v-btn icon large>
            <v-icon>mdi-send</v-icon>
        </v-btn>

        <v-spacer></v-spacer>

        <v-btn icon large>
            <v-icon>mdi-bookmark-outline</v-icon>
        </v-btn>
    </v-row>
</template>

<script>
    export default {
        name: "PostIcon"
    }
</script>

<style lang="scss" scoped>
    .icons-container {
        width: 100%;
        padding: 16px 16px 0 16px;
    }
</style>