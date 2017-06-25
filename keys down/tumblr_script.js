// ==UserScript==
// @name         Scroll down tumblr
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.tumblr.com/dashboard
// @grant        none
// @require http://code.jquery.com/jquery-3.2.1.js
// ==/UserScript==

(function() {
    'use strict';
$(document).keydown(function(e) {
  var keyPressed = e.keyCode;
  console.log(keyPressed);
  if(keyPressed === 90){window.scrollBy(0,200);}
  //if(keyPressed === 90){$("html, body").animate({ scrollTop: 100 }, 1000);}
  if(keyPressed === 90){console.log(keyPressed);}
});
})();