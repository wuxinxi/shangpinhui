import { reqCategoryList } from '@/api'

const actions = {
    async fetchCategoryList({ commit }) {
        let result = await reqCategoryList()
        if (result.code === 200) {
            commit('CATEGORYLIST', result.data)
        }
    }
}

const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList
    }
}

const state = {
    categoryList: []
}

const getters = {}

export default {
    state,
    actions,
    mutations,
    getters
}
