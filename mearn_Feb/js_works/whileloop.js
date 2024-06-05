// initialization
// while(condition){
//      //loop code
        // inc/dec
// }

// i=1
// while(i<=10){
//     console.log(i);
//     i++
// }
// console.log("outside",i);

// // 10 to 1
// n=3
// i=1
// while(i<=10){
//     console.log(i,"*",n,"=",i*n);
//     i++
// }

// num=5
// fact=1
// while(num>0){
//     fact*=num 
//     num--
// }
// console.log(fact);


// r1=5
// r2=10
// // find even numbers   6  8  10
// while(r1<=r2){
//     if(r1%2==0){
//         console.log(r1);
//     }
//     r1++
// }


// r1=1
// r2=5
// // sum of odd numbers in range   
// // 1,3,5   9
// sum=0
// for(;r1<=r2;r1++){
//     if(r1%2!=0){
//         sum+=r1
//     }
// }
// console.log(sum);

// fibonacci 10

// 0 1 1 2 3 5 8 ....

// n1=0
// n2=1
// for(i=1;i<=10;i++){  //i=4
//         console.log(n1);   //0 1 1 2
//         n3=n1+n2  //n3=5
//         n1=n2    //n1=3
//         n2=n3    //n2=5
// }












// prime 
//  8    2 ,4 , 8 , 1
// 4   1 2 4

// 1 2 3  5  7 11  ...

// num=6

//num= 8    2 ..7
num=2

for(i=2;i<num;i++){ //i=2
        if(num%i==0){
                break
        }
}
if(num==i){
        console.log("prime");
}
else{
        console.log("not prime");
}

