const getTodo = () =>{
    setTimeout( ()=>{
        return { text: 'Complete Code Example'}
    }, 2000)
}

const toDo = getTodo()
console.log(toDo.text);
