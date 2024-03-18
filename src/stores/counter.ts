import type {Detail, Collection} from '@/type'
import { defineStore } from 'pinia'
export const useRecipeStore = defineStore('recipe', {
    state: () => ({
        currentRecipe: [] as Detail[],
        collection: [] as Collection[]
    }),
    actions: {
        setCurrentRecipe(recipe: Detail[]) {
          this.currentRecipe = recipe
        },
        setCollection(option: Collection[]){
          this.collection = option
        }
    }
})