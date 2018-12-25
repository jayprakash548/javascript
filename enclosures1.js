function celibrityName(firstname){
    var nameIntro = "Your Name is: ";

    function lastname(thelastname){
        console.log(nameIntro + firstname + thelastname);
    }
    return lastname;
}
var myName = celibrityName("Jay");
myName("Prakash");