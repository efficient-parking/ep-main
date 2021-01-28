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

  /*var targa_database = firebase.auth().currentUser.uid;*/
  return firebase.database().ref('users/' + targa + '/password').once('value').then((snapshot) => {
  var password_database = (snapshot.val() && snapshot.val().password) || 'Anonymous';
  if (password==password_database){
    console.log("La password è corretta");
  }
});

}
