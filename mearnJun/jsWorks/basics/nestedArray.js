// nested array

// a = [[12, 45],[34, 2],[12, 9]]
// console.log(a);

// // <15
// for(i of a){   //i=[12, 45]
//     for(j of i){  //j=12
//         if(j<15){
//             console.log(j);
//         }
//     }
// }

employees=[
    [1,"anu","developer","kochi",58000],
    [4,"amal","developer","calicut",50000],
    [2,"arun","tester","kochi",30000],
    [3,"mega","tester","trissur",45000]
]
// console.log(employees);

console.log(".............................");
// // print names of all employees
console.log(employees.map(i=>i[1]));

// for(i of employees){
//     console.log(i[1]);
// }

console.log(".............................");
// // print names of employees from kochi - filter
console.log(employees.filter(i=>i[3]=="kochi").map(i=>i[1]));



// for(i of employees){
//     if(i[3]=="kochi"){
//         console.log(i[1]);
//     }
// }
// console.log(".............................");
// // find salary of arun
// // console.log(employees.filter(i=>i[1]=="arun")[0][4]);
// console.log(employees.find(i=>i[1]=="arun")[4]);


// for(i of employees){
//     if(i[1]=="arun"){
//         console.log(i[4]);
//     }
// // }
// console.log(".............................");
// // find designations of employees who have 50000 less than salary
// console.log(employees.filter(i=>i[4]<50000).map(i=>i[2]));

// for(i of employees){
//     if(i[4]<50000){
//         console.log(i[2]);
//     }
// }

// console.log(".............................");
// // // find details of developer from calicut
// console.log(employees.filter(i=>i[3]=="calicut"&&i[2]==="developer")[0]);

// for(i of employees){
//     if(i[2]=="developer"&&i[3]=="calicut"){
//         console.log(i);
//     }
// }
// console.log(".............................");
// // sort the array according to employees id

// console.log(employees.sort((a,b)=>a[0]-b[0]));

// console.log(".............................");
// // find details of employee who have highest salary
// console.log(employees.sort((a,b)=>b[4]-a[4])[0][1]);
// // console.log(employees[0][1]);

// // find total number of employees
// console.log(".............................");
// console.log(employees.length);


// s=["hello","apple","hi"]
// console.log(s.sort());


products=[
    // id,name,price,stoke value
    [1,"oreo",40,100],
    [4,"tiger",20,50],
    [7,"hide&seek",30,20],
    [2,"parle-g",10,40],
    [3,"dark fantasy",50,150],
    [5,"moms magic",15,20]
]
// console.log(products);

// // find total number of products
// console.log(products.length);
console.log("_________________________________-");
console.log(products.map(i=>i[1]));
// // find all products name
// for(i of products){
//     console.log(i[1]);
// }
console.log("_________________________________-");

// // find products with 50 greater stoke value 
console.log(products.filter(i=>i[3]>50).map(i=>i[1]));

// for(i of products){
//     if(i[3]>50){
//         console.log(i[1]);
//     }
// }
console.log("_________________________________");

// // arrange product according to their id
// console.log(products.sort((n1,n2)=>n1[0]-n2[0]));
// console.log("_________________________________-");

// // find product with highest price
// console.log(products.sort((n1,n2)=>n2[2]-n1[2])[0][1]);
// console.log("_________________________________-");

// // find product with lowest stoke value
// console.log(products.sort((n1,n2)=>n1[3]-n2[3])[0][1]);
// console.log("_________________________________-");

// // find price of parle-g
console.log(products.find(i=>i[1]=='parle-g')[2]);

// for(i of products){
//     if(i[1]=="parle-g"){
//         console.log(i[2]);
//     }
// }




