let companies = [
    {name: 'Trantor', category: 'IT', start: '2002', current: '2019'},
    {name: 'Bebo', category: 'IT', start: '2002', current: '2019'},
    {name: 'Infosy', category: 'IT', start: '2002', current: '2019'},
    {name: 'Tech Mahindra', category: 'IT', start: '2002', current: '2019'},
    {name: 'IBM', category: 'Product', start: '2002', current: '2019'},
    {name: 'Capegemini', category: 'IT', start: '2002', current: '2019'},
    {name: 'Accenture', category: 'IT', start: '2002', current: '2019'},
    {name: 'HCL', category: 'IT', start: '2002', current: '2019'},
];

const ages = [10, 15, 16, 21, 33, 45, 56, 85, 54];

/* for (let index = 0; index < ages.length; index++) {
    const element = ages[index];
    console.log(element);
}

companies.forEach(function(company){
    console.log(company.start);
}) */

/* let canDrink = [];

for (let index = 0; index < ages.length; index++) {
    if(ages[index] >= 21){
        var res = canDrink.push(ages[index]);
    }
    
}
console.log(canDrink); */

// const canDrink = ages.filter(age =>{
//     if(age >= 21){
//         return true;
//     }
// })
// console.log(canDrink);
const canDrink = ages.filter(age => age > 21)
console.log(canDrink);

