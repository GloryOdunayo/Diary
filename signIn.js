let allUsers = JSON.parse(localStorage.getItem("Users"))
let indUser = JSON.parse(localStorage.getItem("email"))
let object = {
    email: mail.value,
    notes: [],
    contact: [],
    events: [] 
}
function login(){  
    let findUsers = allUsers.find((val) => val.userMail == mail.value && val.password == pass.value)
    console.log(findUsers);
    if (findUsers) {
        alert("Login successful");
        localStorage.email = JSON.stringify.mail.value
        window.location.href ="dashboard.html"
    }
    else{
        alert("Incorrect email or password");
        return;
    }  
}

function sign(){
    window.location.href = "index.html" 
}