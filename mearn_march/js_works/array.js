sname=["anu","amal","mega",5,7.9,true,5,1]
// console.log(sname);

// // heterogeneous
// // linear data structure

// console.log(sname[0]);

// console.log("...............");
// for(i of sname){
//     console.log(i);
// }
// console.log("...............");

// for(i in sname){
//     console.log(i);
// }

// console.log("...............");

// for(i in sname){
//     console.log(sname[i]);
// }



// a=[1,7,3,9,23,76,89,12,34]

// console.log(a[Math.floor(a.length/2)]);

// ... spread operator
// a=[]
// a.push(1,8,5,2)
// console.log(a);
// function squareArray(a){   //a=[2,5,7,9,2,3]
//     n=[]
//     for(i of a){
//         n.push(i**2)
//     }
//     console.log(n);
// }

// squareArray([2,5,7,9,2,3])

// function oddEvenArray(a){
//     odd=[]
//     even=[]
//     for(i of a){
//         i%2==0?even.push(i):odd.push(i)
//     }
//     console.log(even,odd);
// }

// oddEvenArray([5,6,7,8,9])
// [6,8]    [5,7,9]

// function posNegArray(a){
//     n=[]
//     for(i of a){
//         i>0?n.push(++i):i<0?n.push(--i):n.push(i)
//     }
//     console.log(n);
// }

// posNegArray([-2,5,8,-3,-6,8,0])
// [-3,6,9,-4,-7,9,0]


// a=["anu","mega","vimal","amal","arun"]
// n=[]
// for(i of a){
//     if(i[0]=="a"){
//         n.push(i)
//     }
// }
// console.log(n);


// a=[4,7,9,12,45,76,98,45,23,78,98,765,234,1,0]
// e=145  //15
// f=0
// count=0
// for(i of a){
//     count++
//     if(i==e){
//         f=1
//         break
//     }
// }
// console.log(f==1?"found":"not found");
// console.log(count);


// a=[7,5,3,2,1,9,0]

// // sort
// a.sort((n1,n2)=>n2-n1)
// console.log(a);





// flag=0
// e=2
// sort
// [0,1,2,3,5,7,9]    0,1,2     2
// m=3     m=1   e==m           m=2    e==m 
// e==m  flag=1



// 

// function primeNonPrime(a){
//     prime=[]
//     nonPrime=[]
//     for(i of a){
//         for(j=2;j<i;j++){
//             if(i%j==0){
//                 break
//             }
//         }
//         if(i==j){
//             prime.push(i)
//         }
//         else{
//             nonPrime.push(i)
//         }
//     }
//     console.log(prime,nonPrime);
// }


// primeNonPrime([1,3,5,7,9,80,65,78])
// prime
// non prime

// filterValidNumbers
// phn=["+912345556787","+910987890654","+9134567","+9187654323456789","+911234567890"]
// validphn=[]
// invalid=[]
// for(i of phn){
//     i.startsWith("+91")&&i.length==13?validphn.push(i):invalid.push(i)

// }
// console.log(validphn,invalid);



// a=[4,7,9,12,45,76,98,45,23,78,98,765,234,1,0]  //[1,2,3,4,5,6,7]
// count=0
// e=9
// flag=0
// a.sort((n1,n2)=>n1-n2)
// // [ 0,  1,   4,  7,  9, 12,   23,  45,  45, 76, 78, 98,  98, 234, 765 ]
// low=0        //0 
// upper=a.length-1    //upper=14
// while(low<=upper){
//     count++
//     midIndex=Math.floor((low+upper)/2) //4      me=9
//     if(e==a[midIndex]){
//         flag=1
//         break
//     }
//     else if(e>a[midIndex]){
//         low=midIndex+1 //low=4
//     }
//     else if(e<a[midIndex]){
//         upper=midIndex-1  //upper=4
//     }
// }
// console.log(flag==1?"find":"not find");
// console.log(count);


// expenses=[12000,32000,45000,11000,31000,22000,43000]


// max=0
// for(i of expenses){
//     if(i>max){
//         max=i
//     }
// }
// console.log(max);

// maximum

// a=[1,2,3,[9,7,5,[9,0]]]
// console.log(a);

// a=[
//     [8,9,78],
//     [90,76,4],
//     [2,45,0,1]
// ]
// console.log(a);
// 78 90 76 45
// for(i of a){
//     // console.log(i);
//     for(j of i){
//         if(j>10){
//             console.log(j);
//         }
//     }
// }


// a=[4,8,6,3,2,1]
// sum=9
// count=0
// for(i of a){
//     for(j of a){
//         count++
//         if(i+j==sum){
//             console.log(i,j);

//         }
//     }
// }
// console.log(count);