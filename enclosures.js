function showname(firstname, lastname){
    var nameIntro = "Your Name is: ";

    function fullname(){ //This is Enclosures
        return nameIntro + firstname+ " " + lastname;
    }
    return fullname();
}
console.log(showname("Jay", "Prakash"));