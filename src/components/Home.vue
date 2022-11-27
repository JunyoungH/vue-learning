<template>
    <main>
        <ul>
            <li>
                <router-link to="/board/1">Board 1</router-link>
            </li>
            <li>
                <router-link to="/board/2">Board 2</router-link>
            </li>
        </ul>
        <div v-if="loading">
            Now Loading...
        </div>
        <div v-else>
            <div v-for="board in boards" :key="board.id">
                {{ board }}
            </div>
        </div>
        <div v-if="error">
            {{ error }}
        </div>
    </main>
</template>
<script>
import { board } from '../api'

export default {
    data() {
        return {
            loading: false,
            boards: '',
            error: ''
        }
    },
    created() {
        this.fetchData()
    },
    methods: {
        async fetchData() {
            this.loading = true
            try {
                const res = await board.fetch();
                this.boards = res.data
            
            } finally {
                this.loading = false
            }
        }
    } 
}
</script>
<style>

</style>