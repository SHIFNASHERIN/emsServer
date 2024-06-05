// for

// for(variableInitialization;condition:incre/decre){
//    loop code
// }
//     i=1       
// for(var i=1;i<=5;i++){  //i=6
//     console.log("hello",i);
// }

// console.log("outside",i);
// hello
// hello
// hello
// hello
// hello

// 1 to 10
// for(var i=1;i<=10;i++){
//     console.log(i);
// }

// 10 to 1
// for(var i=10;i>0;i--){
//     console.log(i);
// }

// // 2 4 6 8
// for(var i=2;i<=8;i+=2){
//     console.log(i);
// }


// 10 to 30 even
// for(i=10;i<=30;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }

// 1 to 100  even , divisible by 5
// for(var i=1;i<=100;i++){
//     if(i%2==0 && i%5==0){
//         console.log(i);
//     }
// }

// find square value of odd numbers from range1 to range2
// var range1=3
// var range2=15
// for(;range1<=range2;range1++){
//     if(range1%2!=0){
//         console.log(range1**2);
//     }
// }


// var num=5
// // sum of n numbers 
// // 1 2 3 4 5
// // 5 4 3 2 1
// // 15
// var sum=0
// // for(var i=1;i<=num;i++){ //i=6
// //     // sum=sum+i  //sum=15
// //     sum+=i
// // }

// for(;num>0;num--){
//     sum=sum+num
// }
// console.log(sum);

// // factorial of a num
// var num=5
// // 6
// // 1 2 3
// // 3 2 1
// var fact=1
// for(;num>0;num--){  //num=0
//     fact=fact*num  //fact=6
// }
// console.log(fact);

// sum of even numbers from r1 to r2
// var r1=1
// var r2=10   
// // 2 4 6 8 10 =sum
// var sum=0
// for(;r1<=r2;r1++){
//     if(r1%2==0){
//         sum=sum+r1
//     }
// }
// console.log(sum);

// find  factors of n
// var n=6
// // 1 2  5  10

// // 5    1 2 3 4 5    1 5
// for(let i=1;i<=n;i++){
//     if(n%i==0){
//         console.log(i);
//     }
// }
// console.log(i);

// 1.write a program to find the sum of odd numbers from range1 to range2?

// var range1=1
// var range2=10

// var sum=0
// for(;range1<=range2;range1++){
//     if(range1%2!=0){
//         sum=sum+range1
//     }
// }
// console.log(sum);

// 2.Write a program to print the positive odd numbers from -5 to 5?
// for(i=-5;i<=5;i++){
//     if(i>0 && i%2!=0){
//         console.log(i);
//     }
// }

// 3.write a program to find the sum of all factors of n
//  ex :  var n=5
// (factors are 1 and 5)
// out : sum of factors of 5 is 6 

// var n=5   //1 5 =6
// var sum=0
// for(let i=1;i<=n;i++){
//     if(n%i==0){
//         sum=sum+i
//     }
// }
// console.log(sum);


// 4. Write a program to find the cube values of even numbers from num1 to num2?

// let num1=5
// let num2=15
// for(;num1<=num2;num1++){
//     if(num1%2==0){
//         console.log(num1**3);
//     }
// }

// // nested loop
// for(i=1;i<=5;i++){ //i=2
//     for(j=1;j<=5;j++){  //j=1
//         console.log(i,j);
//     }
// }
// console.log("out",i,j);

// 1 1
// 1 2
// 1 3
// 1 4
// 1 5
// 2 1
// 2 2
// ..
// ..
// 5 5

// 1 to 10
// sum=9
// 1 8   8 1
// 2 7   7 2
// 6 3   3 6
// 4 5   5 4

// var sum=6
// for(i=1;i<=10;i++){
//     for(j=1;j<=10;j++){
//         if(i+j==sum){
//             console.log(i,j);
//         }
//     }
// }


// multiplication table
// var num=8
// for(i=1;i<=10;i++){
//     console.log(i,"*",num,"=",i*num);
// }

// 1*2=2
// 2*2=4

// 10*2=20


