/*
 Script to handle signup and login
 Save/retrieve user login info and profiles
*/

const loginButton = document.getElementById("loginComp")
const loginInvalid = document.getElementById("loginMsg")

function verifyLogin(id, pswd) {
    getUsers(); /*getFromSession("useraccounts");*/
    let accounts = userAccounts;

    if ( (accounts === null) || (accounts.lenght === 0)) {
        return false;
    }

    for (let i = 0; i < accounts.length; i++) {
        if (accounts[i].user === id && accounts[i].pswd === pswd) {
            // set the userID only as value for loggedIN in sessionStorage
            setToSession("loggedIn", accounts[i].user);
            return true;
        }
    };

    // no user logged in report it in menu area
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
        
        loginInvalid.innerText = "Invalid login, please try again.";
        setTimeout(function(){ window.location.assign("index.html") }, 1500);
        return false;
    }
});
