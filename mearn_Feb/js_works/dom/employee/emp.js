function changePage(){
    window.location="homepage.html"
}

function StoreEmployee(){
    employee={
        ename:ename.value,
        empid:eid.value,
        designation:did.value,
        salary:sid.value,
        experiance:exid.value
    }
    if(eid.value in localStorage){
        alert("employee already present")
    }
    else{
        localStorage.setItem(eid.value,JSON.stringify(employee))
        alert("new employee addedd")
    
    }
}


function findEmployee(){
    id=s1.value
    if(id in localStorage){

        emp=JSON.parse(localStorage.getItem(id))
        result.innerHTML=`
        <h3>Employee name ${emp.ename}</h3>
        <h3>Employee designation ${emp.designation}</h3>
        <h3>Employee salary ${emp.salary}</h3>
        <h3>Employee experiance ${emp.experiance}</h3>
        
        `

    }
    else{
        // alert("employee not present")
        result.innerHTML=`<h3 class="text-danger">Employee Not Present</h3>`
    }
}