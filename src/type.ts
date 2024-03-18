export interface Detail {
    RecipeId: number
    Name: string
    AuthorId: string
    AuthorName: string
    CookTime: string
    PrepTime: string
    TotalTime: string
    DatePublished: string
    Description: string
    Images: string[]
    RecipeIngredientQuantities: string
    RecipeIngredientParts: string
    RecipeInstructions: string
}

export interface User {
    id: number
    username: string
    roles: string[]
    folder: Folder[]
}

export interface Folder {
    id: number
    name: string
    userAccount: User
    recipeList: string[]
    baseFolder: boolean
}