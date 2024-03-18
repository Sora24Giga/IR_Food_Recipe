import type {Detail} from '@/type'
import apiClient from "@/services/AxiosClient";
import type {AxiosResponse} from "axios";


export default {
    getRecipe(id: number): Promise<AxiosResponse<Detail[]>> {
        return apiClient.get<Detail[]>('/search?RecipeId=' + id)
    },

    searchRecipe(name: string):Promise<AxiosResponse<Detail[]>> {
        return apiClient.get<Detail[]>('/search_recipes?query='+ name)
    }
}