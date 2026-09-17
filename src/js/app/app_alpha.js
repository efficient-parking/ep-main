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
  var stato_ok = "ok";
  var stato;
  var parcheggio;
  var entrata;
  var uscita;

  firebase.database().ref().child("users").orderByChild("targa").equalTo(targa_account).once("value", function (snapshot) {
  snapshot.forEach(function(childSnapshot) {
  stato = childSnapshot.val().stato;
  });
  firebase.database().ref().child("users").orderByChild("targa").equalTo(targa_account).once("value", function (snapshot) {
  snapshot.forEach(function(childSnapshot) {
  parcheggio = childSnapshot.val().parcheggio;
  });
  firebase.database().ref().child("users").orderByChild("targa").equalTo(targa_account).once("value", function (snapshot) {
    snapshot.forEach(function(childSnapshot) {
    entrata = childSnapshot.val().entrata;
    uscita = childSnapshot.val().uscita;
    });

    if (stato==stato_ok){
    document.getElementById('entrata').innerHTML = entrata;
    document.getElementById('parcheggio').innerHTML = parcheggio;

    var entrata_data = new Date(entrata).getTime();
    var ora = new Date().getTime();

    var differenza = ora - entrata_data;
    console.log(differenza);

    var ore = Math.floor((differenza % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minuti = Math.floor((differenza % (1000 * 60 * 60)) / (1000 * 60));
    var secondi = Math.floor((differenza % (1000 * 60)) / 1000);

    cronometro(secondi, minuti, ore);
  }
    else {
         document.getElementById('parcheggio').innerHTML = "La tua auto non è parcheggiata al momento";
         document.getElementById('entrata').innerHTML = "La tua auto non è parcheggiata al momento";

         var uscita_durata = new Date(uscita).getTime();
         var entrata_durata = new Date(entrata).getTime();

         this.uscita_d = uscita_durata;
         this.entrata_d = entrata_durata;

         var durata = this.uscita_d - this.entrata_d;

          var ore = Math.floor((durata % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          var minuti = Math.floor((durata % (1000 * 60 * 60)) / (1000 * 60));
          var secondi = Math.floor((durata % (1000 * 60)) / 1000);

          var ore_d = ore.toString();
          var minuti_d = minuti.toString();
          var secondi_d = secondi.toString();

          var orario_durata = ore_d.padStart(2, '0') + ":" + minuti_d.padStart(2, '0') + ":" + secondi_d.padStart(2, '0');

          var prezzo = (durata/1000) * 0.002;
          prezzo = Math.floor(prezzo) + "€";

          document.getElementById('uscita').innerHTML = uscita;
          document.getElementById('durata').innerHTML = orario_durata;
          document.getElementById('costo').innerHTML = prezzo;
     }
    });
   });
  });
 }

function cronometro(secondi_cronometro, minuti_cronometro, ore_cronometro) {
      this.secondi = secondi_cronometro;
      this.minuti = minuti_cronometro;
      this.ore = ore_cronometro;
      setInterval(() => {
      secondi_cronometro++;
      if(secondi_cronometro > 59) {
        secondi_cronometro = 0;
        minuti_cronometro++;
      }
      else if(minuti_cronometro > 59) {
        minuti_cronometro = 0;
        ore_cronometro++;
      }

      var ore_d = ore_cronometro.toString();
      var minuti_d = minuti_cronometro.toString();
      var secondi_d = secondi_cronometro.toString();

      document.getElementById('s').innerHTML = secondi_d.padStart(2, '0');
      document.getElementById('m').innerHTML = minuti_d.padStart(2, '0');
      document.getElementById('h').innerHTML = ore_d.padStart(2, '0');
  }, 1000);
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
