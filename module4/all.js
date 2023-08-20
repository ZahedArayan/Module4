function sayer(){
    var Names = ["Yaakov", "John", "Jen", "Jason", 
    "Paul", "Frank", "Larry", "Paula", 
    "Laura", "Jim"]

    for (var i = 0; i < Names.length; i++) {
    var SayHello = "hello "
    var SayGoodBye = "Goodbye "
    var firstLetter = Names[i].charAt(0).toLowerCase();

    if(firstLetter === "j"){
    console.log(SayGoodBye + Names[i])
    }else{
    console.log(SayHello + Names[i])
    }

    }
}

sayer()

