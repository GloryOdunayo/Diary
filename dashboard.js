let allUsers = JSON.parse(localStorage.getItem("Users"))
let allNotes = []
function getPreviousNotes(){
    if(localStorage.allNotes)
    {
        allNotes = JSON.parse(localStorage.allNotes)
        console.log(allNotes)
    }
        // tenary operator
        allNotes = localStorage.allNotes?JSON.parse(localStorage.allNotes):[]
        console.log(allNotes)
}
function add(){
    let newNote = {
        note: notes.value
    }
    allNotes.push(newNote)
    localStorage.allNotes = JSON.stringify(allNotes)
    console.log(allNotes)
}