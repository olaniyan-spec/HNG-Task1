const UTC = ()=>{
    const now = Date.now()
    return now;
}

function currentDay(){
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const date = new Date();
    const currentDay = days[date.getUTCDay()];
    return currentDay;
} 


const Today = document.getElementById('day');
const time = document.getElementById('time')
Today.textContent = currentDay();
time.textContent = UTC();