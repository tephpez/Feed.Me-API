
// SURPRISE RECIPE GENERATOR ////////////////////////////////////////////////////////////////////
let surpriseButton = document.querySelector("#surpriseButton")

// ALWAYS INCLUDE PREVENTDEFAULT WHEN USING TEXT INPUT - ALTHOUGH IT WORKS WITHOUT IT...
async function getData (event){
    // event.preventDefault()
    let textInput = document.querySelector('#inputBar').value
    

// API URL
    const randomUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'


fetch(randomUrl)
// CONVERTING DATA TO JSON
    .then(res => {return res.json()})
// USING DATA TO PERFORM OUR FUNCTIONS
    .then(res => {
        console.log("Success!", res.meals[0].strMeal)
        let recipeName = document.querySelector('#recipeName')
        recipeName.innerText = res.meals[0].strMeal

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

        // let ingredient = document.querySelector('#ingredient')
        // ingredient.innerText = res.meals[0].strIngredient

        // let ingredient = document.querySelector('#ingredient')
        // ingredient.innerText = res.meals[0].strIngredient

        // let ingredient = document.querySelector('#ingredient')
        // ingredient.innerText = res.meals[0].strIngredient

        // let ingredient = document.querySelector('#ingredient')
        // ingredient.innerText = res.meals[0].strIngredient

        // let ingredient = document.querySelector('#ingredient')
        // ingredient.innerText = res.meals[0].strIngredient

        // let ingredient = document.querySelector('#ingredient')
        // ingredient.innerText = res.meals[0].strIngredient

        // let ingredient = document.querySelector('#ingredient')
        // ingredient.innerText = res.meals[0].strIngredient

        // let ingredient = document.querySelector('#ingredient')
        // ingredient.innerText = res.meals[0].strIngredient

        // let ingredient = document.querySelector('#ingredient')
        // ingredient.innerText = res.meals[0].strIngredient
        
    })
// ERROR FUNCTION FAILSAFE
    .catch(err => {
        console.log("Error!", err)
    })
}
surpriseButton.onclick = getData




// SEARCH RECIPE GENERATOR ////////////////////////////////////////////////////////////////////




// let searchButton = document.querySelector("#searchButton")

// // ALWAYS INCLUDE PREVENTDEFAULT WHEN USING TEXT INPUT - ALTHOUGH IT WORKS WITHOUT IT...
// async function getData (event){
//     // event.preventDefault()
//     let textInput = document.querySelector('#inputBar').value
    

// // API URL
//     const searchUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${textInput}`


// fetch(randomUrl)
// // CONVERTING DATA TO JSON
//     .then(res => {return res.json()})
// // USING DATA TO PERFORM OUR FUNCTIONS
//     .then(res => {
//         console.log("Success!", res.meals[0].strMeal)
//         let recipeName = document.querySelector('#recipeName')
//         recipeName.innerText = res.meals[0].strMeal
//     })
// // ERROR FUNCTION FAILSAFE
//     .catch(err => {
//         console.log("Error!", err)
//     })
// }
// surpriseButton.onclick = getData

//     // RECIPE IMAGE
//     let recipeImage = document.querySelector('#')
//     // GRAB RECIPE IMAGE FROM API
//     recipeImage.src = 


//     // INGREDIENTS LIST
//     // GRAB INGREDIENTS LIST FROM API

