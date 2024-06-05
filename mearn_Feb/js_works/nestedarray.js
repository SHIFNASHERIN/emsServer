// a = [
//     [1, 2],
//     [5, 9],
//     [54, 2],
//     [90, 12],
//     [0, 12]
// ]
// console.log(a);
// for(i of a){
//     console.log(i[0]);
// }



// for(i of a){
//     for(j of i){
//         if(j<10){
//             console.log(j);
//         }
//     }
// }

employees=[
    // employee id,name,designation,location,experiance,salary
    [1,"anu","dev","kochi",3,67000],
    [2,"amal","tester","calicut",1,40000],
    [3,"mega","dev","kochi",1,48000],
    [4,"vivek","hr","trissur",4,75000]
]
console.log(employees);

// // print all employees names  -map
console.log(employees.map(n=>n[1]));

// console.log(".........................");
// for(i of employees){
//     console.log(i[1]);
// }

console.log(".........................");
// // print dev location
console.log(employees.filter(i=>i[2]=="dev").map(n=>n[3]));


// for(i of employees){
//     if(i[2]=="dev"){
//         console.log(i[3]);
//     }
// }
// // find experiance of mega
console.log(".........................");
console.log(employees.filter(i=>i[1]=="mega")[0][4]);


// for(i of employees){
//     if(i[1]=="mega"){
//         console.log(i[4]);
//     }
// }

// console.log(".........................");
// // sort employees array based on salary
// employees.sort((a,b)=>a[5]-b[5])
// console.log(employees);

// console.log(".........................");
// // find total num of employees
// console.log(employees.length);

// // print the name of employees who have salary greater than 45000
console.log(".........................");
console.log(employees.filter(n=>n[5]>45000).map(i=>i[1]));

// for(i of employees){
//     if(i[5]>45000 && i[2]=="dev"){
//         console.log(i[1]);
//     }
// }

// // print details of employee who have maximum experiance
// console.log(".........................");
// console.log(employees.sort((n1,n2)=>n2[4]-n1[4])[0][1]);

// console.log(".........................");
// // experiance of employee who have lowest salary
// console.log(employees.sort((a,b)=>a[5]-b[5])[0][4]);