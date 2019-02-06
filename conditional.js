let count = 5;
if(count == 3){
    console.log('Its 3');
} else if(count > 3){
    console.log('Its greater then 3');
} else if(count < 3){
    console.log('Its less then 3');
} else{
    console.log('Ok');
}
//Output: Its greater then 3

let hero = "Batman";

switch(hero.toLowerCase()){
    case 'sumperman':
    console.log('Very Powerful');
    break;
    case 'batman':
    console.log('Very Inteligent');
    break;
    default:
    console.log('No Hero after these');
}

//Ternry Operator

let a = 1, b = '1';

//Strictly Equal To
// let result = (a === b)? 'Equal' : 'Not Equal';

let result = (a !== b)? 'Not Equal' : 'Equal';
console.log(result);