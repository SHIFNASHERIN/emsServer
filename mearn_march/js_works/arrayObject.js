// phones=[
//     {id:3,name:"nokia",price:20000,nw:"4g",display:"lcd"},
//     {id:4,name:"mi",price:15000,nw:"4g",display:"lcd"},
//     {id:2,name:"apple",price:90000,nw:"5g",display:"led"},
//     {id:1,name:"vivo",price:10000,nw:"4g",display:"lcd"},
//     {id:5,name:"1plus",price:50000,nw:"5g",display:"led"},
//     {id:6,name:"samsung",price:85000,nw:"5g",display:"led"}
// ]
// console.log(phones);

// console.log("----------------------------------------------");
// // find all product name- map
// console.log(phones.map(i=>i.name));

// console.log("----------------------------------------------");
// // find name of products with led display- filter
// console.log(phones.filter(i=>i.display=='led').map(i=>i.name));

// console.log("----------------------------------------------");
// // sort the products according to their id
// console.log(phones.sort((n1,n2)=>n1.id-n2.id));

// console.log("----------------------------------------------");
// // find prices of 5g mobiles
// // console.log(phones.filter(i=>i.nw=='5g').map(i=>i.price));
// a=phones.filter(i=>i.nw=='5g')
// console.log(a.map(i=>i.name));
// console.log(a.map(i=>i.price));

// console.log("----------------------------------------------");
// // find mobile with highest price
// console.log(phones.reduce((a,b)=>a.price>b.price?a:b).name);

// console.log("----------------------------------------------");
// // lowest price
// console.log(phones.reduce((n1,n2)=>n1.price<n2.price?n1:n2).price);


// s="c"
// switch(s){
//     case 'a':
//         console.log("its a");
//         break

//     case 'b':
//         console.log("its b");
//         break
//     default:
//         console.log("none");
// }

// const numOne = 5;
// const numTwo = 10;

// switch(true) {
//     case (numOne > numTwo):
//         console.log(`Bigger number is ${numOne}`);
//         break;
//     case (numOne < numTwo):
//         console.log(`Bigger number is ${numTwo}`);
//         break;
//     case (numOne === numTwo):
//         console.log(`${numOne} is equal to ${numTwo}`);
//         break;
//      default: console.log(false, '-> Something went wrong');
// }
