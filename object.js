/* let car = {
    make: 'BMW',
    year: 2010,
    model: 'abcz',
    getprice: function () {
        return 5000;
    },
    desription: function () {
        console.log(this.make + ' is '+ 'Manufacture in ' + this.year);
    }
}   
car.desription();

console.log(car.model)  */

/* let anothercar = {}

anothercar.name = 'Maruti';
console.log(anothercar.name);
 */

/* let a = {
    property: { 
        b: "hi" 
    }
};
console.log(a.property.b); */

/* let obj = {
    prperty: [
        {
            a: 'one',
            x: 'rays',
            y: 'yellow'
        },
        {b: 'Two'},
        {c: 'Three'},
        {d: 'Four'},
        {e: 'Five'}
    ]
}
console.log(obj.prperty[0]['x']); */

let contacts = {
    customers: [
        {name: 'Jay', phone: 123, city: 'Panhkula'},
        {name: 'sony', phone: 321, city: 'Patna'},
    ],
    company: [
        {name: 'Trantor', location: 'Chandigarh'},
        {name: 'Infosys', location: 'Patna'},
    ]
}
console.log(contacts.company[1].name);