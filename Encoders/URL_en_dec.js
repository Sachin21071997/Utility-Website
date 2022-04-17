const button_encode = document.querySelector("#EncoderButton");
const button_decode = document.querySelector('#DecoderButton');
const input_url = document.querySelector('#InputUrl');
const result_url =document.querySelector('#OutputUrl');
button_encode.addEventListener('click', (event)=>{
    result_url.value = encodeURIComponent(input_url.value);
})
button_decode.addEventListener('click', (event)=>{
    result_url.value = decodeURIComponent(input_url.value);
})