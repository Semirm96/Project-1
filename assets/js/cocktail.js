const myButton = document.getElementById("button");

let myData = null;
let myCocktailData = null;

const myHolding = document.getElementById("holding");

// front part of url (can be called on its own but can be updated based on check boxes)
const myFetch = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=`;

//set vaiables to checkboxes
const myAmerican = document.getElementById("Rum");
const myChinese = document.getElementById("Vodka");
const myIndian = document.getElementById("Tequila");
const myItalian = document.getElementById("Gin");
const myThai = document.getElementById("Whiskey");
const myMexican = document.getElementById("Bourbon");

//Dynamically creates cocktail cards based on api call
const createCards = (test) => {
  for (let i = 0; i < myData.drinks.length; i++) {
    const myColumn = document.createElement("div");
    myColumn.className = "col m2";

    const myHeight = document.createElement("div");
    myHeight.className = "card small";
    myHeight.style = "overflow: visible;";
    myHeight.value = myData.drinks[i].idDrink;

    myHeight.onclick = () => {
      const myCockatilId = myHeight.value;
      // this will be used to make the api call when a user clicks on an image they would like the recipe for
      const myCocktail = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${myCockatilId}`;

      fetch(myCocktail)
        .then(function (response) {
          return response.json();
        })

        .then(function (data) {
          myRecipeData = data;
          console.log(myRecipeData);

          const myInnerTitle = document.createElement("span");
          myInnerTitle.className = "card-title grey-text text-darken-4";
          myInnerTitle.innerText = "Cocktail!";

          let appendRecipe = null;

          const myRecipe = document.createElement("p");
          myRecipe.className = "myScroll";
          myRecipe.innerHTML = myRecipeData.drinks[0].strInstructions;
          myRecipe.id = `cockatil${myData.drinks[i].idDrink}`;

          appendRecipe = myRecipe;

          myReveal.appendChild(myInnerTitle);
          myReveal.appendChild(myRecipe);

          createRecipeList(appendRecipe);

          myHeight.onclick = null;
        });
    };

    const myActive = document.createElement("div");
    myActive.className = "card-image waves-effect waves-block waves-light";

    const myImage = document.createElement("img");
    myImage.className = "activator";
    myImage.src = myData.drinks[i].strDrinkThumb;
    myImage.alt = myData.drinks[i].strDrink;

    const myContent = document.createElement("div");
    myContent.className = "card-content";

    const myTitle = document.createElement("span");
    myTitle.className = "fontsize card-title activator grey-text text-darken-4";
    myTitle.innerText = myData.drinks[i].strDrink;

    const myReveal = document.createElement("div");
    myReveal.className = "card-reveal marginSet";
    myReveal.id = `card${myHeight.value}`;
    myReveal.style = "display: none; transform: translateY(0%);";

    test.appendChild(myColumn);
    myColumn.appendChild(myHeight);
    myHeight.appendChild(myActive);
    myHeight.appendChild(myReveal);
    myActive.appendChild(myImage);
    myHeight.appendChild(myContent);
    myContent.appendChild(myTitle);
  }
};

//function that checks which boxes are validated
myButton.onclick = function () {
  createSections();
};

//checks which buttons are checked and then runs api calls on them
const createSections = () => {
  const myCheckboxes = document.querySelectorAll("input:checked");

  for (let index = 0; index < myCheckboxes.length; index++) {
    const mySearch = myFetch + myCheckboxes[index].value;

    fetch(mySearch)
      .then(function (response) {
        return response.json();
      })

      .then(function (data) {
        myData = data;

        let appendRow = null;

        const myHeader = document.createElement("h2");
        myHeader.innerText = myCheckboxes[index].value;
        myHeader.style =
          "text-align: center; font-size: 18px; font-weight: bold;";

        const myRow = document.createElement("div");
        myRow.className = "row";
        myRow.id = `section${myCheckboxes[index].value}`;
        myHolding.appendChild(myHeader);
        myHeader.appendChild(myRow);

        appendRow = myRow;

        createCards(appendRow);
      });
  }
};

//array that holds the list of ingredients (we loop over this to create the recipe when each card is clicked)(this is combined with the seconds array)
const createRecipeList = (test) => {
  const myIngredients = [
    myRecipeData.drinks[0].strIngredient1,
    myRecipeData.drinks[0].strIngredient2,
    myRecipeData.drinks[0].strIngredient3,
    myRecipeData.drinks[0].strIngredient4,
    myRecipeData.drinks[0].strIngredient5,
    myRecipeData.drinks[0].strIngredient6,
    myRecipeData.drinks[0].strIngredient7,
    myRecipeData.drinks[0].strIngredient8,
    myRecipeData.drinks[0].strIngredient9,
    myRecipeData.drinks[0].strIngredient10,
    myRecipeData.drinks[0].strIngredient11,
    myRecipeData.drinks[0].strIngredient12,
    myRecipeData.drinks[0].strIngredient13,
    myRecipeData.drinks[0].strIngredient14,
    myRecipeData.drinks[0].strIngredient15,
  ];

  const myMeasure = [
    myRecipeData.drinks[0].strMeasure1,
    myRecipeData.drinks[0].strMeasure2,
    myRecipeData.drinks[0].strMeasure3,
    myRecipeData.drinks[0].strMeasure4,
    myRecipeData.drinks[0].strMeasure5,
    myRecipeData.drinks[0].strMeasure6,
    myRecipeData.drinks[0].strMeasure7,
    myRecipeData.drinks[0].strMeasure8,
    myRecipeData.drinks[0].strMeasure9,
    myRecipeData.drinks[0].strMeasure10,
    myRecipeData.drinks[0].strMeasure11,
    myRecipeData.drinks[0].strMeasure12,
    myRecipeData.drinks[0].strMeasure13,
    myRecipeData.drinks[0].strMeasure14,
    myRecipeData.drinks[0].strMeasure15,
  ];

  //for loop to check if the api has sent us a null or '' value (all good results are displayed on the cards when clicked)
  for (let i = 0; i < myIngredients.length; i++) {
    let ingredients = myIngredients[i];
    let measure = myMeasure[i];

    if (myIngredients[i] != null && myIngredients[i] != "") {
      const myIngredientList = document.createElement("li");
      myIngredientList.innerText = `${ingredients} ${measure}`;
      test.appendChild(myIngredientList);
    }
  }
};
