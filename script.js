
const display = ()=>{
    var email = document.getElementById('email').value;
    var pass = document.getElementById('password').value;
    if(email.length < 10){
        alert("invalid email enter more characters in email");
    }
    else if(email.indexOf('@') <0){
        alert("mail must contain @");
    }
    else if(pass.length < 8 ){
        alert('password length too less');
    }
    else{
      alert('correct password and email')
    }
   
}
