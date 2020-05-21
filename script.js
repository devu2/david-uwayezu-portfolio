
var firebaseConfig = {
  apiKey: "AIzaSyAEkQwRgh41W0B9JGxIFvaGgBsfv1dw0vY",
  authDomain: "contact-f17dd.firebaseapp.com",
  projectId: "contact-f17dd",
  storageBucket: "contact-f17dd.appspot.com",
  messagingSenderId: "137197972884",
  appId: "1:137197972884:web:1c3bd4e9a22dfefc7df381",
};

firebase.initializeApp(firebaseConfig);

var firestore = firebase.firestore();

const db = firestore.collection("contactMeFormData");

let button = document.getElementById("submit");

button.addEventListener("click", (e) => {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let comment = document.getElementById("comment").value;

  db.doc()
    .set({
      name: name,
      email: email,
      comment: comment,
    })
    .then(() => {
      window.alert("Thank you! We have received your message!");
    })
    .catch((error) => {
      window.alert(error);
    });
});
