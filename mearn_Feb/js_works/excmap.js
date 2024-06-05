// a=[1,3,5,6,8,23,8,2,43,67,87,23,12]
// a.forEach(i=>console.log(i**3))

// a=[3,5]
// console.log(a.includes(8));



// square
// console.log(a.map(n=>n**2));

// // even
// console.log(a.filter(n=>n%2==0));

// // [0,2,6,7,9]
// console.log(a.map(n=>n<5?n-1:n+1));

// // greater than 10 odd elmnts
// console.log(a.filter(n=>n>10 && n%2!=0));


a=[
    [12,34],
    [45,10],
    [3,78],
    [9,87]
]
console.log(a.flat().filter(i=>i<10));