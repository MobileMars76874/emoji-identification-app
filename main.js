prediction_1 = null;
prediction_2 = null;

Webcam.set({
width: 300,
image_format: "png",
png_quality: 90
});

camera = document.getElementById("camera");
Webcam.attach(camera);

function C_I(){
Webcam.snap(function (data_Url){
document.getElementById("result").innerHTML = "<img id='C_image' src='"+data_Url+"'>";
});
}

console.log("ml5 version is:",ml5.version);

classifier = ml5.imageClassifier("https://storage.googleapis.com/tm-model/_Lp3_sJsj/model.json"/model_loaded)

function model_loaded(){
console.log("model loaded");
}

function speak(){
synth = window.speechSynthesis
s_prediction_1 = "The first prediction is"+prediction_1;
s_prediction_2 = "The second prediction is"+prediction_2;
var utter_this = new SpeechSynthesisUtterance(s_prediction_1 + s_prediction_2);
synth.speak(utter_this);
}

function I_I(){
img = document.getElementById("C_image");
classifier.classify(img , gotresult);
}

function gotresult(error, result){
if(error){
console.log(error);
}
else{
console.log(result);
prediction_1 = result[0].label;
prediction_2 = result[1].label;
document.getElementById("result_emotion_name").innerHTML = prediction_1;
document.getElementById("result_emotion_name2").innerHTML = prediction_2;
speak();

if(result[0].label == "happy"){
document.getElementById("E_1").innerHTML = "&#128522;"
}
else if(result[0].label == "sad"){
document.getElementById("E_1").innerHTML = "&#128532;"
}
else if(result[0].label == "angry"){
document.getElementById("E_1").innerHTML = "&#128548;"
}
if(result[1].label == "happy"){
document.getElementById("E_2").innerHTML = "&#128522;"
}
else if(result[1].label == "sad"){
document.getElementById("E_2").innerHTML = "&#128532;"
}
else if(result[1].label == "angry"){
document.getElementById("E_2").innerHTML = "&#128548;"
}
}
}

