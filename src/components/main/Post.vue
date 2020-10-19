<template>
    <div class="post">
        <div class="wrapper">
            <div class="text-center post-container" cols="1" v-for="(post, i) in posts" :key="i">
                <div class="post-box">
                    <div class="profile-item" icon>
                        <v-avatar size="36" class="profile-avatar">
                            <img :src="post.userProfile.img" alt="profile-img" class="profile-img">
                        </v-avatar>
                        <p class="profile-name">{{post.userProfile.name}}</p>

                        <v-spacer></v-spacer>

                        <v-menu bottom left>
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn icon v-bind="attrs" v-on="on">
                                    <v-icon style="color:black">mdi-dots-horizontal</v-icon>
                                </v-btn>
                            </template>

                            <v-list>
                                <v-list-item v-for="(item, i) in items" :key="i">
                                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </div>
                    <div class="content-item">
                        <v-img :src="post.content.img" alt="content-img" class="content-img"></v-img>
                    </div>
                </div>
                <!-- post-box -->
            </div>
            <!-- post-container -->
        </div>
        <!-- wrapper -->
    </div>
</template>

<script>
    import {
        mapState
    } from "vuex";
    export default {
        name: "post",
        computed: {
            ...mapState(["posts"]),
        },
        data() {
            return {
                items: [{
                    title: '신고'
                }, {
                    title: '팔로우 취소'
                }, {
                    title: '게시물로 이동'
                }, {
                    title: '공유하기'
                }, {
                    title: '링크 복사'
                }, {
                    title: '퍼가기'
                }, {
                    title: '취소'
                }, ],
            }
        }
    }
</script>

<style lang="scss" scoped>
    .post-box {
        // border: 1px solid #ccc;
        width: 100%;
    }

    .profile-item {
        display: flex;
        flex-flow: nowrap;
        justify-content: flex-start;
        align-items: center;
        padding: 10px 10px 10px 16px;
        border-bottom: 1px solid #ccc;
    }

    .profile-img {
        margin: 10px;
    }

    .profile-name {
        font-size: 14px;
        color: black;
        margin: 0 0 0 12px;
        letter-spacing: 0px;
        font-weight: 500;
    }

    .content-img {
        object-fit: contain;
    }
</style>