var timeout = 10;
var action = function() {
  var cifra1 = Math.floor(Math.random() * 2);
  var cifra2 = Math.floor(Math.random() * 2);
  var cifra3 = Math.floor(Math.random() * 2);
  var cifra4 = Math.floor(Math.random() * 2);
  var cifra5 = Math.floor(Math.random() * 2);
  var numeroAleatorio = cifra1 + "" + cifra2 + "" +  cifra3 + "" +  cifra4 + "" +  cifra5;
  var tdAleatorio = Math.floor(Math.random() * 25)+1;
  $('td#td' + tdAleatorio).text(numeroAleatorio);
};
setInterval(action, timeout);
