// mobiles=[
//     {pname:"samsung",price:16000,nw:"4g",display:"lcd"},
//     {pname:"nokia",price:20000,nw:"4g",display:"lcd"},
//     {pname:"apple",price:98000,nw:"5g",display:"led"},
//     {pname:"vivo",price:10000,nw:"4g",display:"lcd"},
//     {pname:"nothing",price:35000,nw:"5g",display:"led"}
// ]
// console.log(mobiles);

// // all mpbile name
// console.log(mobiles.map(i=>i["pname"]));

// console.log(".....................................................");
// // find 5g mobile names 
// console.log(mobiles.filter(i=>i.nw=="5g").map(i=>i.pname));

// console.log(".....................................................");
// // find price of mobiles with lcd display
// mobiles.filter(i=>i.display=="lcd").forEach(i=>console.log(i.price))

// console.log(".....................................................");
// // find costly mobile name
// console.log(mobiles.reduce((n1,n2)=>n1.price>n2.price?n1:n2)["pname"]);

// console.log(".....................................................");
// // name of products i can buy with 30,000 
// console.log(mobiles.filter(i=>i.price<30000).map(i=>i.pname));

// console.log(".....................................................");
// console.log(mobiles.some(i=>i.price>=30000&&i.price<=40000));

// console.log(mobiles.sort((a,b)=>a.price-b.price));



s="hello bootstrap hi"

console.log(s.split(" ").reduce((n1,n2)=>n1.length>n2.length?n1:n2));

