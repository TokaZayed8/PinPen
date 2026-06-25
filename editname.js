function edit() {
    var namee = prompt("enter your name : ");
    var text = document.getElementById("un").innerHTML;
    if (namee != "") {
        document.getElementById("un").innerHTML = namee;
        document.getElementById("u").innerHTML = namee;
        alert("done");
    }
   else {
        alert("try again");
        document.getElementById("un").innerHTML = text;
        document.getElementById("u").innerHTML = text;
    }
    

}
