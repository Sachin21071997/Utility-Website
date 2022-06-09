let timer = document.querySelector("#Timer");
const StartButtonTimer = document.querySelector('#StartButtonTimer');
const StopButtonTimer = document.querySelector('#StopButtonTimer');
const ResetButtonTimer = document.querySelector('#ResetButtonTimer');
const UserInputTimer = document.querySelector('#UserInputTimer');
//let distance = UserInputTimer.value;
let distance = 60;
//distance = UserInputTimer.value;
//timer.value = distance;
let intervalId = 0;
StartButtonTimer.addEventListener('click', (event)=>{
    intervalId = setInterval(function(){
        if(distance === 0){
            timer.value = "Time Over";
            clearInterval(intervalId);
        }
        distance = distance-1;
        timer.value = distance;

    },1000);

})
StopButtonTimer.addEventListener('click', (event)=>{
    clearInterval(intervalId);
    console.log(intervalId)
})
ResetButtonTimer.addEventListener('click', (event)=>{
    clearInterval(intervalId);
    timer.value = UserInputTimer.value;
    distance = UserInputTimer.value;
})
