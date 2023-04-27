function show_Time(){
    let D=new Date();
    let day=D.toLocaleString('ru', {weekday: 'long'});
    let month=D.toLocaleString('ru', {month: 'long'});
    let DT=document.getElementById("DT");
    //полная дата и время
    let data=D.getDate();
    let year=D.getFullYear();
    //let time_Hours=D.getHours();
    let time_Hours=D.toLocaleString('en-US', { hour: 'numeric', hour12: true })
    let time_Min=D.getMinutes();
    let time_Sec=D.getSeconds();
    if (time_Sec<10) {time_Sec="0"+time_Sec}
    if (data<10) {data="0"+data}
    DT.innerHTML=day+", "+data+" "+month+" "+year+" "+time_Hours+":"+time_Min+":"+time_Sec;
}
setInterval(show_Time, 1000)