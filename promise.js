let getStudent = () =>{
    return new Promise((resolve, reject)=>{
        success();
    })
}
getStudent().then(success, failure);

function success(){
    console.log("success");
}
function failure(){
    console.log("failure");
}