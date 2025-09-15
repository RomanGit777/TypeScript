// #whXxOBlYS0H
// – взяти https://dummyjson.com/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути списком під час відображення.

type RecipeType = {
        id: number;
        name: string;
        ingredients: string[];
        instructions: string[];
        prepTimeMinutes: number;
        cookTimeMinutes: number;
        servings: number;
        difficulty: string;
        cuisine: string;
        caloriesPerServing: number;
        tags: string[];
        userId: number;
        image: string;
        rating: number;
        reviewCount: number;
        mealType: string[];
    }
type IRecipeResponse = {
    recipes: RecipeType[];
    total: number;
    skip: number;
    limit: number;
}
const recipesDiv: HTMLDivElement = document.getElementById('recipes') as HTMLDivElement;

fetch('https://dummyjson.com/recipes')
    .then(value => value.json())
    .then((recipesObject: IRecipeResponse) => {
        const {recipes} = recipesObject;
        console.log(recipes);

        for (const recipe of recipes) {
            const div: HTMLDivElement = document.createElement('div');
            div.classList.add('div-container');
            const divWithInfo: HTMLDivElement = document.createElement('div');
            divWithInfo.innerText = `
                    id: ${recipe.id},
                    name: ${recipe.name}
                                    `
            const img: HTMLImageElement = document.createElement('img');
            img.classList.add('img');
            img.src = `${recipe.image}`;

                const ol: HTMLOListElement = document.createElement('ol');
            for (const ingredient of recipe.ingredients) {
                const li: HTMLLIElement = document.createElement('li');
                li.innerText = ingredient;
                    ol.append(li);
                }

            const time: HTMLParagraphElement = document.createElement('p');
            time.innerText = ` Time:
            prepTimeMinutes: ${recipe.prepTimeMinutes},
            cookTimeMinutes: ${recipe.cookTimeMinutes}
            `

            const info: HTMLParagraphElement = document.createElement('p');
            info.innerText = `
             difficulty: ${recipe.difficulty},
             cuisine: ${recipe.cuisine},
             caloriesPerServing: ${recipe.caloriesPerServing}
            `

            div.append(divWithInfo, img, ol, time, info);
            recipesDiv.appendChild(div);
            }
    });