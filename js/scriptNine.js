
let number = prompt('Gimme any three-digit number! ');
let thirdNumber = (number - number % 100)/100;
let secondNumber = (number - number % 10)/10 - (thirdNumber * 10);
let firstNumber = number - (thirdNumber * 100) - (secondNumber * 10);

if (firstNumber !=0) {
    alert(String(firstNumber)+String(secondNumber)+String(thirdNumber));
} else if (firstNumber== 0 && secondNumber !=0) {
    alert(String(secondNumber)+String(thirdNumber));
} else if (firstNumber==0 && secondNumber==0){
    alert(String(thirdNumber));
}
