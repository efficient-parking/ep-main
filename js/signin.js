var config = {
    apiKey: "AIzaSyCiyMeZGhfZ79ZWoQr9pdq_ORvoi3IfQHg",
    authDomain: "efficientparking-62353.firebaseapp.com",
    databaseURL: "https://efficientparking-62353.firebaseio.com",
    projectId: "efficientparking-62353",
    storageBucket: "efficientparking-62353.appspot.com",
    messagingSenderId: "635987202169",
    appId: "1:635987202169:web:f84df6aa067197953b84a8"
  };
firebase.initializeApp(config);

function SignIn(){
  var targa = getInputVal('targa');
  var password = getInputVal('password');

  var targa_database = firebase.database().ref('users/' + targa);
  var password_database = firebase.database().ref('users/' + targa + "/password");
  document.write(targa_database);
  document.write(password_database);
  });
