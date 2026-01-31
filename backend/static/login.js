// ---------------------------------------------------------
// 1. Import Firebase libraries from the CDN
// ---------------------------------------------------------
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } 
from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

// ---------------------------------------------------------
// 2. Firebase will be configured here
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
// 3. Initialise Firebase using your config
// ---------------------------------------------------------
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ---------------------------------------------------------
// 4. Login function (runs when user clicks Login button)
// ---------------------------------------------------------
window.login = function () {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Firebase login request
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Login successful
            const user = userCredential.user;

            // Redirect based on role (we will improve this later)
            const role = localStorage.getItem("role");

            if (role === "admin") {
                window.location.href = "/admin";
            } else {
                window.location.href = "/";
            }
        })
        .catch((error) => {
            alert(error.message);
        });
}
