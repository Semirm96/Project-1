/*
Main script to handle restaurant information
*/

/*
navigation function to add meny ot all pages
*/

let navHTML;

function createMenu() {
    let menu = $("<ul>");

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
    lilogout.append(alogout);

    menu.append(lipro)
    menu.append(lipre);
    menu.append(lifav);
    menu.append(lilogout);

    return menu;
}

navHTML = createMenu();

function insertMenu() {
    $("#menu-placeholder").append(navHTML)
    
    let usrImg = $("<img>");
    usrImg.attr("id", "menuUsrImg");
    $("#menu-placeholder").append(usrImg);

    let userLogged = $("<text>");
    userLogged.attr("id", "userLogged");
   
    // add user name to top-right menu area
    $("#menu-placeholder").append(userLogged);
     // set tet from user logged in  
     try{
        $("#userLogged").text(getFromSession("loggedIn"));
    }catch(err){
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

