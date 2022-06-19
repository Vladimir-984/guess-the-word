export enum WordComplexityEnum {
   EASY = 1,
   MEDIUM = 2,
   HARD = 3,
}

export enum WordCategoryEnum {
   ANIMALS = 1,
   CITIES = 2,
   COUNTRIES = 3,
   NATURE = 4,
   HOBBY = 5,
   POPULAR = 6,
   FOOD = 7,
   VOCABULARY = 8,
}

export interface IWord {
   id: string
   category: string
   complexity: number
   word: string
}
