const loginButton = document.getElementById("loginComp")
const loginInvalid = document.getElementById("invalidLogin")

function store(){
    localStorage.setItem("user")
    localStorage.setItem("psw")
}


loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    let uid = doc.getElementById(user).value
    let uidPwd = doc.getElementById(psw).value

    if(user != "" && psw != ""){
        //need to update with final page location for succesful login
        window.location.assign("homepage.com")
        return true;
    }else{
        alert ("Login was unsuccessful, please check your username and password");
        return false;
    }

});


