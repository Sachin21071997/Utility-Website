const button_md5 = document.querySelector('#MD5_button');
const button_sha1 = document.querySelector('#SHA-1_button');
const button_sha256 = document.querySelector('#SHA-256_button');
const button_sha512= document.querySelector('#SHA-512_button');
const input_string = document.querySelector('#input_string');
const output_string =document.querySelector('#hashed_output');
button_md5.addEventListener('click', (event)=>{
    output_string.value = CryptoJS.MD5(input_string.value);
})
button_sha1.addEventListener('click', (event)=>{
    output_string.value = CryptoJS.SHA1(input_string.value);
})
button_sha256.addEventListener('click', (event)=>{
    output_string.value = CryptoJS.SHA256(input_string.value);
})
button_sha512.addEventListener('click', (event)=>{
    output_string.value = CryptoJS.SHA512(input_string.value);
})