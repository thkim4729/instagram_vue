<template>
    <div class="post">
        <v-row class="post-head" align="center" no-gutters>
            <v-avatar size="36" class="profile-avatar">
                <img :src="post.userProfile.img" alt="프로필 이미지" class="profile-img" />
            </v-avatar>
            <h3 class="profile-name">{{ post.userProfile.name }}</h3>

            <v-spacer></v-spacer>

            <v-dialog v-model="dialog" bottom left>
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
            <v-img :src="post.content.img" alt="컨텐츠 이미지" class="content-img" max-height="500" min-height="400" contain> </v-img>
        </div>
        <!-- content-item -->

        <post-icon></post-icon>

        <like :like="post.like"></like>

        <post-text :userName="post.userProfile.name" :text="post.content.text"></post-text>

        <comment :comments="post.comments" :index="index"></comment>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    components: {
        PostIcon: () => import('@/components/main/PostIcon.vue'),
        Like: () => import('@/components/main/Like.vue'),
        PostText: () => import('@/components/main/PostText.vue'),
        Comment: () => import('@/components/main/Comment.vue'),
    },
    name: 'post',
    computed: {
        ...mapState(['posts', 'myProfile']),
    },
    props: ['post', 'index'],
    data() {
        return {
            items: [
                {
                    title: '신고',
                },
                {
                    title: '팔로우 취소',
                },
                {
                    title: '게시물로 이동',
                },
                {
                    title: '공유하기',
                },
                {
                    title: '링크 복사',
                },
                {
                    title: '퍼가기',
                },
            ],
            dialog: false,
        };
    },
};
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
</style>
