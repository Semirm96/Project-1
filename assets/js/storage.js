/*
Storage functonality for localStorage and sessionStorage
*/

/*
localStorage save and retrieval
*/

/* -- DELETE -- variables used to test storage functionality
var obj = [1, 2, 3, 4];
var obj2;
*/

/* learn about json objects in javascript here:
https://stackoverflow.com/questions/2799283/use-a-json-array-with-objects-with-javascript
*/
//user account variables
var user = { "name": "", "userName": "", "email": "", "pswd": "" };
var userAccounts = [{ "user": "1", "pswd": "a" }, { "user": "2", "pswd": "b" }];


// get from localStorage
function getFromLocal(objName) {
    try {
        return  JSON.parse(localStorage.getItem(objName));
    } catch (err) {
        // check type of exception
        console.log("Error reading from localStorage...")
    }
}

// save to local Storage
function setToLocal(objName, obj) {
    try {
        localStorage.setItem(objName, JSON.stringify(obj));
    } catch (err) {
        console.log("Error saving to localStorage...");
    }
}

/* -- DELETE -- Test code to save and retrieves from localStorage

setToLocal(obj, "localObj");
obj2 = getFromLocal("localObj");
*/

/*
sessionStorage save and retrieval
*/
function getFromSession(objName) {
    try {
        return  JSON.parse(sessionStorage.getItem(objName));
    } catch (err) {
        console.log("Error reading from sessionStorage...")
    }
}

function setToSession(objName, obj ) {
    try {
        sessionStorage.setItem(objName, JSON.stringify(obj));
    } catch (err) {
        console.log("Error saving to sessionStorage...")
    }
}

/* -- DELETE -- Test code to save and retrieve to Session Storage

setToSession(obj, "sessionObj");
obj2 = getFromSession("sessionObj");
*/

//login and signup storage utility functions

function getUsers() {
    try {
        let val = JSON.parse(getFromLocal("userAccounts"));
        if (val != undefined) {
            userAccounts = val;
        }
    } catch (err) {
        
    }
}

function storeUsers() {
    setToLocal("userAccounts", userAccounts);
};

function addUser(name, usrName,email, pswd) {
    let newUsr = user;

    newUsr.name = name;
    newUsr.userName = usrName;
    newUsr.email = email;
    newUsr.pswd = pswd;

    userAccounts.push(newUsr);
};