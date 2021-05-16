// import axios from 'axios'

const singUp = {
    state: () => ({
        // token: '',
        userall: null,
        singup: false,
        isSing: false
    }),
    mutations: {
        flaseSingUp(state) {
            state.singup = true
            // console.log(1);
        },
        trueSingUp(state) {
            state.singup = false
        },
        getToken(state, user) {
            state.userall = user
            state.isSing = true

        },
        noSing(state) {
            state.isSing = false
            state.userall = null

        },
        getSing(state, is) {
            state.isSing = is
            // console.log(state.userall);
        },
        getUserall(state, userall) {
            state.userall = userall
            // console.log(state.userall);
        },

    },
    actions: {
    }

}

export default singUp