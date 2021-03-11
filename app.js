// const time=new Date();
// console.log(time);
// const minute= String(time.getMinutes()).padStart(2,0);
// const hour=String(time.getHours()).padStart(2,0);
// const secs=String(time.getSeconds()).padStart(2,0);
// const curTime= `${hour}:${minute}:${secs} is the current time`;
// console.log(curTime);
// const intl=Intl.DateTimeFormat(`en-US`).format(time);
// console.log(intl);
const clockArea=document.querySelector('.main__clock');
const timer= ()=>{
const time=new Date();
const minute= String(time.getMinutes()).padStart(2,0);
const hour=String(time.getHours()).padStart(2,0);
const secs=String(time.getSeconds()).padStart(2,0);
const curTime= `${hour}:${minute}:${secs} is the current time`;
const intl=Intl.DateTimeFormat(`en-US`).format(time);


}
const time=setInterval(timer,1000);
clockArea.innerHTML=time;