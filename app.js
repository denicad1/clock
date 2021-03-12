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
const wakeUp=document.querySelector('.wake__time');
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
const time=setInterval(timer,1000);

for (let i = 1; i < 2; i++) {
    let opt;
    for (let j = 1; j < 12; j++) {
        
    const DorN= i===1?'AM':'PM';
    
     opt= `<option value=${String(j).padStart(2,0)}${DorN}-${String(j+1).padStart(2,0)}${DorN} >`;
     wakeUp.insertAdjacentElement('afterbegin',opt);
    }
    
    // const element = array[i];
    // const DorN= i<=12?'AM':'PM';
    // const time=String(i).padStart(2,0);
    // let opt= `<option value=${time}${DorN}-${time+1}${DorN} >`
    // if (i<12) {
    //     wakeUp.insertAdjacentElement('afterbegin',opt)
    // }else{
    //     opt=`<option value=${time}${DorN}-${time+1}${DorN} >`
    // }


    
}

