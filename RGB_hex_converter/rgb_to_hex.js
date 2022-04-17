const button_convert = document.querySelector('#ConvertButton');
const input_red = document.querySelector('#InputRed');
const input_green = document.querySelector('#InputGreen');
const input_blue = document.querySelector('#InputBlue');
const result_string =document.querySelector('#OutputHex');
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
function rgbToHex(red, green, blue) {
    red = parseInt(red);
    green = parseInt(green);
    blue = parseInt(blue);
    const output_in_hex = "#" + componentToHex(red) + componentToHex(green) + componentToHex(blue);
    return output_in_hex;
}
button_convert.addEventListener('click', (event)=>{
    result_string.value = rgbToHex(input_red.value,input_green.value,input_blue.value);
    result_string.style.backgroundColor = result_string.value;
})


