function valid()
{
    var RE_NAME=/^[A-Za-z]+(\s)+[A-Za-z]+$/;
    var RE_EMAIL=/^(\w+[\-\.])*\w+@(\w+\.)+[A-Za-z]+$/;
    var RE_CONTACT=/^(\d){10,11}$/;
    var RE_MSG=/^(\w)+$/;
    var name=document.getElementById("NM").value;
    if(name==""){
        alert("Name cannot be blank");
        return false;
    }
    if(!RE_NAME.test(name)){
        alert("name has to be a combination of fname and lname");
        return false;
    }
    var email=document.getElementById("EM").value;
    if(email==""){
        alert("Email cannot be blank");
        return false;
    }
    if(!RE_EMAIL.test(email)){
        alert("Email should have proper validation");
        return false;
    }
    var cont=document.getElementById("CT").value;
    if(cont==""){
        alert("Contact cannot be blank");
        return false;
    }
    if(!RE_CONTACT.test(cont)){
        alert("contact has to be a digit between 10 to 11");
        return false;
    }
    var msg=document.getElementById("MSG").value;
    if(msg==""){
        alert("Message cannot be blank");
        return false;
    }
    if(RE_MSG.test(msg)){
        alert("Message has to be alphanumeric");
        return false;
    }
}