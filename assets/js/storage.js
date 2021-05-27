/*
Storage functonality for localStorage and sessionStorage
*/

/*
localStorage save and retrieval
*/

// get from localStorage
function getFromLocal(objName) {
    try {
        var retrievedObject = localStorage.getItem(objName);
    } catch (err) {
        // check type of exception
        console.log("Error reading from localStorage...")
    }
}

// save to local Storage
function setToLocal(obj, objName) {
    try {
        localStorage.setItem(objName, JSON.stringify(obj));
    } catch (err) {
        console.log("Error saving to localStorage...");
    }
}

/*
sessionStorage save and retrieval
*/
function getFromSession() {
    try {

    } catch (err) {
        console.log("Error reading from sessionStorage...")
    }

}

function setToSession() {
    try {
        
    } catch (err) {
        console.log("Error saving to sessionStorage...")
    }

}