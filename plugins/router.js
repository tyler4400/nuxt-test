import consola from 'consola';
export default ({ app }) => {
    app.router.beforeEach((to, from, next) => {
        consola.info(to, from);
        console.log(to);
        next();
    });
};
