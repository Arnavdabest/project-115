function preload(){}

function setup(){
    canvas = createCanvas(600, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    video.size(600, 400);
    posenet = ml5.poseNet(video, Modelloaded);
    posenet.on('pose', gotposes);
}

function Modelloaded(){}

function gotposes(results){
  if(results.length > 0){
    console.log(results);
    nosex = results[0].pose.nose.x - 15;
    nosey = results[0].pose.nose.y - 15;
  }
}

function draw(){
    image(video, 0, 0, 600, 400);
}

function Take_snapshot(){}