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

if ((name != '') || (targa != '') || (email != '') || (phonenumber != '') || (username != '') || (password != '')){
  saveMessage(name, targa, email, phonenumber, username, password);
}


}

function getInputVal(id){
  return document.getElementById(id).value;
}

function saveMessage(name, targa, email, phonenumber, username, password){
    var messagesRef = firebase.database().ref("users/"+ targa).set({
    name: name,
    targa:targa,
    email:email,
    phonenumber:phonenumber,
    username:username,
    password:password,
  });
}
