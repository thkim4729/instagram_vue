<template>
    <div class="main">
        <story></story>
        <post></post>
    </div>
</template>

<script>
    export default {
        name: "main",
        components: {
            Story: () => import("@/components/main/Story.vue"),
            Post: () => import("@/components/main/Post.vue"),
        },
        data() {
            return {};
        },
        methods: {}
    }
</script>

<style lang="scss" scoped>

</style>