x = 0;
y = 0;
var speak_data="";
var screen_height=0;
var screen_width=0;
var to_number= "";
draw_apple = "";
var canvas;
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event){
 console.log(event); 
 content = event.results[0][0].transcript;
 document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
 to_number = Number(content);
console.log(to_number);
 if(Number.isInteger(to_number)){
  document.getElementById("status").innerHTML="Started drawing apple";
  draw_apple="set";
 }

 else{
   window.alert("Please give the number of apples to be drawn");
 }
}

function preload(){
  apple=loadImage("apple.png");
}

function setup() {
  screen_width = window.innerWidth;
  screen_height = window.innerHeight;
  canvas=createCanvas(screen_width, screen_height-100);
  canvas.center();
}

function draw() {
  if(draw_apple == "set"){
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    speak_data=to_number + "apples drawn";
    speak();
    for (var i  = 1; i <=to_number; i++){
      x = Math.floor(Math.random() * 700);
      y = Math.floor(Math.random() * 400)
      image(apple, x, y, 50, 50);
    }
    draw_apple = "";
    
  }  
}

function speak(){
    var synth = window.speechSynthesis;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}