import axios from 'axios'

const allArticles = {
    state: () => ({
        articles: []
    }),
    mutations: {
        getArticles(state, articles) {
            state.articles = articles
        }
    },
    actions: {
        getArticles: async ({ commit }, { tab, page }) => {
            const res = await axios.get(`/topics?page=${page}&limit=40${tab}`)
            commit('getArticles', res.data)
            // console.log(res.data);
            // console.log(page);
            // console.log(tab);
        }
    }

}

export default allArticles