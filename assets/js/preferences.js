const myButton = document.getElementById("button");

const myKey = "9563d22f74ff4552b2625a960d02ba89";

let myData = null;
let myRecipeData = null;

const myHolding = document.getElementById("holding");

// front part of url (can be called on its own but can be updated based on check boxes)
const myFetch = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${myKey}&instructions&Required=boolean&number=12`;

//set vaiables to checkboxes
const myAmerican = document.getElementById("American");
const myChinese = document.getElementById("Chinese");
const myIndian = document.getElementById("Indian");
const myItalian = document.getElementById("Italian");
const myThai = document.getElementById("Thai");
const myMexican = document.getElementById("Mexican");

const createCards = (test) => {
    for (let i = 0; i < myData.results.length; i++) {
        const myColumn = document.createElement("div");
        myColumn.className = "col m2";

        const myHeight = document.createElement("div");
        myHeight.className = "card small";
        myHeight.style = "overflow: visible;";
        myHeight.value = myData.results[i].id;

        myHeight.onclick = () => {
            const myRecipeId = myHeight.value;
            // this will be used to make the api call when a user clicks on an image they would like the recipe for
            const myRecipe = `https://api.spoonacular.com/recipes/${myRecipeId}/information?apiKey=${myKey}`;

            fetch(myRecipe)
                .then(function (response) {
                    return response.json();
                })

                .then(function (data) {
                    myRecipeData = data;
                    const myInnerTitle = document.createElement("span");
                    myInnerTitle.className = "card-title grey-text text-darken-4";
                    myInnerTitle.innerText = "Recipe!";

                    const myRecipe = document.createElement("p");
                    myRecipe.className = "myScroll";
                    myRecipe.innerHTML = myRecipeData.instructions;
                    myReveal.appendChild(myInnerTitle);
                    myReveal.appendChild(myRecipe);
                    myHeight.onclick = null
                });
        };

        const myActive = document.createElement("div");
        myActive.className = "card-image waves-effect waves-block waves-light";

        const myImage = document.createElement("img");
        myImage.className = "activator";
        myImage.src = myData.results[i].image;
        myImage.alt = myData.results[i].title;

        const myContent = document.createElement("div");
        myContent.className = "card-content";

        const myTitle = document.createElement("span");
        myTitle.className = "fontsize card-title activator grey-text text-darken-4";
        myTitle.innerText = myData.results[i].title;

        const myReveal = document.createElement("div");
        myReveal.className = "card-reveal marginSet";
        myReveal.style = "display: none; transform: translateY(0%);";

        test.appendChild(myColumn)
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


const createSections = () => {
    const myCheckboxes = document.querySelectorAll('input:checked')

    for (let index = 0; index < myCheckboxes.length; index++) {

        const mySearch = myFetch + `&cuisine=${myCheckboxes[index].value}`;

        fetch(mySearch)
            .then(function (response) {
                return response.json();
            })

            .then(function (data) {
                myData = data;
                console.log(myData);

                let appendRow = null



               // for (let index = 0; index < myCheckboxes.length; index++) {
                    const myHeader = document.createElement("h2");
                    myHeader.innerText = myCheckboxes[index].value;
                    myHeader.style = "text-align: center; font-size: 18px; font-weight: bold;";



                    const myRow = document.createElement("div");
                    myRow.className = "row";
                    myRow.id = `section${myCheckboxes[index].value}`
                    myHolding.appendChild(myHeader);
                    myHeader.appendChild(myRow);

                    appendRow = myRow
                    console.log(appendRow)

                    createCards(appendRow);
               // };
            })
    }
}
