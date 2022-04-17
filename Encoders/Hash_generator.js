const button_md5 = document.querySelector('#MD5_Button');
const button_sha1 = document.querySelector('#SHA-1_Button');
const button_sha256 = document.querySelector('#SHA-256_Button');
const button_sha512= document.querySelector('#SHA-512_Button');
const input_string = document.querySelector('#InputString');
const output_string =document.querySelector('#HashedOutput');
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