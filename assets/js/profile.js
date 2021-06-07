/* 
profile page functionality
*/

const nameIn = document.getElementById("nameinput");
const idIn = document.getElementById("idinput");
const emailIn = document.getElementById("emailinput");
const pswdIn = document.getElementById("pswdinput");
const confPswdLabel = document.getElementById("confpswdlabel");
const confPswdIn = document.getElementById("confpswdinput");
const editSaveBtn = document.getElementById("usreditBtn");
let editMode = false;

function fetchAccountEntry() {
    let id = getFromSession("loggedIn");
    for (let i = 0; i < userAccounts.length; i++){
        if (userAccounts[i].user === id) {
            return i;
        }
    }
    return -1;
}

function fetchUserData() {

    // find account 
    let entry = fetchAccountEntry();

    if ((entry >= 0) && (entry < userAccounts.length)) {
        nameIn.value = userAccounts[entry].name;
        idIn.value = userAccounts[entry].user;
       emailIn.value = userAccounts[entry].email;
       pswdIn.value = userAccounts[entry].pswd;
    } else {
        // should no come here !!!!
        alert("no user logged in ");
    }
}

fetchUserData();

function saveUserData() {

    // find account 
    let entry = fetchAccountEntry();

    if ((entry >= 0) && (entry < userAccounts.length)) {
        userAccounts[entry].name = nameIn.value ;
        userAccounts[entry].email = emailIn.value;
        userAccounts[entry].pswd = pswdIn.value;
        storeUsers();
    } else {
        // should no come here !!!!
        alertt("no user logged in ");
    }

}

function enableEdit(set) {
    nameIn.readOnly = set;
    emailIn.readOnly = set;
    pswdIn.readOnly = set;

    confPswdLabel.hidden = set;
    confPswdIn.hidden = set;
    confPswdIn.readOnly = set;
}

editSaveBtn.addEventListener("click", (e) => {
    if (editMode) {
        // Exit edit mode and save updates
        editMode = false;
        editSaveBtn.innerText = "Edit";
        enableEdit(!editMode);
        saveUserData();
    } else {
        // Enter edit mode
        editMode = true;
        editSaveBtn.innerText = "Save";
        enableEdit(!editMode);
    }
});