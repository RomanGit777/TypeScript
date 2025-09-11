// #whXxOBlYS0H
// – взяти https://dummyjson.com/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути списком під час відображення.

const recipesDiv = document.getElementById('recipes');

fetch('https://dummyjson.com/recipes')
    .then(value => value.json())
    .then(recipesObject => {
        const {recipes} = recipesObject;
        console.log(recipes);

        for (const recipe of recipes) {
            const div = document.createElement('div');
            div.classList.add('div-container');
            const divWithInfo = document.createElement('div');
            divWithInfo.innerText = `
                    id: ${recipe.id},
                    name: ${recipe.name}
                                    `
            const img = document.createElement('img');
            img.classList.add('img');
            img.src = `${recipe.image}`;

                const ol = document.createElement('ol');
            for (const ingredient of recipe.ingredients) {
                const li = document.createElement('li');
                li.innerText = ingredient;
                    ol.append(li);
                }

            const time = document.createElement('p');
            time.innerText = ` Time:
            prepTimeMinutes: ${recipe.prepTimeMinutes},
            cookTimeMinutes: ${recipe.cookTimeMinutes}
            `

            const info = document.createElement('p');
            info.innerText = `
             difficulty: ${recipe.difficulty},
             cuisine: ${recipe.cuisine},
             caloriesPerServing: ${recipe.caloriesPerServing}
            `

            div.append(divWithInfo, img, ol, time, info);
            recipesDiv.appendChild(div);
            }
    });