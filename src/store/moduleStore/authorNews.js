

import axios from "axios"
// import $router from 'vue-router'
import 'vue-router'

const authorNews = {
    state: () => ({
        userDetails: {
            data: {
                //需要默认初始化一个空的格式，不然会出现一些离奇的错误
                loginname: '',
                score: 0
            },
            success: null

        },
        userCollections: {
            data: [
                {
                    author: {
                        avatar_url: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
                        loginname: ''
                    }
                }
            ]
        }
    }),
    mutations: {
        async getUserDetails(state, loginname) {
            const res = await axios.get(`user/${loginname}`,)
            state.userDetails = res
            // console.log(res);
            // if (state.userDetails.success) {
            //     this.$router.push(`/user/${username}`);
            // }


        },
        defaultUserDetails(state) {
            state.userDetails = {
                data: {
                    loginname: '',
                    score: 0
                },
                success: null

            }
        },
        async getCollection(state, loginname) {
            const res = await axios.get(
                `/topic_collect/${loginname}`
            );
            // console.log(res);
            state.userCollections = res
        },
        // 退出登陆使用
        // clearuserDetails(state){
        //     state.user
        // }
    },
    actions: {
    }

}

export default authorNews