function login(){
    user=uname.value
    // console.log(user);
    localStorage.setItem("username",user)

    // redierection
    window.location="home.html"
}

uname1=localStorage.getItem("username")
// console.log(uname1);

result.innerHTML=` <h2 style="color:yellow;">Hello ${uname1}</h2> `

function logout(){
    localStorage.removeItem("username")
    window.location="login.html"
}

