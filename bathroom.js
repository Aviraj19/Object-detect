status1=""
objects=[]
function preload() {
img=loadImage("bathroom.jpg")
}
function setup() {
    canvas=createCanvas(800,450)
    canvas.center();
    objectdetector=ml5.objectDetector("cocossd", modelloaded)
    document.getElementById("status").innerHTML="status : detecting objects"
}
 function modelloaded() {
     console.log("Model is loaded")
     status1=true
     objectdetector.detect(img,getresult)
 }
 function getresult(error,results) {
     if (error) {
         console.log("error")
     }
     else {
        console.log(results)
        objects = results
     }
 }
 function draw() {
    image(img,0,0,800,450)
    if (status1 !="") {
        for(i=0;i<objects.length;i++) {
         fill("blue")
         percent=floor(objects[i].confidence*100)
         text(objects[i].label+" "+ percent+"%",objects[i].x,objects[i].y)
         textSize(30)
         noFill()
         stroke("red")
         rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height)
         document.getElementById("status").innerHTML="status : objects detected"
        }
    }
}
function back() {
    window.location="main.html";
}