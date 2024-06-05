


// function add(num1,num2){
//     sum=num1+num2 
//     console.log(sum);
// }

// add(10,100)

// // global variables sum=data
// // local variables  var sum=data (var/let/const)

// // parameters = num1,num2
// // argmnts    =10 , 100

// console.log(sum);
// console.log(num1);

// add(20,700)

// factorial 
//                 n=5
// function factorial(n){
//     var fact=1
//     for(;n>1;n--){
//         fact*=n
//     }
//     console.log(fact);

// }
// factorial(5)
// factorial(3)
// factorial(10)

// prime or not checking

// function prime(n){
//     for(i=2;i<n;i++){
//         if(n%i==0){
//             break
//         }
//     }
//     console.log(i==n?"prime":"not prime");
   
// }

// prime(5)
// prime(8)

// fibonacci
// fibonacci(10)

// hoisting

// function fibonacci(nterms){
//     var n1=0
//     var n2=1
//     for(;nterms>=1;nterms--){
//         console.log(n1);
//         n3=n1+n2 
//         n1=n2
//         n2=n3
//     }
// }

// function add(n1,n2){
//     return n1+n2
// }
// // console.log(add(5,7));


// function substract(n1,n2){
//     return n1-n2
// }
// console.log(substract(100,add(5,5)));

// const add=()

const add=(n1,n2)=>{
    return n1+n2
}
console.log(add(10,20));