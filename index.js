
var num=document.querySelectorAll(".drum").length;
for (var i = 0; i < num; i++)
 {
   document.querySelectorAll(".drum")[i].addEventListener("click",function(){

if (this.classList[0]==="w"){
    var audio= new Audio("sounds/crash.mp3");
       audio.play();
}
if (this.classList[0]==="a"){
    var audio= new Audio("sounds/kick-bass.mp3");
       audio.play();
}

if (this.classList[0]==="s"){
    var audio= new Audio("sounds/snare.mp3");
       audio.play();
}

if (this.classList[0]==="d"){
    var audio= new Audio("sounds/tom-1.mp3");
       audio.play();
}

if (this.classList[0]==="j"){
    var audio= new Audio("sounds/tom-2.mp3");
       audio.play();
}

if (this.classList[0]==="k"){
    var audio= new Audio("sounds/tom-3.mp3");
       audio.play();
   }
   if (this.classList[0]==="l"){
       var audio= new Audio("sounds/tom-4.mp3");
          audio.play();
      }
   });
}
/////////////////////////////////
 document.addEventListener("keydown",function(event) {

switch (event.key) {
  case "w":
  var audio= new Audio("sounds/crash.mp3");
     audio.play();
    break;

  case "a":
   var audio= new Audio("sounds/kick-bass.mp3");
        audio.play();
          break;

  case "s":
   var audio= new Audio("sounds/snare.mp3");
      audio.play();
        break;

  case "d":
  var audio= new Audio("sounds/tom-1.mp3");
     audio.play();
       break;
  case "j":
  var audio= new Audio("sounds/tom-2.mp3");
     audio.play();
       break;

  case "k":
  var audio= new Audio("sounds/tom-3.mp3");
     audio.play();
       break;

  case "l":
  var audio= new Audio("sounds/tom-4.mp3");
     audio.play();
       break;

  default:console.log(event.key);
}
});
