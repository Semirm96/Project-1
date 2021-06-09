/*
Main script to handle restaurant information
*/

/*
navigation function to add meny ot all pages
*/

let navHTML;

function createMenu() {
    let menu = $("<ul>");
    menu.attr("id", "menuTable");

    // profile menu item
    let lipro = $("<li>");
    lipro.attr("id", "profilemenu");
    let apro = $("<a>");
    apro.text("Profile");
    apro.attr("href", "profile.html")
    lipro.append(apro);

    //preferences menu item
    let lipre = $("<li>");
    lipre.attr("id", "preferencesmenu");
    let apre = $("<a>");
    apre.text("Preferences");
    apre.attr("href", "preferences.html")
    lipre.append(apre);

    // cocktail menu item
    let licktl = $("<li>");
    licktl.attr("id", "cocktailmenu");
    let acktl = $("<a>");
    acktl.text("Cocktails");
    acktl.attr("href", "cocktail.html")
    licktl.append(acktl);

    // favorites menu item
    let lifav = $("<li>");
    lifav.attr("id", "favoritesmenu");
    let afav = $("<a>");
    afav.text("Favorites");
    afav.attr("href", "favorites.html")
    lifav.append(afav);

    // logout menu item
    let lilogout = $("<li>");
    // no id needed for this menu item
    let alogout = $("<a>");
    alogout.text("Logout");
    alogout.attr("href", "index.html")
    alogout.attr("onclick", "return logoutUser();")
    lilogout.append(alogout);

    menu.append(lipro)
    menu.append(lipre);
    menu.append(licktl);
    menu.append(lifav);
    menu.append(lilogout);

    return menu;
}

navHTML = createMenu();

function insertMenu() {
    $("#menu-placeholder").append(navHTML)

    let usrImg = $("<img>");
    usrImg.attr("id", "menuUsrImg");
    usrImg.attr("width", "45");
    usrImg.attr("height", "45");
    $("#menu-placeholder").append(usrImg);

    let userLogged = $("<text>");
    userLogged.attr("id", "userLogged");

    // add user name to top-right menu area
    $("#menu-placeholder").append(userLogged);
    // set tet from user logged in  
    try {

        let logged = getFromSession("loggedIn");
        /*
        Found short way to find a match in an array of objects
        https://stackoverflow.com/questions/12462318/find-a-value-in-an-array-of-objects-in-javascript
        */
        let userObj = userAccounts.find(o => o.user === logged);

        if (logged === null) {
            $("#userLogged").text("NO USER LOGGED, DEBUG MODE !!!!");
        } else {
            $("#menuUsrImg").attr("src", userObj.imgSrc);
            $("#userLogged").text(userObj.name + "[" + logged + "]");
        }
    } catch (err) {
        // should not come here
    }

    // After the menu load is complete we can work with the navigation items
    // Set the active menu item based on the name of the page
    var fileName = location.pathname.split("/").slice(-1)[0].split(".")[0];
    //Using $() query as shown in class
    //https://api.jquery.com/load/ this gives an example of load with promise
    $("#" + fileName + "menu").addClass("active");
};

insertMenu();


function logoutUser() {
    removeFromSession("loggedIn");
    return true;
}
