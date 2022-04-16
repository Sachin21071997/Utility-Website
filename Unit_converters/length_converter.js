const button_mConverter = document.querySelector("#mConverter");
const button_cmConverter = document.querySelector('#cmConverter');
const input_unit = document.querySelector('#input_unit');
const output_unit = document.querySelector('#output_unit');
button_mConverter.addEventListener('click', (event)=>{
    output_unit.value =input_unit.value/100;
})
button_cmConverter.addEventListener('click', (event)=>{
    input_unit.value = output_unit.value*100;
})