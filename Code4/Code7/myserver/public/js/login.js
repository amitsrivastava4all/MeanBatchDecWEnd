function doLogin(){
    var userid = document.querySelector('#userid').value;
    var pwd = document.querySelector('#pwd').value;
    if(userid.trim().length==0){
        alert('Userid is blank')
    }
    if(pwd.trim().length==0){
        alert('password is blank')
    }
}