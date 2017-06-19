/*
$(document).ready(function(){
  var div = $("div#asadasa");
  var posotion = div.position;
  console.log("asadasa");
});
*/

$(document).ready(function(){
  $("div#asadasa")
});

jQuery(function($) {
  var currentMousePos = { x: -1, y: -1 };
  $(document).mousemove(function(asadasa) {
    currentMousePos.x = asadasa.pageX;
    currentMousePos.y = asadasa.pageY;
    $("a#asadasa").text("mouse x:" + currentMousePos.x + "mouse y" + currentMousePos.y);
  });
});