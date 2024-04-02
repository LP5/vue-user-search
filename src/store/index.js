import { createStore } from 'vuex';

export default createStore({
    state: {
        users: [
        ],
        activeUser: {
        },
    },
    actions: {
        async getUserAsync ({ commit, state }, payload) {
            const response = await fetch(payload.endpoint);
            const users = await response.json();

            if (!state.users.find((user) => user.id === users[0].id )) {
                commit('storeUser', users[0]);
            }
        },
    },
    mutations: {
        clearUsers(state) {
            state.users = [];
            state.activeUser = {};
        },
        storeUser(state, user) {
            state.users.push(user);
        },
        setActiveUser(state, user) {
            state.activeUser = user;
        },
    }
})
