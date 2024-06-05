function signUp(){
    user={
        acno:acno.value,
        username:uname.value,
        password:psw.value
    }
    if(acno.value in localStorage){
        alert("user already present")
    }
    else{
        localStorage.setItem(acno.value,JSON.stringify(user))
        alert("registered successfully")
        window.location="index.html"
    }
}

function login(){
    acnumber=acno.value
    pass=psw.value
    if(acnumber in localStorage){
        currentUser=JSON.parse(localStorage.getItem(acnumber))
        if(pass==currentUser.password){
            window.location='home.html'
            alert("login success")
        }
        else{
            alert("incurrect password")
        }
    }
    else{
        alert("invalid user")
        window.location='signup.html'
    }
}