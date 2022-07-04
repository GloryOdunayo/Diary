let allNotes = [];
    let newNote = {
        note: notes.value
    }
function saveIt(){
    allNotes.push(newNote);
        if(notes.value){
            localStorage.setItem("notes", JSON.stringify(allNotes));
    }
    else {
        alert("Please input something into the spaces");
    }
}
// let findNotes = allNotes.find((val) => val.email == mail.value)
// console.log(findNotes);
// if (findNotes) {
//     alert("Login successful");
//     window.location.href ="dashboard.html"
// }
// else{
//     alert("Account does not exist, Please sign up");
//     return "Please sign up first"
// }  