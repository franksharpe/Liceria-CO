// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function validateform(){  
  var name=document.myform.email.value;  
  var password=document.myform.psw.value;  
    
  if (name==null || name==""){  
    alert("Email can't be blank");  
    return false;  
  }else if(password.length<6){  
    alert("Password must be at least 6 characters long.");  
    return false;  
    }  
  }  
  function validateEmail(inputText) {
    var mailFormat =  /\S+@\S+\.\S+/;
    if (inputText.value.match(mailFormat)) {
      alert("Valid address!");
      return true;
    } else {
      alert("Invalid address!");
      return false;
    }
  }
  
  