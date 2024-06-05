// data collection 
// array
// a=[12,34,67,0,1,"hi",9.7,true,12,34,[0,1,2]]
// console.log(a[0]);

// // follows currect order
// // heterogeneous
// // support duplication
// // support nesting
// // linear data structure

// for(i of a){
//     console.log(i);
// }

//  ... spread operator
// b=[]
// b.push(5,78,90,98,76,45)
// console.log(b);

// a=[1,2,3,4,5,6]
// square=[]
// for(i of a){
//     square.push(i**2)
// }
// console.log(square);



// a=[12,34,67,98,54,32,10,13,77]
// odd=[]
// even=[]
// for(i of a){
//     i%2==0?even.push(i):odd.push(i)
// }
// console.log(odd);
// console.log(even);


// a=[4,6,9,2,9,1,32,89]
// // newa=[3,7,10,1,10,0,33,90]

// newa=[]
// for(i of a){
//     i>5?newa.push(++i):i<5?newa.push(--i):""
// }
// console.log(newa);


// expense=[12000,32000,21000,11000,25000,31000]

// min=expense[0]
// for(i of expense){
//     if(i<min){
//         min=i
//     }
// }
// console.log(min);


// max=0 //max=32000




// total=0
// // total expense
// for(i of expense){
//     total+=i
// }
// console.log(total);

// maximum



// a=[1,2,3,4,5]
// b=[3,4,5,6,7]
// common=[]
// for(i of a){
//     for(j of b){
//         if(i==j){
//             common.push(i)
//         }
//     }
// }
// console.log(common);


// l=[1,2,3,4,5,6,7,8,9,10]


// function primearray(l){
//     prime=[]
//     nonprime=[]
//     for(i of l){
//         for(j=2;j<i;j++){
//             if(i%j==0){
//                 break
//             }
//         }
//         if(i==j){
//             prime.push(i)
//         }
//         else{
//             nonprime.push(i)
//         }
//     }
//     console.log(prime);
//     console.log(nonprime);
// }
// primearray([1,2,3,4,5,6,7,8,9,10])



// a=[34,76,98,12,3,6,8,9,76,45,27,96,36,87]
// e=100
// count=0
// for(i of a){
//     count++
//     if(i==e){
//         break
//     }
// }
// if(i==e){
//     console.log("present");
// }
// else{
//     console.log("not present");
// }
// console.log(count);   //14


// [1,6,3,7,8,3]
// flag=0
// e=8
// sort   [1,3,3,6,7,8]   mid=3
// [6,7,8]  mid=7
// [8]    mid=8


// l=[7,5,3,0,8,2,6,9]    //3.5   7
// index=Math.floor((l.length-1)/2)
// console.log(l[index]);


// console.log(l[3.5]);

// 3.8
// Math.floor(3.8)

// l=[7,5,3,0,8,2,6,9]    //3.5   7
// l.sort((n1,n2)=>n2-n1)
// console.log(l);

// 

// a=[34,76,98,12,3,6,8,9,76,45,27,96,36,87]
// e=12
// a.sort((n1,n2)=>n1-n2)
// console.log(a);  //[3,  6,  8,  9, 12, 27,34, 36, 45, 76, 76, 87,96, 98]
// flag=0
// low=0
// count=0           //low=0
// upper=a.length-1  //upper=13
// while(low<=upper){
//     count++
//     midindex=Math.floor((low+upper)/2)   //midi=4    12
//     if(a[midindex]==e){
//         flag=1
//         console.log(midindex);
//         break
//     }
//     else if(e>a[midindex]){
//         low=midindex+1  //low=3
//     }
//     else if(e<a[midindex]){
//         upper=midindex-1    //upper=5
//     }

// }
// if(flag==1){
//     console.log("present");
// }
// else{
//     console.log("not present");
// }
// console.log(count);




// a=[2,4,6,8,9,1,3,5,0]
// a.sort((a,b)=>a-b)
// sum=3
// low=0
// upper=a.length-1
// counter=0
// while(low<upper){
//     counter++
//     newsum=a[low]+a[upper]
//     if(sum==newsum){
        
//         console.log(a[low],a[upper]);
//         low++
//         upper--
//     }
//     else if(newsum<sum){
//         low++
//     }
//     else if(newsum>sum){
//         upper--
//     }
// }
// console.log(counter);
// sum=10
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

// [2,4,6,8,2,9]
// [6,8]   s=14
// sum=14