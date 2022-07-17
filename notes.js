var allUsers = JSON.parse(localStorage.getItem("Users"));
var indUser = JSON.parse(localStorage.getItem("email"));
let com, obj;
for (var i = 0; i < allUsers.length; i++) {
    if (allUsers[i].email == indUser) {
        com = allUsers[i].notes
    }
}


function load() {
    for (var i = com.length - 1; i >= 0; i--) {

        book.innerHTML += `<div class="container cal bg-success card mb-2 d-flex justify-content-around">
            <div class="fs-3 text-light">${com[i].title}</div>
            <p class="text-light">${com[i].notes}</p>

            <div class="container d-flex justify-content-end ">
                <div><button class="btn edit me-3" onclick= 'edit(${i})'  data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button> <button class="btn delete" onclick= 'del(${i})'>Del</button> </div>
            </div>
        </div>`
    }

}

const del = (index) => {
    let array = com.filter((item, ind) => index != ind);
    com = array;
    for (var i = 0; i < allUsers.length; i++) {
        if (allUsers[i].email == indUser) {
            allUsers[i].notes = com;
            console.log(allUsers[i].notes);
        }
    }
    book.innerHTML = "";
    load()
    localStorage.Users = JSON.stringify(allUsers);

}
let ind;
const edit = (i) => {
    ind = i;
    etitle.value = com[i].title;
    econtent.value = com[i].notes;
}
const save = () => {
    com[ind].title = etitle.value;
    com[ind].notes = econtent.value;
    for (var i = 0; i < allUsers.length; i++) {
        if (allUsers[i].email == indUser) {
            allUsers[i].notes = com;
            console.log(allUsers[i].notes);
        }
    }
    localStorage.data = JSON.stringify(allUsers);
    book.innerHTML = "";
    load();
}

function addNote() {
    obj = {
        title: head.value,
        notes: body.value,
    }
    com.push(obj);
    book.innerHTML = "";
    load()
    head.value = "";
    body.value = "";
    for (var i = 0; i < allUsers.length; i++) {
        if (allUsers[i].email == indUser) {
            allUsers[i].notes = com;
            console.log(allUsers[i].notes);
        }
    }
    localStorage.Users = JSON.stringify(allUsers);

}
const logout = () => {
    localStorage.removeItem("email");
}