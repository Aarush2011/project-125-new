leftWristX=0;
rightWristX=0;
difference=0;
function setup()
{
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(500,350);
    canvas.position(560,140);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("posenet initialized");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftWristX= results[0].pose.leftWrist.x;
        rightWristX= results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);
    }
}
function draw()
    {
     background("grey");
     document.getElementById("font_size").innerHTML=difference + "px";
     textSize(difference);
     fill("yellow");
     text('Aarush',60,300);
    }
