(function (window) {

// Module 4 Assignment.

/*
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Dhoni
Hello Hitesh
Hello Praveen
Hello kohli
Hello Raina
Hello Bhuvan
Good Bye Raj
*/


var names = ["Yaakov", "John", "Jen", "Dhoni", "Hitesh", "Praveen", "kohli", "Raina", "Bhuvan", "Raj"];

for (var i in names) {


  var firstLetter = ((names[i]).charAt(0)).toLowerCase();


  if (firstLetter == 'j') {
     window.byeSpeaker.speak(names[i]);
  } else {
     window.helloSpeaker.speak(names[i]);
  }
}
})(window);