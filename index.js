'use strict'

function checkLenght(password,len){
  return (password.length<len+1 && password.length>0);
}

function checkEmail(email){
  return(email.includes('@'))
}

function checkName(name){
  return (name.length>1);
}

function sendForm(){
    alert("Formulario enviado");
}

function setSuccess(formText, formValue){
  formText.style.backgroundImage="url(images/success-icon.svg)"
  formText.style.borderColor="green"
  formValue.innerHTML=" "

}

function setError(message, formText,formValue){
  formText.style.backgroundImage="url(images/error-icon.svg)"
  formText.style.borderColor="#cc0000"
  formValue.innerHTML=message
}

function formName(name){
  var formValue=document.getElementById("outName");
  var formText=document.getElementById('name')
  if(checkName(name)){
    setSuccess(formText, formValue)
  }else{
    setError("Rellene este campo",formText,formValue)
  }
}

function formMail(mail){
  var formValue=document.getElementById("outEmail");
  var formText=document.getElementById('email');
  if(checkEmail(mail)){
    setSuccess(formText, formValue)
    formText.removeAttribute('title')
  }else{
    setError("Email incorrecto",formText,formValue)
    formText.setAttribute('title','Incluye un signo "@" en la dirección de correo electrónico. La dirección "' + mail + '" no incluye el signo "@"')
    if(mail.length<1){
      formValue.innerHTML="Rellene este campo"
    }
  }
}

function formPassword(password){
  var formValue=document.getElementById("outPass1");
  var formText=document.getElementById('pass1')
  if(checkLenght(password,8)){
    setSuccess(formText, formValue)
  }else{
    setError("No debe tener más de 8 caracteres",formText,formValue)
    if(password.length<1){
      formValue.innerHTML="Rellene este campo"
    }
  }
}


function formPasswordRepeat(password){
  var pass1=document.getElementById('pass1').value
  var formValue=document.getElementById("outPass2");
  var formText=document.getElementById('pass2')
  if(pass1 === password){
    setSuccess(formText,formValue)
  }else{
    setError("Distintas contraseñas",formText,formValue)
    if(password.length<1){
      formValue.innerHTML="Rellene este campo"
    }
  }
}
