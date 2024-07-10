
var numberofbuttons = document.querySelectorAll(".drum").length;
for(i=0;i<numberofbuttons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){ 
       // var audio = new Audio("sounds/tom-1.mp3");
      //  audio.play();
      var buttoninnerhtml = this.innerHTML;
      makesound(buttoninnerhtml);
    });
}
document.addEventListener("keypress",function(event){
  makesound(event.key);
  buttonAnimation(event.key);
});

function makesound(key){
  switch(key){
    case "w":
    var tom1 = new Audio("sounds/tom-2.mp3");
    tom1.play();
    break;

    case "a":
    var tom2 = new Audio("sounds/tom-3.mp3");
    tom2.play();
    break;

    case "s":
    var tom3 = new Audio("sounds/tom-4.mp3");
    tom3.play();
    break;

    case "d":
    var tom4 = new Audio("sounds/crash.mp3");
    tom4.play();
    break;

    case "l":
    var tom5 = new Audio("sounds/kick-bass.mp3");
    tom5.play();
    break;

    case "k":
    var tom6 = new Audio("sounds/snare.mp3");
    tom6.play();
    break;

    case "j":
    var tom7 = new Audio("sounds/tom-1.mp3");
    tom7.play();
    break;
    default: console.log(buttoninnerhtml);
        
  }
  
}
function buttonAnimation(currentkey){
  var activeButton= document.querySelector("."+ currentkey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
}
//higher order function;


//higher order function;
/*    function add(num1, num2) {
    return num1 + num2;
    }
     
    function subtract(num1, num2) {
    return num1 - num2;
    }
     
    function multiply(num1, num2) {
    return num1 * num2;
    }
     
    function divide(num1, num2) {
    return num1 / num2;
    }
     
    function calculator(num1, num2, operator) {
    return operator(num1, num2);
    }
*/

