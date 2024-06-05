employees=[
    [1,"anu","developer","kochi",56000,2],
    [3,"amal","developer","calicut",30000,1],
    [2,"mega","tester","kochi",50000,3],
    [4,"arun","hr","trissur",40000,2],
    [5,"niya","developer","kochi",25000,0]
]
console.log(employees);
// display all employees name map
console.log(employees.map(i=>i[1]));

// for(i of employees){
//     console.log(i[1]);
// }

console.log("_________________________");

// find name of employees from kochi
console.log(employees.filter(i=>i[3]=="kochi").map(i=>i[1]));
// for(i of employees){
//     if(i[3]=="kochi"){
//         console.log(i[1]);
//     }

// }
console.log("_________________________");
console.log(employees.filter(i=>i[1]=="mega")[0][5]);
// // find experiance of mega
// for(i of employees){
//     if(i[1]=="mega"){
//         console.log(i[5]);
//     }
// }

// console.log("_________________________");
// // sort the array according to the order of employees id
// employees.sort((a,b)=>a[0]-b[0])
// console.log(employees);

// console.log("_________________________");
// // find details of employee who have lowest salary
// console.log(employees.sort((n1,n2)=>n1[4]-n2[4])[0]);

// // find salary of employee who have least experiance
// console.log("_________________________");
// console.log(employees.sort((n1,n2)=>n1[5]-n2[5])[0][4]);

// // find developers id from kochi
// console.log("_________________________");
// console.log(employees.filter(i=>i[2]=='developer'&&i[3]=='kochi').map(i=>i[0]));
// for(i of employees){
//     if(i[2]=="developer" && i[3]=="kochi"){
//         console.log(i[0]);
//     }
// }