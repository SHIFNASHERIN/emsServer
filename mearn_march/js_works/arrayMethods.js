// map 
// a=[1,2,4,6,7,9]
// square=[]
// console.log(a.map(n=>n**2));


// filter 
// even=[]
// console.log(a.filter(n=>n%2==0));


// a=[1,2,4,6,7,9,5]

// // [0,1,3,7,8,10]
// console.log(a.map(n=>n>5?++n:n<5?--n:n));


// ar=[10,37,86,45,89,90,56,5]
// // filter
// console.log(ar.find(n=>n%5==0));

// reduce 
// a=[1,4,6,7,3]

// // sum 
// console.log(a.reduce((a,b)=>a+b));

// // greatest
// console.log(a.reduce((a,b)=>a>b?a:b));

// // lowest
// console.log(a.reduce((n1,n2)=>n1<n2?n1:n2));


// some()
// a=[1,7,4,3,5]

// console.log(a.some(i=>i%2==0));


// a=[1,7,4,3,5]
// console.log(a.includes(5));
// a.forEach(i=>console.log(i**3))

// flat() 
a=[[2,5],[8,12],[45,9]]

// console.log(a.flat().filter(i=>i>10));
console.log(a.flat().reduce((n1,n2)=>n1>n2?n1:n2));

// console.log(a.filter(i=>));