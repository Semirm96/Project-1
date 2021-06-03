/*
 Script to handle signup and login
 Save/retrieve user login info and profiles
*/

const loginButton = document.getElementById("loginComp")
const loginInvalid = document.getElementById("invalidLogin")

function verifyLogin(id, pswd) {
    let accounts = getFromLocal("useraccounts");

    for (let i = 0; i < accounts.length; i++) {
        if (accounts[i][0] === id && accounts[i][1] === pswd) {
            // set the userID only as value for loggedIN in sessionStorage
            setToSession("loggedIn", accounts[i][0]);
            return true;
        }
    };

    return false;
}

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    let uid = document.getElementById("user").value
    let uidPwd = document.getElementById("psw").value
    if (verifyLogin(uid, uidPwd)) {

        //need to update with final page location for succesful login
        // this location is the profile page
        window.location.assign("profile.html")
        return true;
    } else {

        alert("Login was unsuccessful, please check your username and password");
        return false;
    }
});
