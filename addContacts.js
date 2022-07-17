let getUser = JSON.parse(localStorage.getItem("Users"));
let indUser = JSON.parse(localStorage.getItem("email"))
function saveContact() {
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
        notes: notes.value,
        picture: pic.value
    }
    // let newcontact = {"cont": contact}
    if (firstName.value && phoneNo.value && pic.value) {
        if (getUser != null) {
            allContact = getUser;
        }
        else {
            allContact = []
        }
        allContact.push(newcontact)
        localStorage.setItem("email", JSON.stringify(allContact));
    }
    else {
        alert("Please fill apprpriately");
        return;
    }
    // dfg = allContact.push(obj)
    // console.log(dfg);
}
// const goBack=()=>{
//   location.href = "/dashboard.html";
// }

// // Some random colors
// const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];

// const numBalls = 50;
// const balls = [];

// for (let i = 0; i < numBalls; i++) {
//   let ball = document.createElement("div");
//   ball.classList.add("ball");
//   ball.style.background = colors[Math.floor(Math.random() * colors.length)];
//   ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
//   ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
//   ball.style.transform = `scale(${Math.random()})`;
//   ball.style.width = `${Math.random()}em`;
//   ball.style.height = ball.style.width;
  
//   balls.push(ball);
//   document.body.append(ball);
// }

// // Keyframes
// balls.forEach((el, i, ra) => {
//   let to = {
//     x: Math.random() * (i % 2 === 0 ? -11 : 11),
//     y: Math.random() * 12
//   };

//   let anim = el.animate(
//     [
//       { transform: "translate(0, 0)" },
//       { transform: `translate(${to.x}rem, ${to.y}rem)` }
//     ],
//     {
//       duration: (Math.random() + 1) * 2000, // random duration
//       direction: "alternate",
//       fill: "both",
//       iterations: Infinity,
//       easing: "ease-in-out"
//     }
//   );
// });