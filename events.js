let getUser = JSON.parse(localStorage.getItem("Users"));
let individual = JSON.parse(localStorage.getItem("person"))
let userArray;
for (let index = 0; index < getUser.length; index++) {
    if(getUser[index].email==mail){
        userArray = getUser[index].events
    }
}

var allEvent = [];
function saveEvent() {
    day = new Date().toLocaleDateString();
    currentTime = new Date().toLocaleTimeString();
    getUsers = { work: body.value, date : day, time: currentTime};
    userArray.push(getUsers);
    for (let index = 0; index < getUser.length; index++) {
        if(getUser[index].email==mail){
            getUser[index].events = userArray;
        }
    }
    localStorage.work=JSON.stringify(getUser);
    save()
}

function save (){
    let 
}

function deleteItem(index){
    for (let index = 0; i < userArray.length; i++) {
        console.log(userArray[i])
    }
    console.log(index)
    let confirmdel = confirm("Are you sure you want to delet this?")
    if (confirmdel){
        events = JSON.parse(localStorage.getItem("Users"))
        work[index].events[i].splice (index,i);
        console.log(events[index]);
        localStorage.setItem("work",JSON.stringify(events))
        location.reload()
    }
}