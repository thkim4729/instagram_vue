<template>
    <div class="comment-container">
        <v-dialog v-model="dialog" width="500">
            <template v-slot:activator="{ on, attrs }">
                <button v-bind="attrs" v-on="on">댓글 {{ comments.length }}개 모두 보기</button>
            </template>
            <comment-push :comments="comments" :user-img="userImg" :index="index"></comment-push>
        </v-dialog>

        <div class="comments-wrapper">
            <v-row v-for="(comment, i) in comments" :key="i" align="center" no-gutters>
                <p>
                    <strong>{{ comment.name }}</strong
                    >{{ comment.text }}
                </p>
                <v-spacer></v-spacer>
                <v-btn icon>
                    <v-icon small>mdi-heart-outline</v-icon>
                </v-btn>
            </v-row>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Comment',
    props: ['comments', 'userImg', 'index'],
    data() {
        return {
            dialog: false,
        };
    },
    components: {
        CommentPush: () => import('@/components/main/CommentPush.vue'),
    },
};
</script>

<style lang="scss" scoped>
.comment-container {
    padding: 0 24px;
    font-size: 14px;
}
.comment-box {
    max-height: 500px;
}

.comments-wrapper {
    p {
        margin: 0;
    }
}

.button-wrapper {
    color: gray;
    button {
        outline: 0;
    }
}
</style>
