products=[
    // id,pname,price,stoke value
    [2,"hide&seek",30,15],
    [5,"oreo",40,65],
    [1,"tiger",25,65],
    [3,"dark fantasy",40,5],
    [7,"burbon",25,10],
    [6,"moms magic",30,45]
]

products.forEach(i=>console.log(i[0]))
    


// console.log(products);
// console.log("...................................");
// console.log(products.reduceRight((n1,n2)=>n1[3]>n2[3]?n1:n2));

// console.log("...................................");
// console.log(products.some(n=>n[2]<22));


// // print all products name -map
// console.log("....................................");
// console.log(products.map(i=>i[1]));

// // name of products under 30 rupees - filter
// console.log("...................................");
// console.log(products.filter(i=>i[2]<30).map(i=>i[1]));

// // display details of oreo
// console.log("...................................");
// console.log(products.find(i=>i[1]=="oreo"));

// // find item name which have less stoke value
// console.log("...................................");
// console.log(products.reduce((n1,n2)=>n1[3]<n2[3]?n1:n2)[1]);

// // find total price -reduce(map-reduce)
// console.log(products.map(a=>a[2]).reduce((n1,n2)=>n1+n2));


// // re-arrange the array according to their ids
// console.log(products.sort((n1,n2)=>n1[0]-n2[0]));
// console.log("...................................");

// // find item with less price - reduce

// console.log(products.reduce((n1,n2)=>n1[2]<n2[2]?n1:n2)[1]);
// // price of item which have highest  stoke value


