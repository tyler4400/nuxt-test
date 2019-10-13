<template>
    <div>
        <p>这是用户id {{ $route.params.id }}</p>
        <p>我是接口请求的{{ user.name }}</p>
    </div>
</template>

<script>
export default {
    name: 'Id',
    /*

属性名	描述
asyncData	最重要的一个键, 支持 异步数据处理，另外该方法的第一个参数为当前页面组件的 上下文对象。
fetch	与 asyncData 方法类似，用于在渲染页面之前获取数据填充应用的状态树（store）。不同的是 fetch 方法不会设置组件的数据。详情请参考 关于fetch方法的文档。
head	配置当前页面的 Meta 标签, 详情参考 页面头部配置API。
layout	指定当前页面使用的布局（layouts 根目录下的布局文件）。详情请参考 关于 布局 的文档。
loading	如果设置为false，则阻止页面自动调用this.$nuxt.$loading.finish()和this.$nuxt.$loading.start(),您可以手动控制它,请看例子,仅适用于在nuxt.config.js中设置loading的情况下。请参考API配置 loading 文档。
transition	指定页面切换的过渡动效, 详情请参考 页面过渡动效。
scrollToTop	布尔值，默认: false。 用于判定渲染页面前是否需要将当前页面滚动至顶部。这个配置用于 嵌套路由的应用场景。
     */
    head: {
        title: '我是自定义id'
    },
    // 方法会在组件（限于页面组件）每次加载之前被调用。它可以在服务端或路由更新之前被调用.
    async asyncData({ params, $axios }) {
        const data = await $axios.$get(`/api/users/${params.id}`);
        console.log(data);
        if (data.ok) {
            // 注意返回的就是响应数据
            return { user: data.user };
        }
        // error({ statusCode: 400, message: 'id有误，查询失败' });
    }
};
</script>

<style scoped></style>
