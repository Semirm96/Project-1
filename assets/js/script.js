/*
Main script to handle restaurant information
*/

/*
navigation function to add meny ot all pages
*/

function insertMenu() {
    
    $("#menu-placeholder").load("nav.html", function () {
      // set the active menu item based on the name of the page
    var fileName = location.pathname.split("/").slice(-1)[0].split(".")[0];
    // using getElementByID as shown in class
    //https://api.jquery.com/load/ this gies an example of load with promise
    $("#" + fileName+ "menu")[0].classList.add("active");       

    });

};
  
insertMenu();

