/*
Storage functonality for localStorage and sessionStorage
*/

/*
localStorage save and retrieval
*/

var obj = [1, 2, 3, 4];
var obj2;
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