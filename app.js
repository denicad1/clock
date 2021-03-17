// const time=new Date();
// console.log(time);
// const minute= String(time.getMinutes()).padStart(2,0);
// const hour=String(time.getHours()).padStart(2,0);
// const secs=String(time.getSeconds()).padStart(2,0);
// const curTime= `${hour}:${minute}:${secs} is the current time`;
// console.log(curTime);
// const intl=Intl.DateTimeFormat(`en-US`).format(time);
// console.log(intl);
const clockFace=document.querySelector('.main__clock__face');
const wakeHour=document.getElementById('wake__hour');
const wakeMin=document.getElementById('wake__min');
const AMPM=document.getElementById('wake__M');
const setAlarm=document.getElementById('__time__submit');
const alarmAlert=document.querySelector('.main__alert');
const mainDiv=document.querySelector('.main');
let curTime;
const alarms= new Set;

//display time on page
const timer= ()=>{
const time=new Date();
const minute= String(time.getMinutes()).padStart(2,0);
let hour=String(time.getHours()).padStart(2,0);
const secs=String(time.getSeconds()).padStart(2,0);
const AMPM= hour<12?'AM':'PM';
 if (hour>12) {
     hour=String(hour%12).padStart(2,0);
 }
curTime= `${hour}:${minute}:${secs} ${AMPM}`;
const intl=Intl.DateTimeFormat(`en-US`).format(time); 
clockFace.innerHTML=`${curTime} <br> ${intl} is the date`;
//need to move this but it is here for testing
alarmCheck(alarms);
}
//add options to selects under clock
const options=(time,div,start)=>{
    let opt;
    for (let j = start; j <= time; j++) {
    opt=document.createElement('option');
    opt.text=String(j).padStart(2,0);
    div.options.add(opt,j);
}
}
//set alarm and add it to set to get rid of dups
const alarmSet=()=>{
const alarmHour=wakeHour.value;
const alarmMin=wakeMin.value;
const alarmAMPM=AMPM.value;
const alarm=`${alarmHour}:${alarmMin}:00 ${alarmAMPM}`;
alarms.add(alarm);

}
//convert set of alarms to arr and check to see if it time to set off alarm
const alarmCheck=(Set)=>{
    if(alarms.has(curTime)){
        //run method to display that alarm is going off
       durOfAlarm(60);
        console.log(true);
    }
    
}
//what to do when alarm is going off
const durOfAlarm=(length)=>{ 
    let dur=length;
    const bells=setInterval(() => {
        dur--;
        mainDiv.classList.toggle('main__alert');
        if(dur===0){
            clearInterval(bells);
            mainDiv.classList.remove('main__alert');
        }
    }, 1000);
}
  

setAlarm.addEventListener('click',alarmSet);
//initialize
const init=()=>{
    const time=setInterval(timer,1000);
    options(12,wakeHour,1);
options(59,wakeMin,0);
}

// DISPLAY ALARMS 
// TOGGLE ALARMS
//SET ALARM LENGTH
//
timer();
init();