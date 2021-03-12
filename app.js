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


const timer= ()=>{
const time=new Date();
const minute= String(time.getMinutes()).padStart(2,0);
const hour=String(time.getHours()).padStart(2,0);
const secs=String(time.getSeconds()).padStart(2,0);
const curTime= `${hour}:${minute}:${secs}`;
const intl=Intl.DateTimeFormat(`en-US`).format(time); 
clockFace.textContent=`${curTime} \n
${intl} is the date`;
}

const options=(time,div)=>{
    let opt;
    for (let j = 1; j <= time; j++) {
    opt=document.createElement('option');
    opt.text=String(j).padStart(2,0);
    div.options.add(opt,j);
}
}


const init=()=>{
    const time=setInterval(timer,1000);
    options(12,wakeHour);
options(60,wakeMin);
}
init();