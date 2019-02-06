/* function one() {
    return 'Hi';
}
let value = one;
console.log(value()); */

/* function two(){
    return function(){
        console.log("Hello Two");
    }
}
let funtwo = two();
funtwo(); */

function three() {
    return function () {
        return 'Three';
    }
}

console.log(three()());