<script setup lang="ts">
import { RouterLink, RouterView, onBeforeRouteUpdate } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'
import { ref, type Ref } from 'vue'
import DetailService from '@/services/DetailService'
import { useRecipeStore } from '@/stores/counter'
import type { Collection, Option } from '@/type';
import { storeToRefs } from 'pinia'


const recipeStore = useRecipeStore()
const authStore = useAuthStore()
const router = useRouter()
const query = ref('')

const token = localStorage.getItem('access_token')
const user = localStorage.getItem('user')

const collection = storeToRefs(recipeStore).collection
const options: Ref<Array<Option>> = ref([])


function logout() {
    authStore.logout()
    router.push({ name: 'login' })
}


async function search(query: string) {

    await DetailService.searchRecipe(query)
        .then(async (response) => {
            console.log(response.data)
            recipeStore.setCurrentRecipe(response.data)
            await DetailService.searchcollection(query).then((res) => {
                recipeStore.setCollection(res.data)
                coll()
                router.push({ name: 'search', params: { query: query } })
            })

        })
}

const text = ref('')
const suggestion = ref(false)

function coll() {
    text.value = ''
    collection.value.forEach((query) => {
        console.log(query)
        if (query.options != null && query.options.length != 0) {
            text.value = text.value + ' ' + query.options[0].text
            suggestion.value = true
        } else {
            text.value = text.value + ' ' + query.text
        }
    }
    )

}


 


</script>

<template>
    <nav class="bg-white fixed w-full z-10">
        <div class="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
            <RouterLink class="block text-teal-600" :to="{ name: 'home' }">
                <span class="sr-only">Home</span>
                <p class="text-3xl hover:scale-150 transition-all">💪🏻🗿</p>

            </RouterLink>

            <div class="flex flex-1 items-center justify-end md:justify-between">
                <nav aria-label="Global" class="hidden md:block">
                    <ul class="flex items-center gap-6 text-sm">


                        <div class="relative">
                            <label for="Search" class="sr-only"> Search </label>

                            <input v-model="query" type="text" id="Search" placeholder="Search for..."
                                class="w-full rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm" />

                            <span class="absolute inset-y-0 end-0 grid w-10 place-content-center">
                                <button type="button" class="text-gray-600 hover:text-gray-700" @click="search(query)">
                                    <span class="sr-only">Search</span>

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                    </svg>
                                </button>
                            </span>
                        </div>
                    </ul>
                </nav>

                <div class="flex items-center gap-4">
                    <div class="sm:flex sm:gap-4">
                        <div v-if="!authStore.isLoggedIn">
                            <RouterLink
                                class="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
                                :to="{ name: 'login' }">
                                Login
                            </RouterLink>
                        </div>
                        <div v-if="!authStore.isLoggedIn">
                            <RouterLink
                                class="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
                                :to="{ name: 'register' }">
                                Register
                            </RouterLink>
                        </div>
                    </div>

                    <div class="sm:flex sm:gap-4">
                        <div v-if="authStore.isLoggedIn">
                            <button @click="logout"
                                class="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400">
                                Logout
                            </button>
                        </div>

                        <div v-if="authStore.isLoggedIn">
                            <RouterLink
                                class="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
                                :to="{ name: 'profile' }">
                                Profile
                            </RouterLink>
                        </div>
                    </div>


                </div>
            </div>
        </div>
        <p class="w-3/4 mx-auto text-xs font-bold uppercase text-gray-900">Did u mean? <button @click="search(text)" class="hover:text-red-500">{{ text }}</button></p>

    </nav>
    <br>
    <br>
    <br>
    <br>
</template>