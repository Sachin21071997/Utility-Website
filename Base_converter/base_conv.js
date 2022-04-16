const binary=document.querySelector('#binary');
const decimal=document.querySelector('#decimal');

const Octal = document.querySelector("#Octal");
const Hexadecimal=document.querySelector('#Hexadecimal');

binary.addEventListener('input',(event)=>{
    const val=event.target.value;
    decimal.value=parseInt(val,2);
    Octal.value=parseInt(val,2).toString(8);
    Hexadecimal.value=parseInt(val,2).toString(16).toUpperCase();
})

decimal.addEventListener('input',(event)=>{
    const val=event.target.value;
    binary.value=parseInt(val).toString(2);
    Octal.value=parseInt(val).toString(8);
    Hexadecimal.value=parseInt(val).toString(16).toUpperCase();
})

Octal.addEventListener('input',(event)=>{
    const val=event.target.value;
    decimal.value=parseInt(val,8).toString(10);
    Hexadecimal.value=parseInt(val,8).toString(16);
    binary.value=parseInt(val,8).toString(2);
})

Hexadecimal.addEventListener('input',(event)=>{
    const val=event.target.value;
    decimal.value=parseInt(val,16).toString(10);
    Octal.value=parseInt(val,16).toString(8);
    binary.value=parseInt(val,16).toString(2);
})