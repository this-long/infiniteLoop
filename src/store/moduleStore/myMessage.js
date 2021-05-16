import axios from 'axios'

const myMessage = {
    state: () => ({
        unreadNum: 0,
        messages: {
            data: {
                hasnot_read_messages: [],
                has_read_messages: []
            }
        }

    }),
    mutations: {
        async getUnreadNum(state,) {
            if (sessionStorage.getItem("accesstoken")) {
                const res = await axios.get(`/message/count?accesstoken=${sessionStorage.getItem("accesstoken")}`)
                // console.log(res);
                state.unreadNum = res.data
            }

        },
        async getMessage(state) {
            const res = await axios.get(
                `/messages?accesstoken=${sessionStorage.getItem("accesstoken")}`
            );
            // console.log(res);
            state.messages = res
            // console.log(state.messages);
        },
        async hasReadMessage(state) {
            const res = await axios.post('/message/mark_all', { accesstoken: sessionStorage.getItem("accesstoken") })
            // console.log(res);
            state.unreadNum = 0
        }
    },
    actions: {
    }

}

export default myMessage