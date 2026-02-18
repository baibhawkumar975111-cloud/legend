import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth,onAuthStateChanged,signOut }
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

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

// WAIT for Firebase session
onAuthStateChanged(auth,user=>{
if(!user){
location.href="index.html";
}
});

// logout
window.logout=()=>{
signOut(auth).then(()=>location.href="index.html");
};
