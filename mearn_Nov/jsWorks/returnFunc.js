// function add(num1,num2){
//     var sum=num1+num2 
//     return sum
//     // return num1
// }

// // console.log(add(10,20));
// var out=add(34,67)
// console.log(out);


// function displayi(){
//     for(i=1;i<=5;i++){
//         return i
//     }
// }
// console.log(displayi());

// function greatest(n1,n2){
//     if(n1>n2){
//         return "n1 greater"
//     }
//     else if(n2>n1){
//         return "n2 greater"
//     }
//     else{
//         return "equal"
//     }
// }


// greatest number 
// function greatest(n1,n2){
//     return n1>n2?"n1 is greater":n2>n1?"n2 is greater":"equal"
// }
// console.log(greatest(8,8));

// // factorial
// function factorial(n){
//     var fact=1
//     for(;n>1;n--){
//         fact*=n
//     }
//     return fact

// }
// console.log(factorial(5))
// console.log(factorial(6))

// // pos neg
// function posNeg(n){
//     return n>0?"pos":n<0?"neg":"zero"
// }
// console.log(posNeg(8));
// console.log(posNeg(-8));
// console.log(posNeg(0));

// prime check
function prime(n){  //n=4
    for(i=2;i<n;i++){ //i=2
        if(n%i==0){
            return "not prime"
        }
    }
    return "prime"
}
console.log(prime(3));
console.log(prime(4));

