
let money = prompt('So how much do you have to buy chocolate? ');
let chocolate = prompt('And how much costs you favorite chocolate? ');
let howManyChocolates = Math.floor(money / chocolate);
let howMuchLeft = money - chocolate * howManyChocolates;

alert('In this case you can buy  ' + howManyChocolates + ' chocolades,  and you will still have ' + howMuchLeft + ' dollar');