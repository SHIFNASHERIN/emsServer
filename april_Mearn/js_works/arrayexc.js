// num=[5,8,9,23,-9.7,true,"hi",5,8,9]
// console.log(num);
// console.log(num[0]);

// // heterogeneous
// // support duplicate datas
// // linear data structure

// for(i of num){
//     console.log(i);
// }

// a=[]
// a.push(3,4,5,6)
// console.log(a);
// // ... any number of argmnts

// a.pop()
// console.log(a);


// sqaure



// [1,9,...]


// squareArray=a=>{
//     square=[]
//     for(i of a){
//         square.push(i**2)
//     }
//     console.log(square);
// }


// squareArray([1,3,6,8,4,3])
// commonElmntsArray=(a,b)=>{
//     common=[]
//     for( i of a){
//         for(j of b){
//             if(i==j){
//                 common.push(i)
//             }
//         }
//     }
//     console.log(common);
// }

// commonElmntsArray([1,2,3,4,5],[3,4,5,7,8,9])
// [3,4,5]
// oddEvenArray=a=>{
//     odd=[]
//     even=[]
//     for(i of a){
//         i%2==0?even.push(i):odd.push(i)
//     }
//     console.log(even);
//     console.log(odd);
// }

// oddEvenArray([1,4,7,9,88,56,23,12,32,33])
// // odd
// // even



// primeArray=a=>{
//     prime=[]
//     nonPrime=[]
//     for(num of a){
//         for(i=2;i<num;i++){
//             if(num%i==0){
//                 nonPrime.push(num)
//                 break
//             }
//         }
//         if(i==num){
//             prime.push(num)
//         }
        
//     }
//     console.log(prime,nonPrime);
// }
// primeArray([1,3,4,5,7,8,9,2,34,67])

// findElements=a=>{
//     l=a.length-1
//     console.log(a[l]);
//     console.log(a[Math.floor(l/2)]);
// }


// findElements([2,4,8,9,2,3,4,5])
// findElements([2,3,4])

// last elmnt
// middle elemnt


// expenses=[20000,34000,12000,56000,15000]

// for(i in expenses){
//     i=parseInt(i)
//     console.log(i+1);
// }

// function expenseFind(a){
//     largest=a[0]
//     lowest=a[0]
//     for(i of a){
//         if(i>largest){
//             largest=i
//         }
//         if(i<lowest){
//             lowest=i
//         }
//     }
//     console.log(largest)
//     console.log(lowest);
// }
// expenseFind([20000,34000,12000,56000,15000])

// findIndex=(a,e)=>{
//     for(i in a){
//         if(a[i]==e){
//             return i
            
//         }
//     }
//     return "element not present"
// }

// console.log(findIndex([2,3,4,5,6,7,8],10));

// a=[1,2,3,4,5,6,7]
// sum=9


// function sumPair(a,sum){
//     count=0
//     for(i of a){
//         for(j of a){
//             count++
//             if(i+j==sum){
//                 console.log(i,j);
//             }
//         }
//     }
//     console.log(count);

// }
// sumPair([1,2,3,4,5,6],9)

// function elmntCheck(a,e){
//     count=0
//     for(i of a){
//         count++
//         if(i==e){
//             return "present"
//         }
//     }
//     console.log(count);
//     return "not present"
    
// }

// console.log(elmntCheck([1,2,3,4,5,6,76,45,23,89],17))  //5

// [1,7,9,34,65,23]  //7
// sort   [1,7,9,23,34,65]
// me=23  me==e    flag=1
//        e>me   34,65
//        e<me   1,7,9      7==7     


// a=[2,7,1,4,6,3,9]
// a.sort((n1,n2)=>n2-n1)
// console.log(a);

// a=[7,3,1,4,5,9]
// e=3
// flag=0
// a.sort((a,b)=>a-b) //[1,3,4,5,7,9]
// low=0
// c=0
// upper=a.length-1  //upper=5
// while(low<=upper){
//     c++
//     midIndex=Math.floor((low+upper)/2)  //1   3
//     if(a[midIndex]==e){
//         flag=1
//         break
//     }
//     else if(e>a[midIndex]){
//         low=midIndex+1  //low=1

//     }
//     else if(e<a[midIndex]){
//         upper=midIndex-1  //upper=1
//     }
// }
// console.log(flag==1?"found":"not found");
// console.log(c);

// [1,2,3,4,5,6]
// sort   [1,2,3,4,5,6]
// sum=9               
//newSum= 9


// nested array 

// a=[1,2,3,[7,9,34,[8,0]]]
// console.log(a);

// a=[[1,56],[98,5],[12,34],[8,0],[3,98]]
// // >10
// for(i of a){
//     for(j of i){
//         if(j>10){
//             console.log(j);

//         }
//     }
// }





