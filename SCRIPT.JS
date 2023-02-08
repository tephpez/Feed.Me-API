///////////////////////////////////////////// 
/////// SURPRISE RECIPE GENERATOR ///////////
/////////////////////////////////////////////

// LOCATING SURPRISE BUTTON WITHIN THE HTML
let surpriseButton = document.querySelector("#surpriseButton");

// STATING THE FUNCTION (EVENT)
async function getSurpriseData (event) {
    // "PREVENTDEFAULT" - PREVENTS THE PAGE FROM RELOADING - ALWAYS INCLUDE WHEN USING TEXT INPUT
    // event.preventDefault()

    // API SOURCE
    const randomUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'

    // RETRIEVING DATA FROM API
    fetch(randomUrl)
        // CONVERTING DATA TO JSON
        .then(res => {return res.json()})
        // USING DATA TO PERFORM OUR FUNCTIONS
        .then(res => {
            // CONSOLE LOGGING THE RESPONSE TO GRAB DATA FROM
            console.log("success!", res.meals[0].strMeal)
            // POPULATING RECIPE NAME
            let recipeName = document.querySelector('#recipeName')
            recipeName.innerText = res.meals[0].strMeal
            // POPULATING INGREDIENTS
            let ingredient1 = document.querySelector('#ingredient1')
            ingredient1.innerText = res.meals[0].strIngredient1

            let ingredient2 = document.querySelector('#ingredient2')
            ingredient2.innerText = res.meals[0].strIngredient2

            let ingredient3 = document.querySelector('#ingredient3')
            ingredient3.innerText = res.meals[0].strIngredient3

            let ingredient4 = document.querySelector('#ingredient4')
            ingredient4.innerText = res.meals[0].strIngredient4

            let ingredient5 = document.querySelector('#ingredient5')
            ingredient5.innerText = res.meals[0].strIngredient5

            let ingredient6 = document.querySelector('#ingredient6')
            ingredient6.innerText = res.meals[0].strIngredient6

            let ingredient7 = document.querySelector('#ingredient7')
            ingredient7.innerText = res.meals[0].strIngredient7

            let ingredient8 = document.querySelector('#ingredient8')
            ingredient8.innerText = res.meals[0].strIngredient8

            let ingredient9 = document.querySelector('#ingredient9')
            ingredient9.innerText = res.meals[0].strIngredient9

            let ingredient10 = document.querySelector('#ingredient10')
            ingredient10.innerText = res.meals[0].strIngredient10

            let ingredient11 = document.querySelector('#ingredient11')
            ingredient11.innerText = res.meals[0].strIngredient11

            let ingredient12 = document.querySelector('#ingredient12')
            ingredient12.innerText = res.meals[0].strIngredient12

            let ingredient13 = document.querySelector('#ingredient13')
            ingredient13.innerText = res.meals[0].strIngredient13

            let ingredient14 = document.querySelector('#ingredient14')
            ingredient14.innerText = res.meals[0].strIngredient14

            let ingredient15 = document.querySelector('#ingredient15')
            ingredient15.innerText = res.meals[0].strIngredient15

            let ingredient16 = document.querySelector('#ingredient16')
            ingredient16.innerText = res.meals[0].strIngredient16

            let ingredient17 = document.querySelector('#ingredient17')
            ingredient17.innerText = res.meals[0].strIngredient17

            let ingredient18 = document.querySelector('#ingredient18')
            ingredient18.innerText = res.meals[0].strIngredient18

            let ingredient19 = document.querySelector('#ingredient19')
            ingredient19.innerText = res.meals[0].strIngredient19

            let ingredient20 = document.querySelector('#ingredient20')
            ingredient20.innerText = res.meals[0].strIngredient20
            // POPULATING DIRECTIONS
            let directions = document.querySelector('#directions')
            directions.innerText = res.meals[0].strInstructions

            // POPULATING IMAGE



        })
        // DEFINING ERROR FUNCTION FAILSAFE
        .catch(err => {
            console.log("Error!", err)
    })
}
// ASSIGNING FUNCTION CATALYST = HTML BUTTON ELEMENT
surpriseButton.onclick = getSurpriseData



///////////////////////////////////////////// 
//////// SEARCH RECIPE GENERATOR ////////////
/////////////////////////////////////////////

// LOCATING SEARCH BUTTON WITHIN THE HTML 
let searchButton = document.querySelector("#searchButton");

// STATING THE FUNCTION (EVENT)
async function getSearchData (event) {
    // "PREVENTDEFAULT" - PREVENTS THE PAGE FROM RELOADING - ALWAYS INCLUDE WHEN USING TEXT INPUT
    event.preventDefault()
    let textInput = document.getElementById("inputBar").value;
    
    // API SOURCE
    let searchUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?i="+textInput;
    let searchResult = "www.themealdb.com/api/json/v1/1/lookup.php?i="+res.meals[randomSearchRecipe].idMeal;

    // RETRIEVING DATA FROM API
    fetch(searchUrl)
        // CONVERTING DATA TO JSON
        .then(res => {return res.json()})
        // USING JSON TO PERFORM OUR FUNCTIONS
        .then(res => {
            // console.log("boop");
            console.log(res);
            // CODE FOR RANDOM RETURN VIA BRITTANY - https://www.jamesqquick.com/blog/build-a-javascript-memory-match-game/
            let randomSearchRecipe = Math.ceil(Math.random() * res.meals.length); // <<< RES.MEALS.LENGTH = TOTAL NUMBER OF RECIPES (11) - PICK ANUMBER BETWEEN 0 AND 11
            console.log("success!", res.meals[randomSearchRecipe].strMeal)
        })
        .catch(err => {
            console.log("Error!", err)
    })
}
searchButton.onclick = getSearchData

