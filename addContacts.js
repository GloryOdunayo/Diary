let getUser = JSON.parse(localStorage.getItem("Users"));
function saveContact() {
    let allContact = []
    let obj = {
        firstname: firstName.value,
        lastname: surName.value,
        phone: phoneNo.value,
        address: adDress.value,
        birthday: birthDay.value,
        company: comPany.value,
        department: dept.value,
        email: mail.value,
        website: web.value,
        notes: notes.value
    }
    if (firstName.value && phoneNo.value) {
        if (getUser != null) {
            allContact = getUser;
        }
        else {
            allContact = []
        }
        allContact.push(obj)
        localStorage.setItem("Users", JSON.stringify(allContact));
    }
    else {
        alert("Please fill apprpriately");
        return;
    }
   
    // dfg = allContact.push(obj)
    // console.log(dfg);
}