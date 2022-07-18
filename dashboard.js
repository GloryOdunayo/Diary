let allUsers = JSON.parse(localStorage.getItem("Users"))
let indUser = JSON.parse(localStorage.getItem("email"));
function detailOfTheUser(){
    let userDetail = allUsers.find((val) => val.email && val.password)
    console.log(userDetail)
    let fname = userDetail.firstname
    let lname = userDetail.lastname
    let mail = userDetail.email
    let no = userDetail.mobile
    let info = userDetail.bio
    let fullname = fname + " " + lname
    allname.innerHTML = fullname
    usersMail.innerHTML = mail
    pNo.innerHTML = no
    bio.innerHTML = info
}
// function getNote(){
//     let userDetail = allUsers.find((val) => val.note)
    
// }
function logout(){
  window.location.href = "signin.html"
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
