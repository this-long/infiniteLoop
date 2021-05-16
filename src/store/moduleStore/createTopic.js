const createTopic = {
    state: () => ({
        //用来判断右侧帮助是否展示
        isCreate: false,
        editTopic: null,
    }),
    mutations: {
        //修改isCreate
        trueCreate(state) {
            state.isCreate = false
            // console.log('true');
        },
        falseCreate(state) {
            state.isCreate = true
            // console.log(state.isCreate);
        },

        //编辑主题
        getEditTopic(state, topic) {
            state.editTopic = topic
            // console.log(state.editTopic);
        },
        //清空编辑器
        clearEditTopic(state) {
            state.editTopic = null
        }
    }
}
export default createTopic