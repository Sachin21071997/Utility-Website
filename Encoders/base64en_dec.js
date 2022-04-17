const button_encode = document.querySelector('#EncoderButton');
const button_decode = document.querySelector('#DecoderButton');
const input_string = document.querySelector('#InputString');
const result_string =document.querySelector('#OutputString');
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