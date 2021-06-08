/* 
profile page functionality
*/

const usrImg = document.getElementById("userImg");
const imgSel = document.getElementById("imgSelect");
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
        usrImg.src = userAccounts[entry].imgSrc;
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
        if (imgSel.value != "") {
            // if user selected a new picture, update their profile pic
            userAccounts[entry].imgSrc = "./assets/images/" + imgSel.files[0].name;
            $("#menuUsrImg").attr("src", userAccounts[entry].imgSrc);
        }
        
        storeUsers();
    } else {
        // should no come here !!!!
        alert("no user logged in ");
    }
}

function enableEdit(set) {
    nameIn.readOnly = set;
    emailIn.readOnly = set;
    pswdIn.readOnly = set;

    confPswdLabel.hidden = set;
    confPswdIn.hidden = set;
    confPswdIn.readOnly = set;

    imgSel.hidden = set;
    imgSel.readonly = set;
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

usrImg.addEventListener("click", (e) =>  {
    // creating input on-the-fly
    var input = $(document.createElement("input"));
    input.attr("type", "file");
    input.attr("value", "./assets/images/")
    input.trigger("click"); // opening dialog
    return false; // avoiding navigation
});

/* Found interesting way to select images
http://jsfiddle.net/Bwj2D/11/

Saving the name of the file within user account in localStorge

*/
imgSel.addEventListener("change", (e) => {
   
        var file = /*document.getElementById('imgSel')*/imgSel.files[0];
        var reader  = new FileReader();
        reader.onload = function(e)  {
            // showing image in profile placeholder, not in the 
            // top menu yet because user has not clicked on "save"
            usrImg.src = e.target.result;;
         }
         reader.readAsDataURL(file);
     
});

