import { defineStore } from "pinia"

export const useUserStore = defineStore("user", {
    state: () => ({
        posts: [],
        isMenuOverlay: false,
        isLogoutOverlay: false,
    }),

    actions: {
        async getAllPosts() {
            let {data, error} = await useFetch('/api/get-all-posts')
            this.posts = data.value
            return this.posts
        }
    }
})