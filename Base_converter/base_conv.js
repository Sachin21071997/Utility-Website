const Binary=document.querySelector('#Binary');
const Decimal=document.querySelector('#Decimal');

const Octal = document.querySelector("#Octal");
const Hexadecimal=document.querySelector('#Hexadecimal');

Binary.addEventListener('input',(event)=>{
    const val=event.target.value;
    Decimal.value=parseInt(val,2);
    Octal.value=parseInt(val,2).toString(8);
    Hexadecimal.value=parseInt(val,2).toString(16).toUpperCase();
})

decimal.addEventListener('input',(event)=>{
    const val=event.target.value;
    Binary.value=parseInt(val).toString(2);
    Octal.value=parseInt(val).toString(8);
    Hexadecimal.value=parseInt(val).toString(16).toUpperCase();
})

Octal.addEventListener('input',(event)=>{
    const val=event.target.value;
    Decimal.value=parseInt(val,8).toString(10);
    Hexadecimal.value=parseInt(val,8).toString(16);
    Binary.value=parseInt(val,8).toString(2);
})

Hexadecimal.addEventListener('input',(event)=>{
    const val=event.target.value;
    Decimal.value=parseInt(val,16).toString(10);
    Octal.value=parseInt(val,16).toString(8);
    Binary.value=parseInt(val,16).toString(2);
})