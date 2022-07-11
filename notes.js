// display()
let allUsers = JSON.parse(localStorage.getItem("Users"))
let indUser = JSON.parse(localStorage.getItem("email"))
noteDetails =[]
const saveIt =() => {
    if (localStorage.getItem("Users")){
        noteDetails = JSON.parse(localStorage.getItem("Users")) 
    }

    object ={
        title: head.value,
        note : body.value,
    }
    noteDetails.push(object)
    localStorage.setItem("Users", JSON.stringify(noteDetails));   
    location.reload()
}

// let title = head.value;
// let note = body.value;
// function saveIt() {
//     if (localStorage.user){
//         noteDetails = JSON.parse(localStorage.user);
//     }
//     noteDetails.push(allUsers.notes);
//     localStorage.Users =JSON.stringify(noteDetails);
//     location.reload()

// }

function display() {
    let tab =""
    noteDetails = JSON.parse(localStorage.getItem("Users"));
    for (let index = 13; index < noteDetails.length; index++) {
        tab +=`<h2 class="note_title id="noteTitle">${noteDetails[index].title}</h2>
        <p class= "note_body" id="noteBody>${noteDetails[index].note}</p> <div class ="note_btn"> <button onclick="editNote(${index}) class_btn note_view">Edit</button> <button onclick="deleteNote(${index}) class_btn note_delete">Delete</button></div>`
    }
    console.log(noteDetails)
    displayIt.innerHTML = tab;
    // localStorage.setItem("Users", JSON.stringify(noteDetails));
}

// const deleteNote = (index)=>{
//     console.log(index)
//     let filteredArray =myArray2.filter((item,ind)=>index!=ind)
//     myArray2 = filteredArray
//     disp.innerHTML =""
//     showDetails()

// const editItem = (index)=>{
//     myArray2[index]= {name:"sade",age:1000,school:"Emilokan High School"}
//     disp.innerHTML =""
//     showDetails()
// }
// }
// let filteredArray =myArray2.filter((item,ind)=>index!=ind)
//     myArray2 = filteredArray
//     disp.innerHTML =""

// function deleteNote (index) {
//     noteDetails = JSON.parse(localStorage.getItem("Users"));
//     // console.log(noteDetails)
//     noteDetails.splice(index,1)
//     localStorage.setItem('Users', JSON.stringify(noteDetails))
//     location.reload()
//     noteDetail = JSON.parse(localStorage.getItem("Users"));
//     noteDetail.splice(index,1)
//     localStorage.setItem('Users', JSON.stringify(noteDetail))
//     location.reload()
// }

// let editIt;
// function edit(index){
//     noteDetail = JSON.parse(localStorage.getItem("Users"))
//     console.log(noteDetail)
//     title.value = noteDetail[index].head;
//     note.value = noteDetail[index].body;
//     hov.style.display= "none"
//     upd.style.display = "block";
//     editIt =index;
// }

function update(){
    noteDetails = JSON.parse(localStorage.getItem("Users"))
    noteDetails.splice(editIt,1,{
        title: head,
        note : body, 
    })
    localStorage.Users = JSON.stringify(noteDetails)
    location.reload()
}