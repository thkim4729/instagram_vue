<template>
    <div class="story">
        <div class="wrapper">
            <div class="text-center story-container" cols="1" v-for="(story, i) in stories" :key="i">
                <v-btn class="story-item" icon>
                    <v-avatar size="66">
                        <img :src="story.img" alt="story-img" class="story-img">
                    </v-avatar>
                </v-btn>
                <p class="story-name">{{story.name}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        mapState
    } from "vuex";
    export default {
        name: "story",
        computed: {
            ...mapState(["stories"]),
        },
    }
</script>

<style lang="scss" scoped>
    .story {
        overflow-x: auto;
    }

    .wrapper {
        // width: 600px;
        white-space: nowrap;
        display: flex;
        // justify-content:center;
        align-items: center;
    }

    .story-container {
        margin: 20px 0 20px 20px;
    }

    .story-item {
        width: 100%;
        height: 100%;
        // display: inline-block;
        // margin: 20px 0 20px 15px;
        // display: flex;
        // flex-flow: column;
    }

    .story-name {
        // text-align: center;
        font-size: 12px;
    }
</style>