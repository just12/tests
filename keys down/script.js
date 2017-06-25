$(document).keydown(function(e) {
  var keyPressed = e.keyCode;
  console.log(keyPressed);
  if(keyPressed === 90){window.scrollBy(0,180);};
  if(keyPressed === 88){$("body").css("background", "#2f2")};
  if(keyPressed === 67){$("body").css("background", "#22f")};
});

//Z = 90
//X = 88
//C = 67