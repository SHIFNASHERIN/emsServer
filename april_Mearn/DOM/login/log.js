function login(){
    uname=u1.value
    localStorage.setItem("username",uname)
    // console.log(uname);
    window.location='home.html'
}

// access username from local storage
user=localStorage.getItem("username")

// innerHTML 
user1.innerHTML=`<h1 class="text-danger">
Welcome ${user}</h1>`


function logout(){
    localStorage.removeItem("username")
    window.location='index.html'
}
