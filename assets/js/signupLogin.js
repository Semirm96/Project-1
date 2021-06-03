/*
 Script to handle signup and login
 Save/retrieve user login info and profiles
*/

const loginButton = document.getElementById("loginComp")
const loginInvalid = document.getElementById("invalidLogin")

function store(){
    localStorage.setItem("user")
    localStorage.setItem("psw")
}

function verifylogin(id, pswd) {

    localStorage()
}

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    let uid = document.getElementById("user").value
    let uidPwd = document.getElementById("psw").value
    if(uid != "" && uidPwd != ""){
        //need to update with final page location for succesful login
        // this location is the profile page
        window.location.assign("profile.html")
        return true;
    }else{
        alert ("Login was unsuccessful, please check your username and password");
        return false;
    }
});

function createAccnt()
{

// create var for name, d.o.b, email, phone number, address
const fullName = document.getElementById("name").value
const user = document.getElementById("user").value
const email = document.getElementById("email").value
const pwd = document.getElementById("psw").value
const confPwd= document.getElementById("conPsw").value

//Password constraints 
    let pswExp = [(a - z, A - Z, 0 - 9, _)];//(a-zA-Z0-9\-) (?=.*?[#?!@$%^&*-])];
let letters = [A-Za-z]+$;
    let charec = [(a - z, A - Z, 0 -9,_)]; //(a-zA-Z0-9\-)(?=.*?[#?!@$%^&*-])];


if (fullName =="")
{
alert('Name needed');
}
else if(!letters.test(fullName))
{
alert('Name field required only alphabet characters');
}

if (user =="")
{
alert('Username needed');
}
else if (!charec.test(user))
{
    alert('Username field required only alphabet characters');
}

if (email =="")
{
alert('Email needed');
}
else if (!letter.test(email))
{
alert(' Email Invalid ');
}

else if(pwd=='')
{
alert('Please enter Password');
}
else if(confPwd=='')
{
alert('Enter Confirm Password');
}
else if(!pswExp.test(pwd))
{
alert ('Password does not meet criteria. Upper case, Lower case, Special character and Numeric letter are required in Password filed');
}
else if(pwd != confPwd)
{
alert ('Passwords do not match');
}

if(document.getElementById("pws").value.length < 8)
{
alert ('Password minimum length is 8');
}
		
if(document.getElementById("pws").value.length > 12)
{
alert ('Password max length is 12');
}

document.getElementById("button").addEventListener("click", createAccnt);
}

//local storage func
function store() {
    localStorage.setItem("user");
    localStorage.setItem("pwd");
    localStorage.setItem("fullName")
    localStorage.setItem("confPwd")
    localStorage.setItem("email")
}