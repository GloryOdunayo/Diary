let allUsers = JSON.parse(localStorage.getItem("Users"))
function detailOfTheUser(){
    let userDetail = allUsers.find((val) => val.email && val.password)
    console.log(userDetail)
    let fname = userDetail.firstname
    let lname = userDetail.lastname
    let mail = userDetail.email
    let no = userDetail.mobile
    let fullname = fname + " " + lname
    allname.innerHTML = fullname
    usersMail.innerHTML = mail
    pNo.innerHTML = no
}
``
// function getNote(){
//     let userDetail = allUsers.find((val) => val.note)
    
// }