var val = JSON.parse(localStorage.getItem("Users"));
var mail = JSON.parse(localStorage.getItem("email"));
let com, obj;
for (var i = 0; i < val.length; i++) {
    if (val[i].email == mail) {
        com = val[i].todo
    }
}

function load() {
    for (var i = com.length - 1; i >= 0; i--) {
        display.innerHTML += ` <div class="task d-flex justify-content-around align-items-center mx-auto mb-4 mt-4 ">
            <p>${com[i]}</p>
            <div> <button class="btn edit me-3" onclick='toEdit(${i})' data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button><button class="btn delete" onclick='toDelete(${i})'>Delete</button></div>
        </div>`
    }

}
const toDelete = (index) => {
    let filteredArray = com.filter((item, ind) => index != ind);
    com = filteredArray;
    for (var i = 0; i < val.length; i++) {
        if (val[i].email == mail) {
            val[i].todo = com;
            console.log(val[i].todo);
        }
    }
    display.innerHTML = "";
    load()
    localStorage.Users = JSON.stringify(val);
}
let ind;
const toEdit = (i) => {
    ind = i;
    editToDo.value = com[i];

}
const save = () => {
    com[ind] = editTodo.value;
    for (var i = 0; i < val.length; i++) {
        if (val[i].email == mail) {
            val[i].todo = com;
            console.log(val[i].todo);
        }
    }
    localStorage.Users = JSON.stringify(val);
    display.innerHTML = "";
    load();
}

function add() {
    if (todo.value != "") {
        com.push(todo.value);
        display.innerHTML = "";
        for (var i = com.length - 1; i >= 0; i--) {
            console.log(com[i]);
            display.innerHTML += ` <div class="task d-flex justify-content-around align-items-center mx-auto mb-4 mt-4 ">
            <p>${com[i]}</p>
            <div> <button class="btn edit me-3">Edit</button> <button class="btn delete" onclick='toDelete(${i})'>Delete</button></div>
        </div>`
        }
    }
    for (var i = 0; i < val.length; i++) {
        if (val[i].email == mail) {
            val[i].todo = com;
            console.log(val[i].todo);
        }
    }

    localStorage.Users = JSON.stringify(val);
    display.innerHTML = "";
    load();
}
const logout = () => {
    localStorage.removeItem("email");
}

function openNav() {
    document.getElementById("mySidenav").style.width = "140px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  function notinIn() {
    document.getElementById("mySidenav").style.width = "0";
  }