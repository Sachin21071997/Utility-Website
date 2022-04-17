const button_FahConverter = document.querySelector("#FahConverter");
const button_CelConverter = document.querySelector('#CelConverter');
const input_unit = document.querySelector('#InputUnit');
const output_unit = document.querySelector('#OutputUnit');
button_FahConverter.addEventListener('click', (event)=>{
    output_unit.value =input_unit.value*1.8 + 32.0;
})
button_CelConverter.addEventListener('click', (event)=>{
    input_unit.value = ((output_unit.value-32)*5)/9.0;
})