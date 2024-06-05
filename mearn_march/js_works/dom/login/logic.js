function login(){

    // access data from input
    userName=u1.value

    // store data in local storage
    localStorage.setItem("uname",userName)

    // redirect to home page
    window.location='home.html'

    alert("login success")


}

// access data from local storage

user=localStorage.getItem("uname")

result.innerHTML=`
<h1 class="text-center">Welcome ${user}</h1>
`

function logout(){
    localStorage.removeItem("uname")
    window.location='index.html'
}