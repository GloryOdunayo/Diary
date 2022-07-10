// display()
let allUsers = JSON.parse(localStorage.getItem("Users"));
let indUser = JSON.parse(localStorage.getItem("email"));
let com,obj;
for (let i = 0; i < allUsers.length; i++) {
    if (allUsers[i].email == indUser) {
        com = allUsers[i].notes
    }
}

function addNote() {
    obj = {
        title: head.value,
        notes: body.value,
    }
    com.push(obj);
    displayIt.innerHTML = "";
    // onl()
    title = "";
    notes = "";
    for (var i = 0; i < allUsers.length; i++) {
        if (allUsers[i].email == indUser) {
            allUsers[i].notes = com;
            console.log(allUsers[i].notes);
        }
    }
    localStorage.Users = JSON.stringify(allUsers);

}

// function addNote() {
//     obj = {
//         title: head.value,
//         notes: body.value,
//     }
//     com.push(obj);
//     displayIt.innerHTML = "";
//     title = "";
//     notes = "";
//     for (var i = 0; i < allUsers.length; i++) {
//         if (allUsers[i].email == indUser) {
//             allUsers[i].notes = com;
//             console.log(allUsers[i].notes);
//         }
//     }
//     localStorage.Users = JSON.stringify(allUsers);
//     head.value = "";
//     body.value = "";
// }
const logout = () => {
    localStorage.removeItem("email");
}