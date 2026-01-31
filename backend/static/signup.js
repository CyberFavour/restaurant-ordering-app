// ---------------------------------------------------------
// 1. Import Firebase libraries
// ---------------------------------------------------------
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } 
from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

// ---------------------------------------------------------
// 2. Firebase configuration (same as login.js)
// ---------------------------------------------------------
const firebaseConfig = {
  apiKey: "YOUR_API_KEY_HERE",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// ---------------------------------------------------------
// 3. Initialise Firebase
// ---------------------------------------------------------
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ---------------------------------------------------------
// 4. Signup function
// ---------------------------------------------------------
window.signup = function () {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Create user in Firebase
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // New users are customers by default
            localStorage.setItem("role", "customer");

            alert("Account created!");
            window.location.href = "login.html";
        })
        .catch((error) => {
            alert(error.message);
        });
}
