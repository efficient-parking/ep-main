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

  var name = getInputVal('name');
  var targa = getInputVal('targa');
  var email = getInputVal('email');
  var phonenumber = getInputVal('phonenumber');
  var username = getInputVal('username');
  var password = getInputVal('password');
  var stato = "no";
  var targa_database;
  var email_database;

  var res = 0
  function emailIsValid (email) {
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) == true){
      res = 1;
    }
    else{
      res = 0;
    }
}

emailIsValid(email);

if ((name != '') && (targa != '') && (email != '') && (res == 1) && (phonenumber != '') && (username != '') && (password != '')){
  firebase.database().ref().child("users").orderByChild("targa").equalTo(targa).once("value", function (snapshot) {
    snapshot.forEach(function(childSnapshot) {
    targa_database = childSnapshot.val().targa;
    });
        if (targa!=targa_database){
         firebase.database().ref().child("users").orderByChild("targa").equalTo("email").once("value", function (snapshot) {
         snapshot.forEach(function(childSnapshot) {
         email_database = childSnapshot.val().email;
           });
          if(email!=email_database){
            saveMessage(name, targa, email, phonenumber, username, password, stato);
            console.log(1)
            document.querySelector('.alert').style.display = 'block';
            setTimeout(function(){
            document.querySelector('.alert').style.display = 'none';
          },4000);
          setTimeout(function(){redirect()},4000);
          }
          else{
           document.querySelector('.alert-email').style.display = 'block';
           setTimeout(function(){
           document.querySelector('.alert-email').style.display = 'none';
         },6000);
         }
       });
      }
 else {
  document.querySelector('.alert-targa').style.display = 'block';
      setTimeout(function(){
      document.querySelector('.alert-targa').style.display = 'none';
    },6000);
    }
  });
 }
}

function getInputVal(id){
  return document.getElementById(id).value;
}

function saveMessage(name, targa, email, phonenumber, username, password, stato){
    var messagesRef = firebase.database().ref("users/"+ targa).set({
    name: name,
    targa:targa,
    email:email,
    phonenumber:phonenumber,
    username:username,
    password:password,
    stato:stato,
  });
}

function redirect(){
   window.location.href = 'splash_signin.html';}
