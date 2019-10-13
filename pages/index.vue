<template>
    <div class="container">
        <div>
            <nuxt-link to="/users">去往users</nuxt-link>
        </div>
        <div>
            <el-button @click="$router.push('/users')">用户列表</el-button>
            <el-button @click="$router.push('/232323dwad')">错误页面</el-button>
            <el-button @click="$router.push('/users/detail')"
                >用户详情</el-button
            >
            <el-button @click="toUser">用户详情:id</el-button>
        </div>
    </div>
</template>

<script>
// import Logo from '~/components/Logo.vue';

export default {
    layout: 'users',
    components: {
        // Logo
    },
    methods: {
        toUser() {
            this.$router.push({
                name: 'users-id',
                params: { id: 123 },
                query: { name: 'jack' }
            });
            // 等同于
            // this.$router.push(`/users/${12333}`);
        }
    }
};
</script>

<style>
.container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system,
        BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
        sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
}

.subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
}

.links {
    padding-top: 15px;
}
</style>
