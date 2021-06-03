/*
Storage functonality for localStorage and sessionStorage
*/

/*
localStorage save and retrieval
*/

/* variables used to test storage functionality
var obj = [1, 2, 3, 4];
var obj2;
*/

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
function setToLocal(obj, objName) {
    debugger;
    try {
        localStorage.setItem(objName, JSON.stringify(obj));
    } catch (err) {
        console.log("Error saving to localStorage...");
    }
}

/*  Test code to save and retrieves from localStorage

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

function setToSession(obj, objName) {
    try {
        sessionStorage.setItem(objName, JSON.stringify(obj));
    } catch (err) {
        console.log("Error saving to sessionStorage...")
    }
}

/* Test code to save and retrieve to Session Storage

setToSession(obj, "sessionObj");
obj2 = getFromSession("sessionObj");
*/