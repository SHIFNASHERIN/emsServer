function addEmp(){

    // js object
    newEmp={
        ename:ename.value,
        id:eid.value,
        desig:edesig.value,
        salary:esal.value
    }

    localStorage.setItem(
        eid.value,
        JSON.stringify(newEmp)
        )
}

function home(){
    window.location='home.html'
}

function searchEmp(){
    id=id1.value
    // check key present in ls
    if(id in localStorage){
        emp=JSON.parse(localStorage.getItem(id))
        result.innerHTML=`
        <ul>
        <li>Employee Name ${emp.ename}</li>
        <li>Employee Id ${emp.id}</li>
        <li>Employee Desig ${emp.desig}</li>
        <li>Employee salary ${emp.salary}</li>
        </ul>

        `
    }
    else{
        // alert("emp not present")
        result.innerHTML=`<h1>
        No Employee Present With this Id
        </h1>`
    }
}
