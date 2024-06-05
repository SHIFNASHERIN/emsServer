
// function with argument and return

// function add(num1,num2){
//     sum=num1+num2 
//     return sum
// }
// a=add(19,40)
// console.log(a);


// function displayi(){
//     for(i=1;i<=5;i++){
//         return i
//     }
//     return i
// }
// console.log(displayi());

// console.log(add(100,200));



// function factorial(n){
    
//     fact=1
//     for(;n>0;n--){
//         fact*=n
//     }
//     return fact
// }
// console.log(factorial(5));


// return condition?truecode:elsepart

// pos neg --  fn with argmnt

// function posneg(n){
//     return n>0?"pos":n<0?"neg":"zero"
// }
// console.log(posneg(0));

// n=9

// console.log(n>0?"pos":n<0?"neg":"zero");
// posneg(8)
// posneg(0)




// factorial(6)

// factorial(3)

// function greatestnum(n1,n2){
//     return n1>n2?"n1 greater":n2>n1?"n2 greater":"equal"
// }
// console.log(greatestnum(100,100));


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

// fibonacci(15)


// oddeven=()=>{
//     n=6
//     if(n%2==0){
//         console.log("even");
//     }
//     else{
//         console.log("od");
//     }
// }
// oddeven()


// fn with arg and return
// r1 to r2   even numbers sum

// evenSum=(r1,r2)=>{
//     sum=0
//     for(;r1<=r2;r1++){
//         if(r1%2==0){
//             sum+=r1
//         }
//     }
//     return sum
// }

// console.log(evenSum(5,10));

// functionName=argmnt=>{}
// functionName=(argmnt1,argmnt2)=>{}
// functionName=()=>{}

// add=(n1,n2)=>{
//     sum=n1+n2
//     return sum
// }
// console.log(add(3,8));


function primeRange(r1,r2){
    sum=0
    for(;r1<=r2;r1++){
        for(i=2;i<r1;i++){
            if(r1%i==0){
                break
            }
        }
        if(i==r1){
            sum+=r1
        }
    }
    return sum
}

console.log(primeRange(1,10));


// 2  3  5  7