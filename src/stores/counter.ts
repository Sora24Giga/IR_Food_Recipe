import type {Detail} from '@/type'
import { defineStore } from 'pinia'
export const useRecipeStore = defineStore('recipe', {
    state: () => ({
        currentRecipe: [] as Detail[]
    }),
    actions: {
        setCurrentRecipe(recipe: Detail[]) {
          this.currentRecipe = recipe
        },
    }
})