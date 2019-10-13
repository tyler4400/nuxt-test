<template>
    <div>
        用户界面
        <hr />
        <nuxt-child></nuxt-child>
        <hr />
        <ul>
            <li v-for="(user, index) in users" :key="index">
                用户名:{{ user.name }} 用户id:{{ user.id }} 用户key:{{ index }}
            </li>
        </ul>
    </div>
</template>

<script>
function getUsers() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([{ name: 'tom', id: 1 }, { name: 'jerry', id: 2 }]);
        }, 1000);
    });
}

export default {
    layout: 'users',
    name: 'Users',
    async asyncData() {
        console.log(`现在是在服务端吗？${process.server}`);
        const users = await getUsers();
        // return的数据最终回合data中的合并
        return { users };
    }
};
</script>

<style scoped></style>
