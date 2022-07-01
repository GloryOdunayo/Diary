let allUsers = JSON.parse(localStorage.getItem("Users"))
function signIn(){  
    let findUsers = allUsers.find((val) => val.email == mail.value)
    console.log(findUsers);
    if (findUsers) {
        alert("Login successful");
        window.location ="dashboard.html"
    }
    else{
        alert("Account does not exist, Please sign up");
        return "Please sign up first"
    }   
}