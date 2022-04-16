const character_input = document.querySelector('#characterinput');
const char_count = document.querySelector('#charcount');

character_input.addEventListener('input',(event)=>{
    const lng = event.target.value.length;
    char_count.innerText = 'The above text has ' + lng + ' characters';
});