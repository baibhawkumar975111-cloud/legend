import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
getAuth,
createUserWithEmailAndPassword,
signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
apiKey: "AIzaSyD0bAbqftvWt5jd1k1dOFcR6oeBZ_qwjwY",
authDomain: "lunarhost-923f6.firebaseapp.com",
projectId: "lunarhost-923f6",
storageBucket: "lunarhost-923f6.firebasestorage.app",
messagingSenderId: "245861345265",
appId: "1:245861345265:web:c08f2c973d4d5d38f68650"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.addEventListener("DOMContentLoaded", () => {

const wrapper = document.querySelector(".auth-wrapper");
const registerBtn = document.querySelector(".register-trigger");
const loginBtn = document.querySelector(".login-trigger");

const signinForm = document.querySelector(".credentials-panel.signin form");
const signupForm = document.querySelector(".credentials-panel.signup form");

// Prevent crash if elements missing
if(!wrapper || !registerBtn || !loginBtn || !signinForm || !signupForm){
console.error("Login elements missing");
return;
}

// Toggle panels
registerBtn.onclick = (e)=>{
e.preventDefault();
wrapper.classList.add("toggled");
};

loginBtn.onclick = (e)=>{
e.preventDefault();
wrapper.classList.remove("toggled");
};

// Signup Firebase
signupForm.onsubmit = (e)=>{
e.preventDefault();

const inputs = signupForm.querySelectorAll("input");
const email = inputs[1].value.trim();
const password = inputs[2].value.trim();

createUserWithEmailAndPassword(auth,email,password)
.then(()=>{
alert("Registered! Now login");
signupForm.reset();
wrapper.classList.remove("toggled");
})
.catch(err=>alert(err.message));
};

// Login Firebase
signinForm.onsubmit = (e)=>{
e.preventDefault();

const inputs = signinForm.querySelectorAll("input");
const email = inputs[0].value.trim();
const password = inputs[1].value.trim();

signInWithEmailAndPassword(auth,email,password)
.then(()=>location.href="dashboard.html")
.catch(()=>alert("Invalid login"));
};

});
