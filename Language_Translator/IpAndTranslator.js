let inputText = document.querySelector('#InputText');
let outputText = document.querySelector('#OutputText');
let buttonTranslate = document.querySelector('#btn-translate');
let LanguagePair = document.querySelector('#LanguagePair');
let buttonIP = document.querySelector("IPButton");
const apiUrl = "https://api.mymemory.translated.net/get";
function errorHandle(error) {   
    alert('Error occurred')
    console.log("error occurred", error);
}
function clickHandler() {       
    let text = inputText.value;
    let updatedUrl = apiUrl + "?q=" + text +"!&langpair="+ LanguagePair.value;
    console.log(updatedUrl);
    
    fetch(updatedUrl).then(response =>
        response.json()).then(result=>{
            outputText.value = (result.responseData.translatedText)
        }).catch(errorHandle);
           
    
    
}
function KnowUrIP(){
    let api = "https://api.ipify.org/?format=json";
    console.log("Hi")
    fetch(api).then(response=>console.log(response)).catch(errorHandle);
}
buttonTranslate.addEventListener("click", clickHandler);  
buttonIP.addEventListener("click",KnowUrIP);