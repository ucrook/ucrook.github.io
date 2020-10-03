function time ()
{
    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    
    document.querySelector('h1').innerHTML = `${hour}:${minutes}:${seconds}`;
    
}
setInterval(time, 1000);
