<template>
    <main class="login">
       <h2>Log in to Trello</h2>
       <form @submit.prevent="onSubmit">
            <div>
                <label for="email">Email</label>
                <input class="form-control" type="text" name="email" v-model="email" autofocus placeholder="e.g., test@test.com" />
            </div>
            <div>
                <label for="password">Password</label>
                <input class="form-control" type="password" v-model="password" placeholder="e.g., 123123" />
            </div>
            <button class="btn" :class="{ 'btn-success': !invalidForm }" type="submit" :disabled="invalidForm">Log In</button>
       </form>
       <p class="error" v-if="error">{{ error }}</p>
    </main>
</template>
<script>
import { auth, setAuthHeader } from '../api'

export default {
    data() {
        return {
            email: '',
            password: '',
            returnPath: '',
            error: '',
            rPath: ''
        }
    },
    computed: {
        invalidForm() {
            return !this.email || !this.password
        }
    },
    created() {
        this.rPath = this.$route.query.rPath
    },
    methods: {
        async onSubmit() {
            try {
                const { accessToken } = await auth.login(this.email, this.password)
                localStorage.setItem('token', accessToken)
                setAuthHeader(accessToken)
                this.$router.push(this.rPath)
            } catch (error) {
                this.error = error.data.error
            }
        }
    }
}
</script>
<style>
.login {
    width: 400px;
    margin: 0 auto;
}

.error {
    color: #f00;
}
</style>