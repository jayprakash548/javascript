let promiseToclentheRoom  = new Promise(function(resolve, reject){

    //cleaning the room
    let isClean = false;
    if(isClean){
        resolve('Clean');
    } else{
        reject('Decliend');
    }

});
promiseToclentheRoom.then(function(fromResolve){
    console.log('The Room is ' + fromResolve);
}).catch(function(fromRejected){
    console.log('Room is clean is ' + fromRejected)
})