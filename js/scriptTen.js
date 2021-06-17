
let toBank = prompt('Got any money to put on bank account for two mounth? ');
let forYear = (toBank * 1.05) - toBank;
let forTwoMounth = forYear / 6;
let fromBank =  toBank + forTwoMounth.toFixed(2) ;

alert('ok, so for two mounth you wiil earn ' + forTwoMounth.toFixed(2) + ' dollars');
alert('And the sum is: ' +  fromBank + ' dollars');
