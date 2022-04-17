const button_convert = document.querySelector('#ConvertButton');
const input_hex =document.querySelector('#InputHex');
const output_red = document.querySelector('#OutputRed');
const output_green = document.querySelector('#OutputGreen');
const output_blue = document.querySelector('#OutputBlue');
function HexTorgb(HexToConvert){
    let RGBcomponent = { red:"",blue:"",green:""};
    RGBcomponent.red = parseInt(HexToConvert[1]+HexToConvert[2],16);
    RGBcomponent.blue= parseInt(HexToConvert[3]+HexToConvert[4],16);
    RGBcomponent.green = parseInt(HexToConvert[5]+HexToConvert[6],16);
    return RGBcomponent;
}
button_convert.addEventListener('click', (event)=>{
    output_red.value = HexTorgb(input_hex.value).red;
    output_green.value = HexTorgb(input_hex.value).green;
    output_blue.value = HexTorgb(input_hex.value).blue;
})