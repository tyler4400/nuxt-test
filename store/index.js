export const state = () => ({
    counter: 0
});

export const mutations = {
    // eslint-disable-next-line no-shadow
    increment(state) {
        state.counter++;
    }
};
