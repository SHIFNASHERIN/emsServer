// syntax 

// function functionName(){
//     // code
// }

// functionName()

// functionName()

// function without argmnts
// function add(){
//     num1=5
//     num2=8
//     sum=num1+num2 
//     console.log(sum);
// }

// add()

// add()

// function with argmnt
// function add(num1,num2){
//     sum=num1+num2 
//     console.log(sum);
// }

// add(10,100)
// add(78,90)

// factorial 
             //n=5
// function factorial(n){
//     fact=1
//     for(;n>0;n--){
//         fact*=n
//     }
//     console.log(fact);
// }

// factorial(5)
// factorial(7)


// function primeCheck(n){
//     for(i=2;i<n;i++){
//         if(n%i==0){
//             break
//         }
//     }
//     console.log(i==n?"prime":"not prime");
// }

// primeCheck(5)
// primeCheck(8)
// primeCheck(138)


// sum of prime numbers from r1 to r2   
//    sumOfPrime(50,60)
// function sumOfPrime(r1,r2){
//     sum=0
//     for(;r1<=r2;r1++){   //r1
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
// sumOfPrime(5,10)

// find the middle element of a string 
//     middleElement("apple")   p   "abcd"   b/c

// function middleElmnt(s){   //s="apple"     
//         midIndex=Math.floor((s.length-1)/2)
//         console.log(s[midIndex]);
// }
// middleElmnt("apple")
// middleElmnt("abcd")

// apple    2    5    5/2 = 2.5    parseInt()   Math.floor()   2.6 =3   2.4=2

// check an element is present or not in a string
//          ("hello","l")

// function elmntCheck(s,e){
//     f=0
//     for(i of s){
//         if(i==e){
//             f=1
//             break
//         }
//     }
//     console.log(f==1?"elmnt present":"elmnt not found");
// }
// elmntCheck("hello",'y')

// function add(n1,n2){
//     sum=n1+n2 
//     return sum
    
// }

// // a=add(10,20)
// // console.log(a);

// console.log(add(2,7));

// function posNeg(n){
    
//     return n>0?"pos":n<0?"neg":"zero"
// }
// console.log(posNeg(-7));

// function displayi(){
//     for(i=1;i<=5;i++){  //i=1
//         return i
//     }
// }
// console.log(displayi());

// num1  num2 - greatest 
// function gratest(n1,n2){
//     return n1>n2?"n1 greater":n2>n1?"n2 greater":"equal"
// }
// console.log(gratest(34,87));
// console.log(gratest(34,34));
// console.log(gratest(340,87));

// function primeCheck(n){
//     for(i=2;i<n;i++){
//         if(n%i==0){
//             return "not prime"
//         }
//     }
//     return "prime"
// }
// console.log(primeCheck(6));
// console.log(primeCheck(11));

// fibonacci - n terms   fibonnacci(15) 
// function fibonacci(nterm){  //10   nterms=10
//     n1=0
//     n2=1
//     s=""
//     for(;nterm>0;nterm--){
//         s+=n1+" "
//         n3=n1+n2 
//         n1=n2
//         n2=n3
//     }
//     return s
// }
// console.log(fibonacci(15))

// count of vow and cons in a s   count("hello")  // v=2  c=3

// function count(s){
//     count=0
//     for(i of s){
//         if(i=='a'|| i=="e" || i=="i" || i=="o" || i=="u"){
//             count++
//         }
//     }
//     return "count of v "+count+" and count of c "+(s.length-count)
    
    
// }
// console.log(count("hello"))  //3   


// s="abcd"
// console.log(s.startsWith('abce'));
// console.log(s.endsWith('y'));


// phn number validation function 
// +919087654321

// s="+919087654321"

// function phoneValidation(phn){
//     return phn.startsWith("+91")&&phn.length==13?"valid":"invalid"
// }
// console.log(phoneValidation("+911098787656"));
// console.log(phoneValidation("+9110987876568"));
// console.log(phoneValidation("+1098787656"));


// functionName=()=>{}
// functionName=arg=>{}
// functionName=(arg1,arg2,..)=>{}
// ()
// n
// (n1,n2,...)

// add=(n1,n2)=>{
//     sum=n1+n2 
//     return sum
// }
// console.log(add(1,8));

// sum of n 
// n=5    1+2+3+4+5  = 

// sunOfn=n=>{
//     sum=0
//     for(;n>0;n--){
//         sum+=n
//     }
//     return sum
// }
// console.log(sunOfn(5));
// console.log(sunOfn(6));

// find second factor of n 
secondFactor=n=>{
    for(i=2;i<=n;i++){
        if(n%i==0){
            return i
        }
    }
}
console.log(secondFactor(5));   //2








