


    const check = function () {
        var firstname = document.getElementById("first_name");
        var lastname = document.getElementById("last_name");
        var emailAddress = document.getElementById("emailAddress");
        var password = document.getElementById("Create_password");
        var cfm_password = document.getElementById("cfm_password");


        if(firstname.value == "" || lastname.value == ""){
            alert("Firstname or Lastname cannot be empty!");
        }
        else if(emailAddress.value== ""){
            alert("Email Address cannot be empty!");
        }
        else if(password.value == ""){
            alert("You need a password!");
        }
        else if(cfm_password.value == ""){
            alert("You need confirm password!");
        }
        else if(cfm_password.value != password.value){
            alert("The second password is different with first one!");
        }else{
            window.location.href= "Next_page.html";
        }



}