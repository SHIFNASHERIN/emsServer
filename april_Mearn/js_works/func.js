

// function add(num1,num2){
//     sum=num1+num2
//     console.log(sum);
    
// }


// add(12,76)
// add(78,90)

// function factorial(n){ //n=5
//     fact=1
//     for(;n>0;n--){
//         fact*=n
//     }
//     console.log(fact);

// }

// factorial(5)
// factorial(3)
// factorial(7)

// sum of even numbers from r1 to r2
// function evenSum(r1,r2){
//     sum=0
//     for(;r1<=r2;r1++){
//         if(r1%2==0){
//             sum+=r1
//         }
//     }
//     console.log(sum);
// }

// evenSum(10,20)
// write a function to find odd factors of a number

// function factors(n){
    
//     for(i=1;i<=n;i++){
//         if(n%i==0 && i%2!=0){
//             console.log(i);
            
//         }
//     }
    
// }

// factors(18)


// function rangePrime(r1,r2){
//     for(;r1<=r2;r1++){
//         for(i=2;i<r1;i++){
//             if(r1%i==0){
//                 break
//             }
//         }
//         if(r1==i){
//             console.log(r1);
//         }
//     }
// }


// rangePrime(10,20)


// function add(num1,num2){
//     sum=num1+num2
//     return sum
// }

// // console.log(add(2,9));
// a=add(3,9)
// console.log(a);

// function printi(){
//     for(i=1;i<=5;i++){ //i=1
//         return i
//     }
// }
// console.log(printi());

// pos neg checking

// function posNeg(n){
//     if(n>0){
//         return n+" positive"
//     }
//     else if(n<0){
//         return n+" negative"
//     }
//     else{
//         return "zero"
//     }
// }

// console.log(posNeg(7));
// console.log(posNeg(-7));
// console.log(posNeg(0));

// function primeCheck(n){
//     for(i=2;i<n;i++){
//         if(n%i==0){
//             return "non prime"
//         }
//     }
//     return "prime"
   
// }
// console.log(primeCheck(6));
// console.log(primeCheck(9));

// sum of factors of a number
// n=4    1,2,4 =7
// function sumFactor(n){
//     sum=0
//     for(i=1;i<=n;i++){
//         if(n%i==0){
//             sum+=i
//         }
//     }
//     return sum
// }

// console.log(sumFactor(4));

// ternary operator
// n=0
// if(n>0){
//     console.log("pos");

// }
// else if(n<0){
//     console.log("neg");
// }
// else{
//     console.log("zero");
// }

// n>0?console.log("pos"):n<0?console.log("neg"):console.log("zero")
// console.log(n>0?"pos":n<0?"neg":"zero");

// gratetest number checking

// function greatestNum(n1,n2){
//     return n1>n2?n1+"greater":n1<n2?n2+"greater":"equal"
// }
// console.log(greatestNum(10,6));
// console.log(greatestNum(10,16));
// console.log(greatestNum(10,10));

// range sum of prime numbers
// function primeRange(r1,r2){
//     sum=0
//     for(;r1<=r2;r1++){
//         for(i=2;i<r1;i++){
//             if(r1%i==0){
//                 break
//             }
//         }
//         if(r1==i){
//             sum+=r1
//         }
//     }
//     return sum
// }
// console.log(primeRange(1,10));


// functionName=argmnt1
// functionName=(argmnt1,argmnt2)
// functionName=()

// add=(n1,n2)=>{
//     return n1+n2
// }
// console.log(add(2,8));

// gratest number print among two numbers

// greatestNum=(n1,n2)=>{
//     return n1>n2?n1:n2>n1?n2:n1+" equal"
// }
// console.log(greatestNum(100,200));
// console.log(greatestNum(200,200));

// 5   1 2 3 4 5  =15

sumOfN=n=>{
    sum=0
    for(;n>0;n--){
        sum+=n
    }
    return sum
}
console.log(sumOfN(5));
console.log(sumOfN(10));
