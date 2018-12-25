function location(){
    var city = "CHandigarh";
    return{
        get: function(){
            console.log(city);
        },
        set: function(newCity){
            city = newCity;
        }
    }
}
var myPlace = location();
myPlace.get();
myPlace.set("Panchkula");
myPlace.get();