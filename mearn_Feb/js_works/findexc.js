// a=[1,2,3,4,5,6,7,8]

// // sum
// console.log(a.reduce((n1,n2)=>n1+n2));

// // greatest
// console.log(a.reduce((n1,n2)=>n1>n2?n1:n2));

// console.log(a.reduce((n1,n2)=>n1<n2?n1:n2));

// console.log(a.find(n=>n%2==0));

employees=[

    // employee id,name,designation,location,experiance,salary
    [1,"anu","dev","kochi",6,67000],
    [2,"amal","tester","calicut",1,40000],
    [3,"mega","dev","kochi",1,48000],
    [4,"vivek","hr","trissur",7,75000]
]

// total salary 
// console.log(employees.map(n=>n[5]).reduce((n1,n2)=>n1+n2));

// // details of employee who have greatest salary
// console.log(employees.reduce((n1,n2)=>n1[5]>n2[5]?n1:n2)[1]);

// console.log(employees.reduceRight((n1,n2)=>n1[4]<n2[4]?n1:n2)[1]);
console.log(employees.some(i=>i[4]>2 && i[4]<5));