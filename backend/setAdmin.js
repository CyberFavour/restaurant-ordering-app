const admin = require("firebase-admin");

const serviceAccount = require("./resturant-ordering-app-a7c1b-firebase-adminsdk-fbsvc-1b2206c828.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const email = "braidsbyfavy@gmail.com"; // your actual admin email

admin.auth().getUserByEmail(email)
  .then((user) => {
    return admin.auth().setCustomUserClaims(user.uid, { admin: true });
  })
  .then(() => {
    console.log("✅ Admin role assigned successfully.");
  })
  .catch((error) => {
    console.error("❌ Error assigning admin role:", error);
  });
