function verifyPassword() {
    var pw = document.getElementById("pswd").value;
    var em = document.getElementById("eml").value;
    
    if (pw == "") {
        document.getElementById("message").innerHTML = "**Fill the password please!";
        return false;
    }else if (pw.length < 5) {
        document.getElementById("message").innerHTML = "**Password length must be atleast 5 characters";
        return false;
    }else if (pw.length > 15) {
        document.getElementById("message").innerHTML = "**Password length must not exceed 15 characters";
        return false;
    }
    
    if (pw == "12345" && em == "ammmmmt@gmail.com") {
        alert("correct");
        window.close("login.html");
        window.open("home.html");
        const User = {email: em, password: pw }
        window.localStorage.setItem('UserData' ,JSON.stringify(User));
    }else if (pw == "admin" && em == "admin@gmail.com") {
        alert("correct");
        window.close("login.html");
        window.open("admin.html");
        const User = {email: em, password: pw }
        window.localStorage.setItem('UserData' ,JSON.stringify(User));
    }
    else {
        document.getElementById("message").innerHTML = "**Wrong email or password!";
        return false;
    }

}  