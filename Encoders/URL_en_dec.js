const button_encode = document.querySelector("#encoder_button");
const button_decode = document.querySelector('#decoder_button');
const input_url = document.querySelector('#input_url');
const result_url =document.querySelector('#output_url');
button_encode.addEventListener('click', (event)=>{
    result_url.value = encodeURIComponent(input_url.value);
})
button_decode.addEventListener('click', (event)=>{
    result_url.value = decodeURIComponent(input_url.value);
})