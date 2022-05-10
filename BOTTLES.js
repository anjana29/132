Status="";
Bottles_image="";
object_Detector="";

function preload(){
    Bottles_image=loadImage("BOTTLES.jpeg");
}
function setup(){
    canvas=createCanvas(640,350);
    canvas.position(315,200);
    object_Detector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting objects";
}
function modelLoaded(){
    console.log("Model Loaded");
    Status=true;
    object_Detector.detect(Bottles_image,gotResults);
}
function gotResults(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
}
function draw(){
    image(Bottles_image,0,0,640,350);
}
