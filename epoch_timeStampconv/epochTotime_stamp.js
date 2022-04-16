function convert_to_human_date(epoch){
    epoch = parseInt(epoch);
    let dataObject = {year:0,month:0,date:0,hours:0,minutes:0,seconds:0};
    let d = new Date(epoch*1000);
    dataObject.year= d.getFullYear(); dataObject.month= d.getMonth()+1; dataObject.date = d.getDate(); dataObject.hours = d.getHours(); dataObject.minutes=d.getMinutes(); dataObject.seconds= d.getSeconds();
    return dataObject;
}
const convertToHumanDate = () => {
    let date = new Date(inputText.value * 1000);
    outputText.value = date.toLocaleString();
}
const button_convert = document.querySelector('#convert_button');
const input_epoch =document.querySelector('#input_epoch');
const output_year = document.querySelector('#output_year');
const output_month = document.querySelector('#output_month');
const output_day = document.querySelector('#output_day');
const output_hours = document.querySelector('#output_hours');
const output_minutes = document.querySelector('#output_minutes');
const output_seconds = document.querySelector('#output_seconds');

button_convert.addEventListener('click', (event)=>{
    output_year.value = convert_to_human_date(input_epoch.value).year;
    output_month.value = convert_to_human_date(input_epoch.value).month;
    output_day.value =  convert_to_human_date(input_epoch.value).date;
    output_hours.value = convert_to_human_date(input_epoch.value).hours;
    output_minutes.value = convert_to_human_date(input_epoch.value).minutes;
    output_seconds.value = convert_to_human_date(input_epoch.value).seconds;
})