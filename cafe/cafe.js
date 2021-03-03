
var canvas = document.getElementById('myCanvas');
var ctx;
var w = 1440;
var h = 900;
var colour = ["#F5F5DC", "#FFE4C4", "#FAEBD7"];
var rn = rand(5);




setUpCanvas();





for(var i=0; i<25; i++){
    arc(rand(w), rand(h), 10+rand(20), colour[i%colour.length]);
}



function arc(x,y,r,c){
    ctx.beginPath();
    ctx.arc(x,y,r,0, Math.PI*2)
    ctx.fillStyle = c;
    ctx.fill();
}

function randi(r){
    var results = Math.floor(Math.random()*r);
    return results
}
function rand(r){
    var result = Math.random()*r;
    return result
}
function setUpCanvas(){
    canvas = document.querySelector("#myCanvas");
    ctx = canvas.getContext("2d");
    canvas.width = w;
    canvas.height = h;
}

console.log("welcome to the cafe, please refresh the page to see the dancing lights")