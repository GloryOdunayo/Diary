let allUsers = JSON.parse(localStorage.getItem("Users"))
function login(){  
    let findUsers = allUsers.find((val) => val.email == mail.value)
    console.log(findUsers);
    if (findUsers) {
        alert("Login successful");
        window.location.href ="dashboard.html"
    }
    else{
        alert("Account does not exist, Please sign up");
        return;
    } 
    window.location.href = "dashboard.html";  
}

function sign(){
    window.location.href = "index.html" 
}