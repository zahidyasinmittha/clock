let sec=document.getElementById("sec");
let min=document.getElementById("min");
let hour=document.getElementById("hour");
let second=0;
let minute=0;
let hours=0;
function time(){
    let date = new Date();
    second=date.getSeconds();
    minute=date.getMinutes();
    hours=date.getHours()*30+minute/2;
    minute=minute*6+second*0.1;
    second=second*6;
    sec.style.transform=`rotate(${second}deg)`;
    min.style.transform=`rotate(${minute}deg)`;
    hour.style.transform=`rotate(${hours}deg)`;
}
time();
setInterval(() => {
    time();
}, 1000);


