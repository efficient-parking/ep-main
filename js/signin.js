var firebaseConfig = {
    apiKey: "AIzaSyCiyMeZGhfZ79ZWoQr9pdq_ORvoi3IfQHg",
    authDomain: "efficientparking-62353.firebaseapp.com",
    databaseURL: "https://efficientparking-62353.firebaseio.com",
    projectId: "efficientparking-62353",
    storageBucket: "efficientparking-62353.appspot.com",
    messagingSenderId: "635987202169",
    appId: "1:635987202169:web:f84df6aa067197953b84a8"
  };

firebase.initializeApp(firebaseConfig);

document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e){
  e.preventDefault();

  var targa = getInputVal('targa');
  var password = getInputVal('password');
  console.log(password);
  var password_database;
  var targa_database;

  firebase.database().ref().child("users").orderByChild("targa").equalTo(targa).once("value", function (snapshot) {
    snapshot.forEach(function(childSnapshot) {
    targa_database = childSnapshot.val().targa;
    console.log(targa_database);
    });
    if (targa==targa_database){
      firebase.database().ref().child("users").orderByChild("targa").equalTo(targa).once("value", function (snapshot) {
        snapshot.forEach(function(childSnapshot) {
        password_database = childSnapshot.val().password;
        console.log(password_database);
        });
        if(password == password_database){
          console.log("1");
          window.location.href = "service.html";
        }
        else{
          console.log("0");
          }
       });
     }
    else{
     console.log("Non è avvenuto il login");
     }
  });
}

function getInputVal(id){
  return document.getElementById(id).value;
}
