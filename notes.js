display()
noteDetails =[]
const saveIt =() => {
    if (localStorage.getItem("Users")){
        noteDetails = JSON.parse(localStorage.getItem("Users")) 
    }
    let head = title.value;
    let body = notes.value;
    object ={
        title: head,
        note : body,
    }
    noteDetails.push(object)
    localStorage.setItem("Users", JSON.stringify(noteDetails));
    location.reload()
}

function display(){
    let tab =""
    noteDetails = JSON.parse(localStorage.getItem("Users"));
    for (let index = 0; index < noteDetails.length; index++) {
        tab +=`<h2 class="note_title id="noteTitle">${noteDetails[index].head}</h2>
        <p class= "note_body" id="noteBody>${noteDetails[index].body}</p> <div class ="note_btn"> <button onclick="edit(${index}) class_btn note_view">Edit</button> <button onclick="deleteNote(${index}) class_btn note_delete">Delete</button></div>`
    }
    console.log(noteDetails)
    displayIt.innerHTML = tab;
}

function deleteNote(index){
    noteDetails = JSON.parse(localStorage.getItem("Users"));
    noteDetails.splice(i,1)
    localStorage.setItem('Users', JSON.stringify(noteDetails))
    location.reload()
}

let editIt;
function edit(index){
    noteDetails = JSON.parse(localStorage.getItem("Users"))
    console.log(noteDetails)
    title.value = noteDetails[index].head;
    note.value = noteDetails[index].body;
    hov.style.display= "none"
    upd.style.display = "block";
    editIt =index;
}