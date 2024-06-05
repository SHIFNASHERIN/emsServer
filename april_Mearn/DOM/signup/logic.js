function signUp(){
    acno=acno.value 
    uname=uname.value 
    psw=psw.value 
    cpsw=psw1.value 

    if(acno in localStorage){
        alert("user already exist")
    }
    else{
        if(psw==cpsw){

            bankAc={acno,uname,psw}
            localStorage.setItem(acno,JSON.stringify(bankAc))
            window.location='index.html'
        }
        else{
            err.innerHTML="password doesnt match"
        }
    }
}

function login(){
    ac=acno.value
    ps=psw.value

    if(ac in localStorage){
        AcDetails=JSON.parse(localStorage.getItem(ac))
        if(ps==AcDetails.psw){
            window.location='home.html'
            alert('login success')
        }
        else{
            alert("incurrect password")
        }
   }
    else{
        alert("not registered")
    }
}