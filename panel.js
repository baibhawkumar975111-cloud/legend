const user = localStorage.getItem("loggedInUser");

if(!user){
location.href="index.html";
}

function logout(){
localStorage.removeItem("loggedInUser");
location.href="index.html";
}

document.addEventListener("DOMContentLoaded", ()=>{
let u = document.getElementById("usernameDisplay");
if(u) u.innerText = user;
});
