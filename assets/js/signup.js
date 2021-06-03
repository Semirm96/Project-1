
document.getElementById("button").addEventListener("click", createAccnt);

function isUserRegistered(user) {
    var found = false;
    for(var i = 0; i < userAccounts.length; i++) {
        if (userAccounts[i].user == user) {
            found = true;
            break;
        }
    }
}

function createAccnt() {

    // create var for name, d.o.b, email, phone number, address
    const fullName = document.getElementById("name").value
    const user = document.getElementById("user").value
    const email = document.getElementById("email").value
    const pwd = document.getElementById("psw").value
    const confPwd = document.getElementById("conPsw").value

    let valid = true;
    let tmppUser = user;
    //Password constraints 
    /* regular expression for different cases
    https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
    */
    // Minimum eight characters, at least one letter and one number:
    let pswExp = /(a - z, A - Z, 0 -9_)(a - zA - Z0 - 9\-)(?=.*? [# ? !@$%^&* -])/;
    /*/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;*/

    let letters = [A - Za - z] + $;
    let charec = /(a-z,A-Z,0-9_)(a-zA-Z0-9\-)(?=.*?[#?!@$%^&*-])/;


    if (fullName == "") {
        alert('Name needed');
        valid = false;
    }
    else if (!letters.test(fullName)) {
        alert('Name field required only alphabet characters');
        valid = false;
    }

    if (user == "") {
        alert('Username needed');
        valid = false;
    }
    else if (!charec.test(user)) {
        alert('Username field required only alphabet characters');
        valid = false;
    }

    if (email == "") {
        alert('Email needed');
        valid = false;
    }
    else if (!letter.test(email)) {
        alert(' Email Invalid ');
        valid = false;
    }

    else if (pwd == '') {
        alert('Please enter Password');
        valid = false;
    }
    else if (confPwd == '') {
        alert('Enter Confirm Password');
        valid = false;
    }
    else if (!pswExp.test(pwd)) {
        alert('Password does not meet criteria. Upper case, Lower case, Special character and Numeric letter are required in Password filed');
        valid = false;
    }
    else if (pwd != confPwd) {
        alert('Passwords do not match');
        valid = false;
    }

    if (document.getElementById("pws").value.length < 8) {
        alert('Password minimum length is 8');
        valid = false;
    }

    if (document.getElementById("pws").value.length > 12) {
        alert('Password max length is 12');
        valid = false;
    }

    if (valid) {
        
        if (!isUserRegistered(user)) {
            addUser(fullName, user, email, pwd);
        } else {
            alert("User already registered.");
        }
    }
}

//store account using standard functions from storage.js
/*
function store() {
    let usr = user;

    //the account should be an object see storage.js
    localStorage.setItem("user");
    localStorage.setItem("pwd");
    localStorage.setItem("fullName")
    localStorage.setItem("confPwd")
    localStorage.setItem("email")
}
*/