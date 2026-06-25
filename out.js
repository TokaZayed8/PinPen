function out() {
    let confirmAction = confirm("Are you sure to execute this action?");
    if (confirmAction) {
        window.close("homepage.html");
        window.close("books2.html");
        window.close("books1.html");
        window.close("profile.html");
        window.open("login.html");

    }
}