function register(){
    acno=acno1.value 
    uname=uname1.value 
    psw=psw1.value 
    cpsw=psw2.value
    if(psw==cpsw){
        a1.innerHTML=""
        // object
        user={acno,uname,psw}
        // console.log(user);

        if(acno in localStorage){
            alert("user already present")
            window.location='index.html'
        }
        else{
            localStorage.setItem(acno,JSON.stringify(user))
            alert('registered successfully !')
            window.location='index.html'

        }

    }
    else{
       a1.innerHTML=`<p class="text-danger">
       password doesnt match
       </p>` 
    }
}


function login(){
    accountNo=acno.value
    password=psw.value

    if(accountNo in localStorage){
        userObj=JSON.parse(localStorage.getItem(accountNo))
        // console.log(userObj.psw);
        if(userObj.psw==password){
            
            window.location='home.html'
            alert('login success')
        }
        else{
            alert("incurrect password")
        }

    }
    else{
        alert('incurrect acno')
    }
}