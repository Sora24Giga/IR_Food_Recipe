import {defineStore} from 'pinia'
import axios from 'axios'
import type {AxiosInstance} from "axios";
import type {User} from "@/type";

const apiClient: AxiosInstance = axios.create ({
    baseURL: import.meta.env.VITE_BACKEND_LOGIN,
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export const useAuthStore = defineStore('auth', {
    state: () => ({
        token: null as string | null,
        user: null as User | null,
        loginState: null as boolean | null
    }),
    getters: {
        currentUserName () : string {
            return this.user?.roles.includes('ROLE_ADMIN') ? 'ADMIN' : this.user?.username || ''
        },
        isLoggedIn () : boolean {
            return this.token !== null && this.user !== null
        }
    },
    actions: {
        login(username: string, password: string) {
            console.log("login")
            return apiClient
                .post('/api/v1/auth/authenticate', {
                    username: username,
                    password: password
                })
                .then((response)=> {
                    this.token = response.data.access_token
                    this.user = response.data.user
                    this.loginState = true
                    localStorage.setItem('access_token', this.token as string)
                    localStorage.setItem('user', JSON.stringify(this.user))
                    axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`
                    console.log(response)
                    return response
                })
        },
        register(username: string, password: string){
            return apiClient
              .post('/api/v1/auth/register', {
                username: username,
                password: password,
              })
              .then((response) => {
                this.token = response.data.access_token
                this.user = response.data.user
                this.loginState = true
                localStorage.setItem('access_token', this.token as string)
                localStorage.setItem('user', JSON.stringify(this.user))
                axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`
                console.log(response)
                return response
      
              })
          },
        logout() {
            console.log('logout')
            this.token = null
            this.user = null
            this.loginState = false
            localStorage.removeItem('access_token')
            localStorage.removeItem('user')
        },
        reload(token: string, user: User) {
            console.log("reload")
            this.token = token
            this.user = user
        }
    }
})