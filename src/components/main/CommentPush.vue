<template>
    <div class="comment-push">
        <v-card>
            <v-row class="card-title" justify="center" align="center">
                <v-btn icon @click="dialog.on = false">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-spacer></v-spacer>
                <h3>댓글</h3>
                <v-spacer></v-spacer>
                <v-btn icon @click="dialog = false">
                    <v-icon>mdi-send</v-icon>
                </v-btn>
            </v-row>

            <v-row no-gutters align="center" class="comment-text-field-wrapper">
                <v-col cols="2">
                    <v-avatar size="48">
                        <v-img :src="myProfile[0].img"></v-img>
                    </v-avatar>
                </v-col>
                <v-col cols="10">
                    <v-text-field solo flat rounded placeholder="댓글 달기..." class="add-comment-text-field" v-model="myComment">
                        <template v-slot:append>
                            <v-btn text small color="primary" @click="pushComment">게시</v-btn>
                        </template>
                    </v-text-field>
                </v-col>
            </v-row>

            <div class="like-user-list">
                <v-row v-for="(comment, i) in comments" :key="i" class="list-item" justify="center" align="center" no-gutters>
                    <p>
                        <strong>{{ comment.name }}</strong
                        >{{ comment.text }}
                    </p>

                    <v-spacer></v-spacer>

                    <v-btn icon><v-icon>mdi-heart-outline</v-icon></v-btn>
                </v-row>
            </div>
        </v-card>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'CommentPush',
    props: ['comments', 'index', 'dialog'],
    data() {
        return { myComment: '' };
    },
    methods: {
        pushComment() {
            this.$store.commit('pushComment', {
                index: this.index,
                name: 'thkim4729',
                text: this.myComment,
            });
        },
    },
    computed: {
        ...mapState(['posts', 'myProfile']),
    },
};
</script>

<style lang="scss" scoped>
.comment-push {
    max-height: 500px;
}
.card-title {
    height: 60px;
    margin: 0;
    padding: 0 10px;
    border: 1px solid #80808054;

    h3 {
        display: inline-block;
    }
}
.comment-text-field-wrapper {
    padding: 10px 15px;
    background: #eee;
}
.add-comment-text-field {
    height: 50px;
    margin-left: 10px;
}
.list-item {
    padding: 15px;
    p {
        margin: 0;
        max-width: 80px;
    }
}
.like-user-list {
    font-size: 14px;
    overflow-y: auto;
    p {
        max-width: 80%;
        strong {
            margin-right: 4px;
        }
    }
}
</style>
