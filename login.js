function clicked() {

    var user = document.getElementById('username');
    var pass = document.getElementById('password');

    var coruser = "Jalo";
    var corpass = "12345";

    if (user.value == coruser) {

        if (pass.value == corpass) {

            alert("login successful " + user.value);
            window.open("https://www.streamledge.com");
        } else {

            alert("incorrect username or password!");
        }
    } else {
        alert("incorrect username or password!");
    }
}