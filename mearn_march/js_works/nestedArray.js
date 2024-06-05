employees=[
    [1,"anu","developer","kochi",45000],
    [4,"amal","developer","calicut",65000],
    [2,"mega","Tester","trissur",30000],
    [3,"neethu","hr","trissur",50000]
]
console.log(employees);

// find total count of employees
console.log("-----------------------------------");
console.log(employees.length);

// print all employees names
console.log("-----------------------------------"); //map

console.log(employees.map(i=>i[1]));

// for(i of employees){
//     console.log(i[1]);
// }
// print all developers name -filter
console.log("-----------------------------------");
console.log(employees.filter(i=>i[2]=='developer').map(i=>i[1]));

// for(i of employees){
//     if(i[2]=='developer'){
//         console.log(i[1]);
//     }
// }

// // sort the employees according to their ids
// console.log("-----------------------------------");
// console.log(employees.sort((n1,n2)=>n1[0]-n2[0]));


// // find details of employee who have maximum salary
// console.log("-----------------------------------");
// console.log(employees.sort((n1,n2)=>n2[4]-n1[4])[0]);
// // console.log(employees[0]);


// // find salary of employee located in trissur
console.log("-----------------------------------");
console.log(employees.find(i=>i[3]=='trissur'));


// for(i of employees){
//     if(i[3]=="trissur"){
//         console.log(i[4]);
//     }
// }

// // find name of employee who have lowest salary
// console.log("-----------------------------------");
// console.log(employees.sort((a,b)=>a[4]-b[4])[0][1]);