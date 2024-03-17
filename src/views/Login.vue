<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router'

import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
const router = useRouter()

const username = ref('')
const password = ref('')

function login() {
    authStore
        .login(username.value, password.value)
        .then(() => {
            router.push({ name: 'home' })
        })
}
</script>
<template>


    <section class="bg-white">
        <div class="lg:grid h-[calc(100vh-4rem)] lg:grid-cols-12">
            <section class="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
                <img alt=""
                    src="https://images.unsplash.com/photo-1617195737496-bc30194e3a19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    class="absolute inset-0 h-full w-full object-cover opacity-80" />

                <div class="hidden lg:relative lg:block lg:p-12">

                    <h2 class="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                        Welcome to Recipe 🗿
                    </h2>

                    <p class="mt-4 leading-relaxed text-white/90">
                        Project for IR
                    </p>
                </div>
            </section>

            <main
                class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
                <div class="w-full">

                    <form @submit.prevent="login" class="mt-8 grid grid-cols-6 gap-6">

                        <div class="col-span-6">
                            <label for="User" class="block text-sm font-medium text-gray-700"> User </label>

                            <input v-model="username" type="user" id="User" name="user"
                                class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm" />
                        </div>


                        <div class="col-span-6">
                            <label for="Pass" class="block text-sm font-medium text-gray-700"> Password </label>

                            <input v-model="password" type="Pass" id="Pass" name="Pass"
                                class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm" />
                        </div>


                        <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
                            <button type="submit"
                                class="shrink-0 block border  bg-yellow-300 px-12 py-3 text-sm font-medium text-black transition  hover:bg-yellow-400 focus:outline-none focus:ring active:text-blue-500">
                                Login
                            </button>

                        </div>
                    </form>
                </div>
            </main>
        </div>
    </section>
</template>