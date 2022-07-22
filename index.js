const check = function (){
    var username = document.getElementById("username");
    var password = document.getElementById("password");

    if(username.value == ""){
        alert("The username cannot be empty!");

    }else if(password.value == ""){
        alert("The password cannot be empty!");
    }else {
        window.location.href= "User_page.html";
    }
}