let cleanRoom = function() {
    return new Promise(function(res, rej){
        setTimeout(res, 3000, "Cleaned The Room")        
    })
}
let removeGarbage = function() {
    return new Promise(function(res, rej){
        setTimeout(res, 3000, "Garbage Remove")                
    })
}
let winIceCream = function() {
    return new Promise(function(res, rej){
        setTimeout(res, 3000, "Won Ice Cream")                  
    })
}

/* Promise.all([cleanRoom(),removeGarbage(),winIceCream()]).then(function(){
    console.log("All FInished!!");
}) */

/* Promise.race([cleanRoom(),removeGarbage(),winIceCream()]).then(function(){
    console.log("One of them is finished");
}); */