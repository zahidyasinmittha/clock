let sec=document.getElementById("sec");
let min=document.getElementById("min");
let hour=document.getElementById("hour");
let display_date=document.getElementById("date");
let digital_clock=document.getElementById("digital-clock");
let digital_time,digital_date;
let second=0;
let minute=0;
let hours=0;
let hour_12=0;
function time(){
    let date = new Date();
    second=date.getSeconds();
    minute=date.getMinutes();
    hours=date.getHours();
    hour_12=hours;

    if(hour_12>12){
    hour_12=hour_12-12;
    digital_time=`0${hour_12}:`;
    digital_time+=(minute>9)?`${minute}:`:`0${minute}:`;
    digital_time+=(second>9) ? `${second} PM` : `0${second} PM`;
    digital_clock.innerHTML=digital_time;
    }
    else{
        digital_time=(hour_12>9)?`${hour_12}:`:`0${hour_12}:`;
        digital_time+=(minute>9)?`${minute}:`:`0${minute}:`;
        digital_time+=(second>9) ? `${second} AM` : `0${second} AM`;
        digital_clock.innerHTML=digital_time;
    }

    hours=hours*30+minute/2;
    minute=minute*6+second*0.1;
    second=second*6;
    sec.style.transform=`rotate(${second}deg)`;
    min.style.transform=`rotate(${minute}deg)`;
    hour.style.transform=`rotate(${hours}deg)`;

    digital_date=(date.getDate()>9) ? `${date.getDate()}:` : `0${date.getDate()}:`;
    digital_date+=(date.getMonth()>9) ? `${date.getMonth()+1}:` : `0${date.getMonth()+1}:`;
    digital_date+=`${date.getFullYear()}`;
    display_date.innerHTML=digital_date;
}
time();
setInterval(() => {
    time();
}, 1000);


