<template>
    <div class="text-container">
        <p>
            <strong>{{ userName }}</strong
            >{{ isMore ? text : text.slice(0, 10) + '...' }}
            <span @click="isMore = true" v-show="!isMore">더 보기</span>
        </p>
    </div>
</template>

<script>
export default {
    name: 'PostText',
    props: ['userName', 'text'],
    data() {
        return {
            isMore: false,
        };
    },
};
</script>

<style lang="scss" scoped>
.text-container {
    display: flex;
    padding: 0 24px;
    font-size: 14px;
    p {
        margin-bottom: 4px;
        strong {
            margin: 0 8px 0 0;
        }
        span {
            color: gray;
        }
    }
}
</style>
