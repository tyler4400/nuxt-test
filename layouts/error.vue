<template>
    <div>
        <h1>错误</h1>
        <nuxt-link to="/">回首页</nuxt-link>
        <p>这是错误信息</p>
        {{ error }}
    </div>
</template>

<script>
export default {
    name: 'Error',
    // eslint-disable-next-line vue/require-prop-types
    props: ['error']
};
</script>

<style scoped></style>
