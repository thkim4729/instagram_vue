<template>
    <div class="story">
        <div class="wrapper">
            <div class="text-center myProfile-container" cols="1" v-for="(myProfile, i) in myProfile" :key="i">
                <v-badge bordered color="blue" icon="mdi-plus" overlap bottom class="plus-badge" offset-y="20" offset-x="20">
                    <v-btn class="myProfile-item" icon>
                        <v-avatar size="60">
                            <img :src="myProfile.img" alt="myProfile-img" class="story-img" />
                        </v-avatar>
                    </v-btn>
                </v-badge>
                <p class="myProfile-name">내 스토리</p>
            </div>
            <!-- story-container -->
            <div class="text-center story-container" cols="1" v-for="(story, i) in stories" :key="i">
                <v-btn class="story-item" icon>
                    <v-avatar size="60">
                        <img :src="story.img" alt="story-img" class="story-img" />
                    </v-avatar>
                </v-btn>
                <p class="story-name">{{ story.name }}</p>
            </div>
            <!-- story-container -->
        </div>
        <!-- wrapper -->
    </div>
</template>

<script defer>
import { mapState } from 'vuex';
export default {
    name: 'story',
    computed: {
        ...mapState(['stories', 'myProfile']),
    },
    return: {},
};
</script>

<style lang="scss" scoped>
.story {
    overflow-x: auto;
    border-bottom: 1px solid #ccc;
    background: #fafafa;
}

div::-webkit-scrollbar {
    display: none !important;
}

.wrapper {
    // width: 600px;
    white-space: nowrap;
    display: flex;
    // justify-content:center;
    // align-items: center;
    padding: 10px;
}

// .myProfile-container {
//     padding: 15px 0 15px 15px;
//     // padding: 0 7.5px;
// }

// .story-container {
//     padding: 15px 0 15px 15px;
//     // padding: 0 7.5px;
// }

// .story-container:last-child {
//     padding-right: 15px;
// }

.myProfile-container {
    margin-right: 10px;
}

.myProfile-item {
    width: 65px;
    height: 65px;
    display: inline-block;
    // margin-right: 10px;

    img {
        vertical-align: middle;
        border-radius: 50%;
        object-fit: cover;
    }
}

.myProfile-name {
    text-align: center;
    font-size: 12px;
    margin: 1px 0 0 0;
}

.story-item {
    width: 65px;
    height: 65px;
    display: inline-block;
    margin-right: 10px;
    border: 1px solid red;

    img {
        vertical-align: middle;
        width: 90%;
        height: 90%;
        border-radius: 50%;
        object-fit: cover;
    }
}

.plus-badge {
}

.story-name {
    text-align: center;
    font-size: 12px;
    margin: 0 0 0 -10px;
}
</style>
