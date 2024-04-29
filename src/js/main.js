let nameInput = prompt("Enter your name");
let ageInput = prompt("Enter your age");

let outputDiv = document.getElementById("inputArea");
if (ageInput <= 17) {
    outputDiv.innerHTML = "Cool!!! Your name is " + nameInput + " and you are " + ageInput + " years old. You have awesome future!!!";
} else {
    outputDiv.innerHTML = "Cool!!! Your name is " + nameInput + " and you are " + ageInput + " years old. You are not a kid anymore but adult.";
}
