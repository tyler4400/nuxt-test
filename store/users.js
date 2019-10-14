export const state = () => ({
    list: []
});

export const mutations = {
    // eslint-disable-next-line no-shadow
    set(state, list) {
        state.list = list;
    },
    // eslint-disable-next-line no-shadow
    add(state, name) {
        state.list.push({ name });
    }
};
