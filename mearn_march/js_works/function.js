// function without argument

// function add(){
//     num1=10
//     num2=100
//     sum=num1+num2
//     console.log(sum);
// }

// add()
// add()

// function with argument

// function add(num1,num2){
//     sum=num1+num2
//     return sum
//     // return num1
// }
// console.log(add(45,98));

// a=add(8,9)
// console.log(a);



// add(100,200)

// add(109,208)

// function posneg(n){
//     if(n>0){
//         return "pos"+n
//     }
//     else if(n<0){
//         return "neg"+n
//     }
//     else{
//         return "zero"+n
//     }
// }

// console.log(posneg(9))

// posneg(0)
// posneg(-23)


// function factorial(n){
//     fact=1
//     for(;n>0;n--){
//         fact*=n
//     }
//     return fact
// }

// console.log(factorial(5));

// factorial(3)
// factorial(9)

//                 //   10
// function fibonacci(nterms){
//     n1=0
//     n2=1
//     for(;nterms>0;nterms--){
//         console.log(n1);
//         n3=n1+n2
//         n1=n2
//         n2=n3
//     }
// }

// fibonacci(16)

// function evenRange(r1,r2){
//     for(;r1<=r2;r1++){
//         if(r1%2==0){
//             console.log(r1);
//         }
//     }
// }
// evenRange(10,20)


// prime number checking

// 2  - 1 2   prime
// 3  - 1 3   prime
// 4  - 1 2 4  not prime
// 5  - 1 5   prime
// 6  - 1 2 3 6  not prime


// 8  2 3 4 5 6 7   -  2 4     np
// 7  2 3 4 5 6                 p

// primeCheck(5)  

function primeCheck(num){  //2           //5   6   7   4  3             //flag=1
    for(i=2;i<num;i++){    //2     //i=7
        if(num%i==0){
            break
        }
    }

    if(num==i){
        return "prime "+num
    }
    else{
        return "not prime "+num
    }

}
console.log(primeCheck(7));
console.log(primeCheck(8));



// r1=10
// r2=30

// // 5 7 


// function rangePrime(r1,r2){
//     sum=0
//     for(;r1<=r2;r1++){ //10
//         for(i=2;i<r1;i++){
//             if(r1%i==0){ 
//                 break
//             }
//         }
//         if(r1==i){
//             sum+=r1
//         }
//     }
//     console.log(sum);
// }
// rangePrime(5,10)

//  5  7     = 12



// // 


// function displayi(){
//     for(i=1;i<=5;i++){
//         return i
//     }
// }
// console.log(displayi());