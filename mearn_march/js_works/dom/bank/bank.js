function register() {
    acno = a1.value
    if (acno in localStorage) {
        window.location = 'index.html'
        alert("user already present")
        

    }
    else {

        pass1 = p1.value
        pass2 = cp1.value
        if (pass1 == pass2) {
            user = { acno, uname: u1.value, psw: pass1 }
            localStorage.setItem(acno, JSON.stringify(user))
            window.location="index.html"
            alert("account created")
            

        }
        else {
            alert("password doesnt match")
        }
    }

}


function login(){
    acnum=a2.value
    pass=p2.value
    if(acnum in localStorage){
        userr=JSON.parse(localStorage.getItem(acnum))
        if(pass==userr.psw){
            // redierect
            alert("login success")
        }
        else{
            alert("incurrect password")
        }

    }
    else{
        window.location='register.html'
        alert("not registered user")
    }
}