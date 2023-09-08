const UTC = ()=>{
    const now = new Date();
    const hours= now.getUTCHours().toString().padStart(2, '0');
    const minutes= now.getUTCMinutes().toString().padStart(2, '0');
    const seconds = now.getUTCSeconds().toString().padStart(2, '0');
    const milliseconds = now.getUTCMilliseconds().toString().padStart(2, '0');
    const format = `${hours} ${minutes}:${seconds}:${milliseconds}`
    document.getElementById('time').textContent = format
}
UTC();
setInterval(UTC, 100)