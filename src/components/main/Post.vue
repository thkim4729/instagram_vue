<template>
    <div class="post">
        <v-row class="post-head" align="center" no-gutters>
            <v-avatar size="36" class="profile-avatar">
                <img :src="post.userProfile.img" alt="프로필 이미지" class="profile-img">
            </v-avatar>
            <h3 class="profile-name">{{post.userProfile.name}}</h3>

            <v-spacer></v-spacer>

            <v-dialog bottom left>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on" class="menu-btn">
                        <v-icon style="color:black">mdi-dots-horizontal</v-icon>
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item v-for="(item, i) in items" :key="i">
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="dialog = false">
                        <v-list-item-title>취소</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-dialog>
        </v-row>
        <!-- post-head -->

        <div class="img-container">
            <v-img :src="post.content.img" alt="컨텐츠 이미지" class="content-img" max-height="597" min-height="479" contain>
            </v-img>
        </div>
        <!-- content-item -->

        <post-icon></post-icon>

        <!-- <div class="post-like">
            <v-btn text x-small class="like-text" @click.stop="dialog = true">좋아요 88,888개</v-btn>
            <v-dialog v-model="dialog" max-width="300">
                <v-card>
                    <v-card-title class="headline">좋아요</v-card-title>

                    <v-list-item v-for="(post, i) in posts" :key="i">
                        <v-list-item-title>{{ post.like[i] }}</v-list-item-title>
                    </v-list-item>

                    <v-card-actions>
                        <v-spacer></v-spacer>

                        <v-btn color="black darken-1" text @click="dialog = false">
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </div> -->
        <!-- <post-like></post-like> -->
        <like :like="post.like"></like>

        <div class="post-text">
            <p class="profile-name">{{post.userProfile.name}}</p>
        </div>

        <!-- </div> -->
        <!-- post-box -->
    </div>
</template>

<script>
    import {
        mapState
    } from "vuex";
    export default {
        components: {
            PostIcon: () => import("@/components/main/PostIcon.vue"),
            Like: () => import("@/components/main/Like.vue")
        },
        name: "post",
        computed: {
            ...mapState(["posts"]),
        },
        props: ['post'],
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
                }, ],
            }
        }
    }
</script>

<style lang="scss" scoped>
    .post-container {
        // border: 1px solid #ccc;
        width: 100%;
    }

    .post-head {
        height: 60px;
        width: 100%;
        border-bottom: 1px solid #80808054;
    }

    .profile-avatar {
        margin: 0 12px 0 12px;
    }

    .profile-img {
        margin: 10px;
    }

    .profile-name {
        font-size: 14px;
        color: black;
        margin: 0;
        letter-spacing: 0px;
        font-weight: 500;
    }

    .menu-btn {
        margin-right: 6px;
    }

    .post-text {
        display: flex;
        margin-left: 16px;
    }
</style>