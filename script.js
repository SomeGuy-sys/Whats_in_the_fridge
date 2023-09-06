const API_KEY = '2a39ed8e13404052beeaf9c9d0f9b965';
const BASE_URL = 'https://api.spoonacular.com/recipes/findByIngredients';

function fetchRecipes() {
    const ingredients = document.getElementById('ingredients').value;
    
    fetch(`${BASE_URL}?apiKey=${API_KEY}&ingredients=${ingredients}&number=10`)
        .then(response => response.json())
        .then(data => displayRecipes(data))
        .catch(error => console.error('Error:', error));
}

function displayRecipes(recipes) {
    const ul = document.getElementById('recipes');
    ul.innerHTML = ''; // clear the previous results
    recipes.forEach(recipe => {
        const li = document.createElement('li');
        li.innerHTML = `
            <a href="https://spoonacular.com/recipes/${recipe.title}-${recipe.id}">
                ${recipe.title}
            </a>
        `;
        ul.appendChild(li);
    });
}