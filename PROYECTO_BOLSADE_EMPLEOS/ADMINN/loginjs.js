function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "admin" && password == "user") {

        window.open("admin.html");
    }
    else {
        alert("Vuelva a intentarlo");
    }
}


