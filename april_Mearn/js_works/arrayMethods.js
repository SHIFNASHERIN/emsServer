// methods 
// -------

// 1. sort()  - array

// 2. map() - array

// 3. filter() - array

// 4. find() - elmnt

// 5. reduce() - single value  -last

// 6. reduceRight() - single value  first

// 7. some()  - true / false

// 8. includes() - true / false

// 9. forEach()  - elmnts

// 10.flat()  - single array

a=[
    [12,43],
    [5,78],
    [64,6]
]
console.log(a.flat().filter(i=>i>20));


// a=[7,9,5]
// a.forEach(i=>console.log(i**2))



// console.log(a.includes(1));

// console.log(a.some(i=>i%2==0));

// // sum
// console.log(a.reduce((a,b)=>a+b));

// // greatest 
// console.log(a.reduce((a,b)=>a>b?a:b));

// // lowest
// console.log(a.reduce((a,b)=>a<b?a:b));



// map - return a new array with same number of elmnts in input array
// a=[1,3,5,6,8]
// // sqaure 
// console.log(a.map(n=>n**2));

// // filter - array
// // odd
// console.log(a.filter(i=>i%2!=0));


// a=[1,2,6,9,3,4,8]
// console.log(a.filter(i=>i%2==0));

// // [0,1,7,...] -map
// console.log(a.map(i=>i<5?i-1:i+1));

// // create a new array from a with factors of 6
// console.log(a.filter(i=>6%i==0));

// s="hello hi hello"
// a=s.split(' ')
// console.log(a);

// s="The internet has allowed independent creators to thrive"
// a=s.split(" ")
// console.log(a.reduce((n1,n2)=>n1.length>n2.length?n1:n2));

// longest word