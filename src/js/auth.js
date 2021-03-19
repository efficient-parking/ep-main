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

var targa = leggiCookie("Cookie");
document.getElementById('targa').innerHTML = targa;

reader(targa);

function reader(targa_account){
  var parcheggio;
  var entrata;

  firebase.database().ref().child("users").orderByChild("targa").equalTo(targa_account).once("value", function (snapshot) {
  snapshot.forEach(function(childSnapshot) {
  parcheggio = childSnapshot.val().parcheggio;
  document.getElementById('parcheggio').innerHTML = parcheggio;
  });
});

firebase.database().ref().child("users").orderByChild("targa").equalTo(targa_account).once("value", function (snapshot) {
  snapshot.forEach(function(childSnapshot) {
  entrata = childSnapshot.val().entrata;
  document.getElementById('entrata').innerHTML = entrata;
  });
 });
}

function leggiCookie(nomeCookie)
{
  if (document.cookie.length > 0)
  {
    var inizio = document.cookie.indexOf(nomeCookie + "=");
    if (inizio != -1)
    {
      inizio = inizio + nomeCookie.length + 1;
      var fine = document.cookie.indexOf(";",inizio);
      if (fine == -1) fine = document.cookie.length;
      return unescape(document.cookie.substring(inizio,fine));
    }else{
       return "";
    }
  }
  return "";
}
