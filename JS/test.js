
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function validateform(){  
  
  // var name
  var name=document.myform.email.value;  

  //var passwords
  var password=document.myform.psw.value;

  //var conf password
  var confirmPassword = document.myform['psw-repeat'].value;
    
  //check name length 
  if (name.length<5){  
    alert("Name can't be shorter than 5 letters. ");  
    return false;  
    }  

    //check password length
    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return false;
    }
  
    //check passwords match 
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return false;
    }

     // Display a message with the registered name
     alert (name + " thanks for signing up ") ;
     window.location.href = "test.html";
 
    }  
