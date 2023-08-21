function makebubble() {
    var clutter="";
for(var i=1;i<=210;i++){
    var rn=Math.floor(Math.random()*10)
clutter +=`<div id="bubble">${rn}</div>`
}
document.querySelector('#pbtm').innerHTML=clutter;
}
var timer=60;
var score=0;
var hitrun=0;
function runtimer() {
    var timerint=setInterval(function(){
        if(timer>0){
            timer--;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML=`<h1>Game over</h1>`;
        }
       
        document.querySelector("#timerval ").textContent=timer;
    }, 1000);
    
}

function getnewHit() {
hitrun=Math.floor(Math.random()*10);
    document.querySelector("#Hitval").textContent=hitrun;
}
function scorein(){
    score +=10;
    document.querySelector("#scoreval").textContent=score;
}
document.querySelector("#pbtm").addEventListener("click",function (dets){
    var clickednum = Number(dets.target.textContent);
    if(clickednum==hitrun){
        scorein();
        makebubble();
        getnewHit();
    }
});
runtimer();
makebubble();
getnewHit();
scorein();


