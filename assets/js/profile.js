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

fetchAccountEntry(id){
    for (let i = 0; i < userAccounts.length; i++){
        if (userAccounts[i].user === id) {
            return i;
        }
    }
    return -1;
}
function saveUserData() {

    // find account 
    let entry = fetchAccountEntry();

    if ((entry >= 0) && (entry < userAccounts.length)) {
        userAccounts[etry].name = ;
        userAccounts[etry].email = ;
        userAccounts[etry].pswd = ;
    } else {
        // should no come here
        alertt("no user logged in ");
    }


    /*
    nameIn.removeAttribute("readonly");
    idIn.removeAttribute("readonly");
    emailIn.removeAttribute("readonly");
    pswdIn.removeAttribute("readonly");

    confPswdLabel.removeAttribute("hidden");
    confPswdIn.removeAttribute("hidden");
    confPswdIn.removeAttribute("readonly");
    */
}

//editUserData();

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
        enableEdit(editMode);
        saveUserData();

    } else {
        // Enter edit mode
        editMode = false;
        editSaveBtn.innerText = "Save";
        enableEdit(editMode);

    }



});