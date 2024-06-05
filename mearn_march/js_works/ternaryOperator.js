// ternary 
// num=13
// // if(num>5){
// //     console.log("greter than 5");
// // }
// // else{
// //     console.log("less than 5");
// // }

// // console.log();

// num>5?console.log("greter than 5"):console.log("less than 5")

// console.log(num>5?"greater than 5 ":"less than 5");


// function posNeg(n){
//     console.log(n>0?"pos":n<0?"neg":"zero");
// }

// posNeg(0)
// posNeg(-7)
// posNeg(9)


// function posNeg(n){
//     return n>0?"pos":n<0?"neg":"zero"
// }

// console.log(posNeg(0));

// function evenSum(r1,r2){
//     sum=0
//     for(;r1<=r2;r1++){
//         if(r1%2==0){
//             sum+=r1
//         }
//     }
//     return sum
// }
// console.log(evenSum(1,5));

function Greatest(n1,n2){
    return n1>n2?"n1 greater":n2>n1?"n2 greater":"equal"
}

console.log(Greatest(19,12));
console.log(Greatest(19,22));
console.log(Greatest(1,1));