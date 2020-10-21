<template>
    <div class="like-container">
        <v-dialog v-model="dialog" width="500">
            <template v-slot:activator="{ on, attrs }">
                <p class="like-text">
                    <strong>{{ like[0] }}</strong
                    >님 외 <span style="font-weight: bold" v-bind="attrs" v-on="on">여러 명</span>이 좋아합니다.
                </p>
            </template>

            <v-card>
                <v-row class="card-title" justify="center" align="center" no-gutters>
                    <v-btn icon @click="dialog = false">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                    <v-spacer></v-spacer>
                    <h3>좋아요</h3>
                    <v-spacer></v-spacer>
                    <v-btn icon>
                        <v-icon style="opacity: 0">mdi-close</v-icon>
                    </v-btn>
                </v-row>
                <div class="like-user-list">
                    <v-row v-for="(user, i) in like" :key="i" class="list-item" justify="center" align="center">
                        <p>{{ user }}</p>
                        <v-spacer></v-spacer>
                        <v-btn color="primary">팔로우</v-btn>
                    </v-row>
                </div>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    name: 'Like',
    props: ['like'],
    data() {
        return {
            dialog: false,
        };
    },
};
</script>

<style lang="scss" scoped>
.like-container {
    padding: 0 24px;
}

.like-text {
    font-size: 14px;
    margin-bottom: 8px;
}

.card-title {
    // width: 100%;
    height: 60px;
    margin: 0;
    padding: 0 10px;
    border: 1px solid #80808054;

    h3 {
        display: inline-block;
    }
}

.like-user-list {
    margin: 0;
    padding: 0;
}

.list-item {
    max-height: 400px;
    margin: 0;
    padding: 10px 20px;

    p {
        display: inline-block;
        font-size: 1rem;
        font-weight: bold;
        margin: 0;
    }
}
</style>
