let getUser = JSON.parse(localStorage.getItem("Users"));
// console.log(getUser);
let allUser = [];
function signUp() {
    let obj = {
        firstname: firstName.value,
        lastname: lastName.value,
        email: mail.value,
        password: pass.value,
        mobile: mob.value,
        Bio: bio.value,
        todo: [],
        notes: [],
        contacts: [],
    }
    if (firstName.value && mail.value && pass.value && mob.value) {
        if (getUser != null) {
            allUser = getUser;
        }
        else {
            allUser = []
        }
        let findMail = allUser.find((val) => val.email == mail.value);
        if (findMail) {
            alert("Email already exists!");
            return;
        }
        
        let findNo = allUser.find((val) => val.mobile == mob.value);
        if (findNo) {
            alert("Phone already exists!");
            return;
        }
        allUser.push(obj);
        // console.log(allUser);
        localStorage.setItem("Users", JSON.stringify(allUser));
        window.location.href = "signIn.html";
    }
    else {
        alert("Please fill the spaces");
        return;
    }
}