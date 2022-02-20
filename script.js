

login.onclick = clickAction;

function logAction(){
 if !(loginp.classList.contains('active')){
   loginp.classList.add('active')
 }else{
  loginp.classList.remove('active')
   
 }
}

function signAction(){
 if !(sign-up.classList.contains('active')){
   sign-up.classList.add('active')
  }else{
   sign-up.classList.remove('active')
   
  }
}
loginp.onclick = logAction;
signAction.onclick = signAction;


