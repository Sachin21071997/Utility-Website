const epochButton = document.querySelector("#convert_button");
const human_date = document.querySelector("#input_human_date");
const epoch = document.querySelector("#output_epoch");

epochButton.addEventListener("click", () => {
    
    let date = new Date(human_date.value);
    let timestamp = date.getTime()/1000.0;
    epoch.value = timestamp;
    console.log(timestamp)
})
