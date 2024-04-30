let nameInput = prompt("Enter your name");
let ageInput = prompt("Enter your age");

let outputDiv = document.getElementById("inputArea");

if (nameInput === null || ageInput === null || nameInput === "" || ageInput === "") {
    outputDiv.innerHTML = "Could you please write your name and age correctly?";
    
} else {
    if (ageInput <= 17) {
        outputDiv.innerHTML = "Cool!!! Your name is " + nameInput + " and you are " + ageInput + " years old. You have an awesome future!!!";
    } else {
        outputDiv.innerHTML = "Cool!!! Your name is " + nameInput + " and you are " + ageInput + " years old. You are not a kid anymore but an adult.";
    }
}
