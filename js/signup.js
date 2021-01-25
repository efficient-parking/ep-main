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

  var nome = getInputVal('nome');
  var targa = getInputVal('targa');
  var email = getInputVal('email');
  var telefono = getInputVal('telefono');
  var username = getInputVal('username');
  var password = getInputVal('password');

  saveMessage(nome, targa, email, telefono, username, password);

  document.querySelector('.alert').style.display = 'block';

  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  document.getElementById('contactForm').reset();
}

function getInputVal(id){
  return document.getElementById(id).value;
}

function saveMessage(nome, targa, email, telefono, username, password){
    var messagesRef = firebase.database().ref("users/"+ targa).set({
    nome: nome,
    targa:targa,
    email:email,
    telefono:telefono,
    username:username,
    password:password,
  });
}
