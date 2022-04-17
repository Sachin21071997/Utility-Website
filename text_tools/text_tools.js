const character_input = document.querySelector('#CharacterInput');
const char_count = document.querySelector('#CharCount');

character_input.addEventListener('input',(event)=>{
    const lng = event.target.value.length;
    char_count.innerText = 'The above text has ' + lng + ' characters';
});