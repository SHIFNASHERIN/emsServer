// a=[1,2,3,4,5]

// // map
// console.log(a.map(i=>i**2));

// // filter
// console.log(a.filter(i=>i%2==0));

// a=["anu","vinod","amal","mega"]

// // ['a','v','a','m']
// console.log(a.map(i=>i[0]));

// console.log(a.filter(i=>i[0]=="a"));

// a=[2,3,4,6,8,9,10]

// // [1,2,3,7,9,10,11]
// console.log(a.map(i=>i>5?i+1:i-1));

// a=[1,2,3,4]
// console.log(a.find(i=>i%2==0));


// reduce

// a=[3,2,15,6,7]
// // sum
// console.log(a.reduce((a,b)=>a+b));

// // greatest
// console.log(a.reduce((a,b)=>a>b?a:b));

// // lowest
// console.log(a.reduce((a,b)=>a<b?a:b));

// employees=[
//     [1,"anu","developer","kochi",58000],
//     [4,"amal","developer","calicut",50000],
//     [2,"arun","tester","kochi",30000],
//     [3,"mega","tester","trissur",45000]
// ]

// // employee with greatest salary
// console.log(employees.reduce((a,b)=>a[4]>b[4]?a:b)[1]);

// total salary
// console.log(employees.reduce((a,b)=>a[4]+b[4]));
// console.log(employees.map(i=>i[4]).reduce((a,b)=>a+b));

// products=[
//     // id,name,price,stoke value
//     [1,"oreo",40,100],
//     [4,"tiger",20,50],
//     [7,"hide&seek",50,20],
//     [2,"parle-g",10,40],
//     [3,"dark fantasy",50,150],
//     [5,"moms magic",15,20]
// ]
// // find product with highest price
// console.log(products.reduceRight((a,b)=>a[2]>b[2]?a:b)[1]);

// // product with lowest stoke value
// console.log(products.reduce((n1,n2)=>n1[3]<n2[3]?n1:n2)[1]);

// // find total stoke value
// console.log(products.map(i=>i[3]).reduce((a,b)=>a+b));


// some()
// a=[3,5,7,9]

// console.log(a.some(i=>i%2==0));


// products=[
//     // id,name,price,stoke value
//     [1,"oreo",40,100],
//     [4,"tiger",20,50],
//     [7,"hide&seek",50,20],
//     [2,"parle-g",15,40],
//     [3,"dark fantasy",50,150],
//     [5,"moms magic",15,20]
// ]

// name
// products.forEach(i=>console.log(i[1]))

// // 100 above stoke value
// console.log(products.some(i=>i[3]>100));

// // check weather can i buy a product with 13 rupees
// console.log(products.some(i=>i[2]<=13));

// forEach() - no rerturn keyword
// a=[1,2,3,4,5]
// a.forEach(i=>console.log(i**2))



// a=[1,2,3,4]
// console.log(a.includes(12));

a=[[1,3],
[45,76],
[8,90],
[12,4]]

console.log(a.flat().filter(i=>i<10));

