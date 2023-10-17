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
  var RepeatPassword=document.myform.psw-repeat.value;
    
  if (password.length<2){  
    alert("Name can't be shorter than 2 letters ");  
    return false;  
  }else if(password.length<6){  
    alert("Password must be at least 6 characters long.");  
    return false;  
    }  
  }  
  var check = function() {
    if (document.getElementById('psw').value ==
      document.getElementById('psw-repeat').value) {
      document.getElementById('message').style.color = 'green';
      document.getElementById('message').innerHTML = 'matching passwords';
    } else {
      document.getElementById('message').style.color = 'red';
      document.getElementById('message').innerHTML = 'not matching passwords';
    }
  }

  
  