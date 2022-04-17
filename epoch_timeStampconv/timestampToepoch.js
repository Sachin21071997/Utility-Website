const epochButton = document.querySelector("#ConvertButton");
const human_date = document.querySelector("#InputHumanDate");
const epoch = document.querySelector("#OutputEpoch");

epochButton.addEventListener("click", () => {
    let date = new Date(human_date.value);
    let timestamp = date.getTime()/1000.0;
    epoch.value = timestamp;
})
