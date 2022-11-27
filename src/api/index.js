import axios from 'axios'
import router from '../router'

const DOMAIN = 'http://localhost:3000'
const UNAUTHORIZED = 401
const onUnauthorized = () => {
    const loginPathname = '/login'
    if (location.pathname === loginPathname) return
    router.push(loginPathname + location.search)
}

const request = (method, url, data) => {
    return axios({
        method,
        url: DOMAIN + url,
        data
    })
    .then(result => result.data)
    .catch(result => {
        const { status } = result.response
        if (status === UNAUTHORIZED) onUnauthorized()
        throw result.response
    })
}

export const setAuthHeader = token => {
    axios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : null
}

const { token } = localStorage
if (token) setAuthHeader(token)

export const auth = {
    login(email, password) {
        return request('post', '/login', { email, password })
    }
} 

export const board = {
    fetch() {
        return request('get', '/boards')
    },
    create(title) {
        return request('post', '/boards', { title })
    }
}