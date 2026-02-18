<script type="module">
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

export const firebaseConfig = {
  apiKey: "AIzaSyD0bAbqftvWt5jd1k1dOFcR6oeBZ_qwjwY",
  authDomain: "lunarhost-923f6.firebaseapp.com",
  projectId: "lunarhost-923f6",
  storageBucket: "lunarhost-923f6.firebasestorage.app",
  messagingSenderId: "245861345265",
  appId: "1:245861345265:web:c08f2c973d4d5d38f68650"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
</script>
