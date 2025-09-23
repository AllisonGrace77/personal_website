function validateForm(form){
console.log("validating form...");
console.log(name());
console.log(email()); 
console.log(comments()); 

if(!(name()&&email()&&comments())){
    event.preventDefault();
    console.log("NOT VALID");
    return false;
  }
else{
    console.log("VALID");
   // document.getElementById("myForm").submit();
    return true;
}
}

function name(){
    //1) create a variable to control status of each field. Assume that they are not valid
    var nameValidation = false;

    //2) create variables to read the values from html text inputs
    var name = document.getElementById("Name").value;
    var errorMessage = "";

    //3) do the validation
    if (name==="null" || name==="" || name.length > 30 ) {
        errorMessage += "<p>The name is required and cannot be greater than 30 characters</p>";
        console.log("Name invalid — length")
        } else if (name.match("^[a-zA-Z ,.'-]+$")===null) {
            errorMessage += "<p>Invalid character in name (accepts only A-Z, a-z, and ,.'-)</p>";
            console.log("Name invalid — bad characters")
        } else {
                nameValidation = true;
                console.log("First name valid");
        }

    //4) send error messages 
    document.getElementById("nameError").innerHTML = errorMessage;

    //5) return status of each field
    return (nameValidation);
}

function email(){
    //1) create a variable to control status of each field. Assume that they are not valid
    var emailValidation = false;

    //2) create variables to read the values from html text inputs
    var email = document.getElementById("Email").value;
    var errorMessage = "";

    //3) do the validation
    if (email==="null" || email==="" ) {
        errorMessage += "<p>The email is required</p>";
        console.log("Email is invalid — required");
        } 
        else if (email.match('@')===null){
        errorMessage += "<p>Please include an @ symbol</p>";
        console.log("Email is invalid — @");
        }
        else if (email.match('.com')===null && email.match('.net')===null && email.match('.edu')===null){
            errorMessage += "<p>Please include either '.com', '.net', or '.edu' in your email</p>";
            console.log("Email is invalid — end");
        }
        else {
                emailValidation = true;
                console.log("Email valid");
    }
    //4) send error messages 
    document.getElementById("emailError").innerHTML = errorMessage;

    //5) return the status of each field
    return(emailValidation);
}

function comments(){
    //1) create a variable to control status of each field. Assume that they are not valid
    var commentsValidation = false;

    //2) create variables to read the values from html text inputs
    var comments = document.getElementById("Comments").value;
    var errorMessage = "";

    //3) do the validation
     if (comments==="null" || comments==="" || comments.length > 100) {
        errorMessage += "<p>A comment is required and cannot be over 100 charachters</p>";
        console.log("Phone is invalid — length"); } 
        else{
            commentsValidation=true;
          console.log("Comment valid");
        }
    
    //4) send error messages 
    document.getElementById("commentsError").innerHTML = errorMessage;
    
    //5) return the status of each field
    return(commentsValidation);

}    
