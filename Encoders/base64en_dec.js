const button_encode = document.querySelector('#encoder_button');
const button_decode = document.querySelector('#decoder_button');
const input_string = document.querySelector('#input_string');
const result_string =document.querySelector('#output_string');
function encode_base64(Base64Encode){
    return btoa(Base64Encode);
}
function decode_base64(Base64Decode){
    return atob(Base64Decode);
}
button_encode.addEventListener('click', (event)=>{
    result_string.value = encode_base64(input_string.value);
})
button_decode.addEventListener('click', (event)=>{
    result_string.value = decode_base64(input_string.value);
})