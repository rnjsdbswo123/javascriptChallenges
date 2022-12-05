const findDate = document.querySelectorAll('.clock span:nth-child(1)')[0]
const findClock = document.querySelectorAll('.clock span:nth-child(2)')[0]


function getTime(){
    let date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth()+1;
    const nowdate = date.getDate();
    const day = date.getDay();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    const checkTime = [hours, minutes,seconds]
    for(let i = 0; i < checkTime.length; i++){
        if(checkTime[i] < 10){
            checkTime[i] += `0d${checkTime[i]}`
        }
    }
    findDate.innerText = `${year}년 ${month}월 ${nowdate}일`
    findClock.innerText = `${hours} : ${minutes} : ${seconds}`
}
setInterval(getTime,1000)