<script setup lang="ts">
import { useRecipeStore } from '@/stores/counter'
import { RouterLink, RouterView, onBeforeRouteUpdate } from 'vue-router'
import DetailVue from "@/views/Detail.vue"

//
import DetailService from '@/services/DetailService';
import type { Detail } from '@/type';
import type { AxiosResponse } from 'axios';
import { ref, type Ref } from 'vue'
const detail: Ref<Detail> = ref(null)


const recipe = useRecipeStore()
const storeRecipe = ref(recipe.currentRecipe)
storeRecipe.value = recipe.currentRecipe

onBeforeRouteUpdate(() => {
    storeRecipe.value = recipe.currentRecipe
})

console.log(storeRecipe.value)


//modal
import { FwbButton, FwbModal } from 'flowbite-vue'

const isShowModal = ref(false)

function closeModal() {
    isShowModal.value = false
}
function showModal(id) {
    isShowModal.value = true
    modalDetail(id)
}

//Detail modal
function modalDetail(id: number){
let queryFunction = DetailService.getRecipe(id)
queryFunction
    .then((response: AxiosResponse<Detail[]>) => {
        detail.value = response.data[0]
        image.value = detail.value.Images[0]
        ingredient.value = detail.value.RecipeIngredientParts
        instruction.value = detail.value.RecipeInstructions
    })
}

const ingredient: Ref<Array<Detail>> = ref([])
const instruction: Ref<Array<Detail>> = ref([])
const image = ref('')

storeRecipe.value = recipe.currentRecipe

onBeforeRouteUpdate(() => {
    storeRecipe.value = recipe.currentRecipe
})

console.log(storeRecipe.value)

//end

</script>
<template>
    <nav class="w-3/4 mx-auto">
        <button v-for="i in storeRecipe" :key="i.RecipeId" class="flex bg-white transition hover:shadow-xl mb-5 w-full"
            @click="showModal(i.RecipeId)">

            <div class="hidden sm:block sm:basis-56">
                <img alt="" :src="i.Images[0]" class="aspect-square h-full w-full object-cover" />
            </div>

            <div class="flex flex-1 flex-col justify-between text-left">
                <div class="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                    <a href="#">
                        <h3 class="font-bold uppercase text-gray-900">
                            {{ i.Name }}
                        </h3>
                    </a>

                    <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                        {{ i.Description }}
                    </p>
                </div>
            </div>
        </button>
    </nav>


    <fwb-modal v-if="isShowModal" @close="closeModal" size="5xl">
        <template #body>
            <section class="bg-white">
                <div class="lg:grid h-[calc(100vh-4rem)] lg:grid-cols-12">
                    <section class="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
                        <img alt="" :src="image" class="absolute inset-0 h-full w-full object-cover opacity-80" />

                        <div class="hidden lg:relative lg:block lg:p-12">

                        </div>
                    </section>

                    <main
                        class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6 overflow-auto">
                        <div class="w-full h-[calc(100vh-4rem)]">

                            <div class="flow-root rounded-lg border border-gray-100 py-3 shadow-sm">
                                <dl class="-my-3 divide-y divide-gray-100 text-sm">
                                    <div class="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                                        <dt class="font-medium text-gray-900">Name</dt>
                                        <dd class="text-gray-700 sm:col-span-2">{{ detail.Name }}</dd>
                                    </div>

                                    <div class="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                                        <dt class="font-medium text-gray-900">Ingredient</dt>
                                        <dd class="text-gray-700 sm:col-span-2">
                                            <p v-for="d in ingredient">{{ d }}</p>
                                        </dd>
                                    </div>


                                    <div class="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                                        <dt class="font-medium text-gray-900">Cooking Step</dt>
                                        <dd class="text-gray-700 sm:col-span-2">
                                            <p v-for="d in instruction">{{ d }}</p>
                                        </dd>
                                    </div>

                                    <div class="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                                        <dt class="font-medium text-gray-900">Rating</dt>
                                        <dd class="text-gray-700 sm:col-span-2">
                                            <!-- Rating -->
                                            <div class="flex flex-row-reverse justify-end items-center">
                                                <input id="hs-ratings-readonly-1" type="radio"
                                                    class="peer -ms-5 size-5 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0"
                                                    name="hs-ratings-readonly" value="1">
                                                <label for="hs-ratings-readonly-1"
                                                    class="peer-checked:text-yellow-400 text-gray-300 pointer-events-none dark:peer-checked:text-yellow-600 dark:text-gray-600">
                                                    <svg class="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg"
                                                        width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                        <path
                                                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                    </svg>
                                                </label>
                                                <input id="hs-ratings-readonly-2" type="radio"
                                                    class="peer -ms-5 size-5 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0"
                                                    name="hs-ratings-readonly" value="2">
                                                <label for="hs-ratings-readonly-2"
                                                    class="peer-checked:text-yellow-400 text-gray-300 pointer-events-none dark:peer-checked:text-yellow-600 dark:text-gray-600">
                                                    <svg class="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg"
                                                        width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                        <path
                                                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                    </svg>
                                                </label>
                                                <input id="hs-ratings-readonly-3" type="radio"
                                                    class="peer -ms-5 size-5 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0"
                                                    name="hs-ratings-readonly" value="3">
                                                <label for="hs-ratings-readonly-3"
                                                    class="peer-checked:text-yellow-400 text-gray-300 pointer-events-none dark:peer-checked:text-yellow-600 dark:text-gray-600">
                                                    <svg class="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg"
                                                        width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                        <path
                                                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                    </svg>
                                                </label>
                                                <input id="hs-ratings-readonly-4" type="radio"
                                                    class="peer -ms-5 size-5 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0"
                                                    name="hs-ratings-readonly" value="4">
                                                <label for="hs-ratings-readonly-4"
                                                    class="peer-checked:text-yellow-400 text-gray-300 pointer-events-none dark:peer-checked:text-yellow-600 dark:text-gray-600">
                                                    <svg class="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg"
                                                        width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                        <path
                                                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                    </svg>
                                                </label>
                                                <input id="hs-ratings-readonly-5" type="radio"
                                                    class="peer -ms-5 size-5 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0"
                                                    name="hs-ratings-readonly" value="5">
                                                <label for="hs-ratings-readonly-5"
                                                    class="peer-checked:text-yellow-400 text-gray-300 pointer-events-none dark:peer-checked:text-yellow-600 dark:text-gray-600">
                                                    <svg class="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg"
                                                        width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                        <path
                                                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                    </svg>
                                                </label>
                                            </div>
                                            <!-- End Rating -->

                                            <br>

                                            <fieldset>
                                                <legend class="sr-only">Checkboxes</legend>

                                                <div class="space-y-2">
                                                    <label for="Option1" class="flex cursor-pointer items-start gap-4">
                                                        <div class="flex items-center">
                                                            &#8203;
                                                            <input type="checkbox"
                                                                class="size-4 rounded border-gray-300" id="Option1" />
                                                        </div>

                                                        <div>
                                                            <strong class="font-medium text-gray-900"> Bookmark
                                                            </strong>
                                                        </div>
                                                    </label>

                                                </div>
                                            </fieldset>
                                        </dd>

                                    </div>

                                </dl>

                            </div>
                        </div>
                    </main>
                </div>
            </section>
        </template>
    </fwb-modal>

</template>
