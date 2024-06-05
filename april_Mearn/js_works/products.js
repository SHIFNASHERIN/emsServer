products=[
    // pid,name,price,stoke value
    [1,"parle-g",30,18],
    [4,"dark fantasy",60,10],
    [2,"tiger",20,30],
    [3,"parle-g",10,10],
    [5,"hide&seek",40,15]
]
// id
products.forEach(i=>console.log(i[0]))

// console.log(products.some(a=>a[2]<=15));

// console.log(products.some(a=>a[2]>=35&&a[2]<=50));
// // greatest price item
// console.log(products.reduce((a,b)=>a[2]>b[2]?a:b));

// // console.log(products.reduce((a,b)=>a[2]+b[2]));  - wrong

// console.log(products.map(a=>a[2]).reduce((n1,n2)=>n1+n2));

// less stoke value item
// console.log(products.reduceRight((a,b)=>a[3]<b[3]?a:b)[1]);

// // find details of parle-g
// console.log(products.find(i=>i[1]=="parle-g"));
// console.log("________________________________");


// console.log(products);

// // find products count
// console.log(products.length);
// console.log("________________________________");

// // find all products name
// console.log(products.map(i=>i[1]));
// console.log("________________________________");

// // find price of oreo
// console.log(products.filter(i=>i[1]=='oreo')[0][2]);
// console.log("________________________________");

// // sort the products according to the ids
// console.log(products.sort((a,b)=>a[0]-b[0]));
// console.log("________________________________");

// // find product with less stoke value
// console.log(products.sort((a,b)=>a[3]-b[3])[0][1]);
// console.log("________________________________");

// // find product with highest price
// console.log(products.sort((a,b)=>b[2]-a[2])[0][1]);
// console.log("________________________________");


// // // find names of items with price less than 35
// // console.log(products.filter(i=>i[2]<35).map(i=>i[1]));