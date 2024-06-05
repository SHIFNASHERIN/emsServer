// console.log("hello"); 
// initi,condition,incre/decr
// for(i=0;i<5;i++){  //i=5
//     console.log("hello",i);
// }


// i=0
// 1 to 10
// for(n=1;n<=10;n++){
//     console.log(n);
// }
// console.log("outside",n);
// // 10 to 1

// for(num=10;num>=1;num--){
//     console.log(num);
// }
// console.log("outside",num);

// n=8
// i=1
// while(i<=10){
//     console.log(i,"*",n,"=",i*n);
//     i++
// }
// for(i=1;i<=10;i++) {
//     console.log(i,"*",n,"=",i*n);
// }

// 1*2=2
// 2*2=4
// . 
// .
// .
// 10*2=20


// 2 4 6 8 10
// for(i=2;i<=10;i+=2){   //i=i+2    i+=2
//     console.log(i);
// }


// r1=2
// r2=10
// while(r1<=r2){
//     if(r1%2!=0){
//         console.log(r1);
//     }
//     r1++
// }
// for(;r1<=r2;r1++){
//     if(r1%2!=0){
//         console.log(r1);
//     }
// }


// r1=10
// r2=100
// while(r1<=r2){
//     if(r1%2==0 && r1%5==0){
//         console.log(r1);
//     }
//     r1++
// }


// // num from r1 to r2 
// // even , divisible by 5
// for(;r1<=r2;r1++){
//     if(r1%2==0 && r1%5==0){
//         console.log(r1);
//     }
// }

// n=5
// // 1 2 3 4 5  =15
// // 5 4 3 2 1  =15
// sum=0
// for(;n>0;n--){  //n=0
//     sum=sum+n  //sum=15
// }
// // for(i=1;i<=n;i++){ //i=6
// //     sum=sum+i  //sum=15
// //     // console.log(sum);
// // }
// console.log(sum);

// factorial 
// 3   1*2*3   6

// n=5
// fact=1
// for(;n>=1;n--){
//     fact*=n
// }
// console.log("factorial is",fact);

// n=3
// fact=1
// while(n>0){
//     fact*=n
//     n--
// }
// console.log(fact);

// for(i=1;i<=5;i++){  //i=3

//     if(i==3){
//         continue
//     }
//     console.log(i);
// }



// 1 2 
// sum=9  // 3 3   1 5  5 1  2 4   4 2
// for(i=1;i<=5;i++){  //i=2
//     for(j=1;j<=5;j++){ //j=6
//         if(i+j==sum){
//             console.log(i,j);
//         }
//     }
// }

// 1 1
// 1 2
// 1 3
// 1 4
// 1 5
// 2 1
// 2 2
// 2 3
// ... 
// 5 5

// prime number
// 2 3 5 7 11 13

// 2 - 2 1  -p
// 3 - 1 3  -p
// 4 - 1 2 4 - np
// 5 - 1 5 -p
// 6 - 1 2 3 6 -np

// 8 - 2 3 4 5 6 7 
// 7 - 2 3 4 5 6


// num = 2

// if (num == 1) {
//     console.log("not prime or composite");
// }
// else if(num<0){
//     console.log("negative number");
// }
// else {
//     for (i = 2; i < num; i++) {  //i=2
//         if (num % i == 0) {
//             break
//         }
//     }
//     if (num == i) {
//         console.log("prime",num);
//     }
//     else {
//         console.log("not prime",num);
//     }
// }

// 7 


r1=5
r2=10    //5 7   = 12 
sum=0
for(;r1<=r2;r1++){  //r1=20
    // console.log(r1);
    for(i=2;i<r1;i++){
        if(r1%i==0){
            break
        }
    }
    if(r1==i){
        // console.log(r1);
        sum=sum+r1
    }
}
console.log(sum);
