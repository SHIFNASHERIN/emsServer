// nested loop
// for(i=1;i<=5;i++){
//     for(j=1;j<=5;j++){
//         console.log(i,j);
//     }
// }

// *
// * *
// * * *
// * * * *

// for(row=1;row<=4;row++){  //row=1    s="****"
//     s=""
//             // 4<=3
//     for(col=1;col<=row;col++){  //col=1
//         s=s+col+" "

//     }
//     console.log(s);
// }

// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

// for(i=1;i<=5;i++){
//     s=""
//     for(j=1;j<=5;j++){
//         s=s+"* "
//     }
//     console.log(s);
// }

// *
// * *
// *   *
// * * * *
// for(row=1;row<=4;row++){  //row=1    s="****"
//     s=""
//             // 4<=3
//     for(col=1;col<=row;col++){  //col=1
//         if(row==3&&col==2){
//             s=s+"  "
//         }
//         else{
//             s=s+"* "
//         }

//     }
//     console.log(s);
// }

// * * * *
// * 
// * *
// *

// for(row=4;row>0;row--){   //row=3 col=2     row=3 col=3
//     s=""
//     for(col=1;col<=row;col++){
//         if((row==3&&col==2)||(row==3&&col==3) ){
//             s+=" "
//         }
//         else{
//             s+="* "
//         }

//     }
//     console.log(s);
// }

// 1
// 2 3
// 4 5 6
// 7 8 9 10

// n=1
// for(row=1;row<=4;row++){
//     s=""

//     for(col=1;col<=row;col++){
//         s=s+row*col+" "
//         // n++
//     }
//     console.log(s);
// }

//    *
//   * *
//  * * *
// * * * *

// 3 loop

// space=5
// for(row=1;row<=4;row++){
//     s=""
//     for(k=1;k<=space;k++){  //k=1 2 3  
//         s=s+" "
//     }
//     space--  //space=3
//     for(col=1;col<=row;col++){
//         s=s+"* "
//     }
//     console.log(s);
// }

// * * * * *
//  * * * * *
//   * * * * *
//    * * * * *
//     * * * * *

// for(i=1;i<=5;i++){
//     s=""
//     for(k=1;k<=i;k++){
//         s=s+" "
//     }
//     for(j=1;j<=5;j++){
//         s=s+"* "
//     }
//     console.log(s);
// }

//  *     *
//   *   *
//    * * 
//     * 
//    * *
//  *     *
// *        *

// space=0
// for(row=4;row>0;row--){
//     s=""
//     for(k=1;k<=space;k++){
//         s=s+" "
//     }
//     space++
//     for(col=1;col<=row;col++){
//         if(row==3&&col==2){
//             s=s+"  "
//         }
//         else{
//             s=s+"* "
//         }
//     }
//     console.log(s);
// }






// *
// * *
// *   *
// * *
// *

// for(row=1;row<=3;row++){
//     s=""
//     for(col=1;col<=row;col++){
//         if(col==2&&row==3){
//             s=s+"  "
//         }
//         else{
//             s=s+"* "
//         }
//     }
//     console.log(s);
// }
// for(row=2;row>0;row--){
//     s=""
//     for(col=1;col<=row;col++){
//         s=s+"* "
//     }
//     console.log(s);
// }



// r1=3
// r2=10    // 4  6  8  9  10   

// // sum of non prime numbers from r1 to r2
// sum=0
// for(;r1<=r2;r1++){
//     for(i=2;i<r1;i++){
//         if(r1%i==0){
//             break
//         }
//     }
//     if(r1!=i){
//         sum+=r1
//     }
// }
// console.log(sum);



