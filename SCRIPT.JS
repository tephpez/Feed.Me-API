///////////////////////////////////////////// 
//////// SEARCH RECIPE GENERATOR ////////////
/////////////////////////////////////////////

let searchButton = document.querySelector("#searchButton");  // LOCATING SEARCH BUTTON WITHIN THE HTML

async function getSearchData (event) {  // STATING THE FUNCTION (EVENT)
    event.preventDefault() // "PREVENTDEFAULT" - PREVENTS THE PAGE FROM RELOADING - ALWAYS INCLUDE WHEN USING TEXT INPUT
    let textInput = document.getElementById("inputBar").value;    // WHAT USER TYPES INTO INPUT BAR = TEXTINPUT
    
    let searchUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${textInput}`; // API SOURCE - FILTER BY MAIN INGREDIENT

    fetch(searchUrl)  // RETRIEVING DATA FROM API
        .then(res => {return res.json()})  // CONVERTING DATA TO JSON
        .then(res => {  // USING JSON FORMAT TO PERFORM OUR FUNCTIONS
            console.log(res);  // PULLING RECIPES TO CONSOLE LOG WHERE WE CAN ACCESS DATA

            if(res.meals === null){  // ERROR MESSAGE FOR NULL RESULTS
               document.querySelector('#noResultsContainer').style="" // RESTORES ERROR MESSAGE CONTAINER
               document.querySelector('#recipeNameContainer').style="display:none"  // HIDES EXISTNG RECIPE CONTAINERS
               document.querySelector('#recipeContainer').style="display:none"
            }
            let randomSearchRecipe = Math.ceil(Math.random() * res.meals.length);  // <<< RES.MEALS.LENGTH = TOTAL NUMBER OF RECIPES - PICK ANUMBER BETWEEN 0 AND # OF RECIPES
            console.log(res.meals[randomSearchRecipe].strMeal)  // FILTERING OUT OUR ONE RANDOM RECIPE
        
            let searchResult = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${res.meals[randomSearchRecipe].idMeal}`;     // API SOURCE - RANDOM FILTERED RESULT

            fetch(searchResult) 
                .then(res => { return res.json()})
                .then(res => {
                    console.log(res.meals)

            
                    let recipeName = document.querySelector('#recipeName')  // POPULATING RECIPE NAME
                    recipeName.innerText = res.meals[0].strMeal.toUpperCase()         
                    document.querySelector('#recipeNameContainer').style=""  // RESTORES RECIPE CONTAINERS
                    document.querySelector('#recipeContainer').style=""
                    document.querySelector('#noResultsContainer').style="display:none"   // HIDES ERROR MESSAGE CONTAINER         
                    
                    if(res.meals[0].strIngredient1 != null && res.meals[0].strIngredient1 != ""){    // POPULATING INGREDIENTS
                    let ingredient1 = document.querySelector('#ingredient1')
                    ingredient1.innerText = `${res.meals[0].strIngredient1.toLowerCase()}   -   ${res.meals[0].strMeasure1.toLowerCase()}`
                    }
                    if(res.meals[0].strIngredient2 != null && res.meals[0].strIngredient2 != ""){ 
                    let ingredient2 = document.querySelector('#ingredient2')
                    ingredient2.innerText = `${res.meals[0].strIngredient2.toLowerCase()}   -   ${res.meals[0].strMeasure2.toLowerCase()}`
                    }
                    if(res.meals[0].strIngredient3 != null && res.meals[0].strIngredient3 != ""){
                    let ingredient3 = document.querySelector('#ingredient3')
                    ingredient3.innerText = `${res.meals[0].strIngredient3.toLowerCase()}   -   ${res.meals[0].strMeasure3.toLowerCase()}`
                    }
                    if(res.meals[0].strIngredient4 != null && res.meals[0].strIngredient4 != ""){
                    let ingredient4 = document.querySelector('#ingredient4')
                    ingredient4.innerText = `${res.meals[0].strIngredient4.toLowerCase()}   -   ${res.meals[0].strMeasure4.toLowerCase()}`
                    }
                    if(res.meals[0].strIngredient5 != null && res.meals[0].strIngredient5 != ""){
                    let ingredient5 = document.querySelector('#ingredient5')
                    ingredient5.innerText = `${res.meals[0].strIngredient5.toLowerCase()}   -   ${res.meals[0].strMeasure5.toLowerCase()}`
                    }
                    if(res.meals[0].strIngredient6 != null && res.meals[0].strIngredient6 != ""){
                    let ingredient6 = document.querySelector('#ingredient6')
                    ingredient6.innerText = `${res.meals[0].strIngredient6.toLowerCase()}   -   ${res.meals[0].strMeasure6.toLowerCase()}`
                    }
                    if(res.meals[0].strIngredient7 != null && res.meals[0].strIngredient7 != ""){
                    let ingredient7 = document.querySelector('#ingredient7')
                    ingredient7.innerText = `${res.meals[0].strIngredient7.toLowerCase()}   -   ${res.meals[0].strMeasure7.toLowerCase()}`
                    }
                    if(res.meals[0].strIngredient8 != null && res.meals[0].strIngredient8 != ""){
                    let ingredient8 = document.querySelector('#ingredient8')
                    ingredient8.innerText = `${res.meals[0].strIngredient8.toLowerCase()}   -   ${res.meals[0].strMeasure8.toLowerCase()}`
                    }
                    if(res.meals[0].strIngredient9 != null && res.meals[0].strIngredient9 != ""){
                    let ingredient9 = document.querySelector('#ingredient9')
                    ingredient9.innerText = `${res.meals[0].strIngredient9.toLowerCase()}   -   ${res.meals[0].strMeasure9.toLowerCase()}`
                    }
                    if(res.meals[0].strIngredient10 != null && res.meals[0].strIngredient10 != ""){
                    let ingredient10 = document.querySelector('#ingredient10')
                    ingredient10.innerText = `${res.meals[0].strIngredient10.toLowerCase()}   -   ${res.meals[0].strMeasure10.toLowerCase()}`
                    }
                    if(res.meals[0].strIngredient11 != null && res.meals[0].strIngredient11 != ""){
                    let ingredient11 = document.querySelector('#ingredient11')
                    ingredient11.innerText = `${res.meals[0].strIngredient11.toLowerCase()}   -   ${res.meals[0].strMeasure11.toLowerCase()}`
                    }
                    if(res.meals[0].strIngredient12 != null && res.meals[0].strIngredient12 != ""){
                    let ingredient12 = document.querySelector('#ingredient12')
                    ingredient12.innerText = `${res.meals[0].strIngredient12.toLowerCase()}   -   ${res.meals[0].strMeasure12.toLowerCase()}`
                    }
                    if(res.meals[0].strIngredient13 != null && res.meals[0].strIngredient13 != ""){
                    let ingredient13 = document.querySelector('#ingredient13')
                    ingredient13.innerText = `${res.meals[0].strIngredient13.toLowerCase()}   -   ${res.meals[0].strMeasure13.toLowerCase()}`
                    }
                    if(res.meals[0].strIngredient14 != null && res.meals[0].strIngredient14 != ""){
                    let ingredient14 = document.querySelector('#ingredient14')
                    ingredient14.innerText = `${res.meals[0].strIngredient14.toLowerCase()}   -   ${res.meals[0].strMeasure14.toLowerCase()}`
                    }
                    if(res.meals[0].strIngredient15 != null && res.meals[0].strIngredient15 != ""){
                    let ingredient15 = document.querySelector('#ingredient15')
                    ingredient15.innerText = `${res.meals[0].strIngredient15.toLowerCase()}   -   ${res.meals[0].strMeasure15.toLowerCase()}`
                    }
                    if(res.meals[0].strIngredient16 != null && res.meals[0].strIngredient16 != ""){
                    let ingredient16 = document.querySelector('#ingredient16')
                    ingredient16.innerText = `${res.meals[0].strIngredient16.toLowerCase()}   -   ${res.meals[0].strMeasure16.toLowerCase()}`
                    }
                    if(res.meals[0].strIngredient17 != null && res.meals[0].strIngredient17 != ""){
                    let ingredient17 = document.querySelector('#ingredient17')
                    ingredient17.innerText = `${res.meals[0].strIngredient17.toLowerCase()}   -   ${res.meals[0].strMeasure17.toLowerCase()}`
                    }
                    if(res.meals[0].strIngredient18 != null && res.meals[0].strIngredient18 != ""){
                    let ingredient18 = document.querySelector('#ingredient18')
                    ingredient18.innerText = `${res.meals[0].strIngredient18.toLowerCase()}   -   ${res.meals[0].strMeasure18.toLowerCase()}`
                    }
                    if(res.meals[0].strIngredient19 != null && res.meals[0].strIngredient19 != ""){
                    let ingredient19 = document.querySelector('#ingredient19')
                    ingredient19.innerText = `${res.meals[0].strIngredient19.toLowerCase()}   -   ${res.meals[0].strMeasure19.toLowerCase()}`
                    }
                    if(res.meals[0].strIngredient20 != null && res.meals[0].strIngredient20 != ""){
                    let ingredient20 = document.querySelector('#ingredient20')
                    ingredient20.innerText = `${res.meals[0].strIngredient20.toLowerCase()}   -   ${res.meals[0].strMeasure20.toLowerCase()}`
                    }


                    let directions = document.querySelector('#directions') // POPULATING DIRECTIONS
                    directions.innerText = res.meals[0].strInstructions


                    let recipeImage = document.querySelector('#recipeImage') // POPULATING IMAGE
                    recipeImage.src = res.meals[0].strMealThumb 
                })
        })
        .catch(err => {
            console.log("Error!", err)   // DEFINING ERROR FUNCTION
    })
}
searchButton.onclick = getSearchData  // SETTING THE TRIGGER FOR THE ABOVE FUNCTIONS



