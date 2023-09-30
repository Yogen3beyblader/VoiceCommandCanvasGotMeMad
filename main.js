x = 0;
y = 0;

draw_apple = "";
speak_data = "";
to_number = 0;

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function preload(){
  apple=loadImage("apple.png")
}

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
  
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
    
    to_number= Number(content);
    if(Number.isInteger(to_number)){
  draw_apple="set";
    }
    else{
      document.getElementById("status").innerHTML="the speech has not recognized a number"
    }

}

function setup() {

  screen_height=window.innerWidth;
  screen_width=window.innerWidth;

 canvas=createCanvas(500,500);
 canvas.position(520,150);
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";

    for( var i=0;i<= to_number; i++) {
     x=Math.floor(Math.random()*700);
     y==Math.floor(Math.random()*400);
     image(apple,x,y,50,50)
    }
    speak_data=to_number+"apples drawn";
    speak();
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data="";
}

