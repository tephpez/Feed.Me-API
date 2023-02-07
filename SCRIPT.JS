

let button = document.querySelector("#searchButton")

// ALWAYS INCLUDE PREVENTDEFAULT WHEN USING TEXT INPUT - ALTHOUGH IT WORKS WITHOUT IT...
async function getData (event){
    // event.preventDefault()
    let textInput = document.querySelector('#inputBar').value
    

// API URL
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${textInput}`


fetch(url)
// CONVERTING DATA TO JSON
    .then(res => {return res.json()})
// USING DATA TO PERFORM OUR FUNCTIONS
    .then(res => {
        console.log("Success!", res.meals[0].strMeal)
        let recipeName = document.querySelector('#recipeName')
        recipeName.innerText = res.meals[0].strMeal
    })
// ERROR FUNCTION FAILSAFE
    .catch(err => {
        console.log("Error!", err)
    })
}
button.onclick = getData


//     // RECIPE IMAGE
//     let recipeImage = document.querySelector('#')
//     // GRAB RECIPE IMAGE FROM API
//     recipeImage.src = 


//     // INGREDIENTS LIST
//     // GRAB INGREDIENTS LIST FROM API

