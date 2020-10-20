<template>
    <div class="main">
        <story></story>
        <post v-for="(post, i ) in posts" :key="i" :post="post"></post>
    </div>
</template>

<script>
    import {
        mapState
    } from 'vuex';
    export default {
        name: "main",
        components: {
            Story: () => import("@/components/main/Story.vue"),
            Post: () => import("@/components/main/Post.vue"),
        },
        data() {
            return {};
        },
        methods: {},
        computed: {
            ...mapState(['posts'])
        }
    }
</script>

<style lang="scss" scoped>

</style>