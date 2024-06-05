// num=[12,56,8,9,"hi",[1,2,3]]
// console.log(num);
// console.log(num[0]);
// console.log(num[3]);
// console.log(num.length);
// console.log(num[num.length-1]);


// data collections 
// ________________


// Array 

// heterogeneous
// support duplication
// lenear data structure
// support nesting

// a=[1,2,3,4,5,6]
// for(i in a){
//     console.log(i);
// }
// console.log("............");
// for(i of a){
//     console.log(i);
// }

// a=[]
// a.push(7,9,0)
// console.log(a);

// console.log(a.pop());
// console.log(a);


// ... spread operator


// a=[3,5,7,8,2,5,9]
// []
// function sqaureArray(a){
//     square=[]
//     for(i of a){ //
//         square.push(i**2)  //[9,25]
//     }
//     return square

// }
// console.log(sqaureArray([3,5,7,8,2,5,9]));

// a=[3,5,7,8,2,5,9]
// odd
// even




// function oddEven(a){
//     odd=[]
//     even=[]
//     for(i of a){
//         i%2==0?even.push(i):odd.push(i)
//     }
//     console.log(odd);
//     console.log(even);
// }
// oddEven([1,5,2,3,4,7,8,9])

// a=[1,5,2,3,4,7,8,9]
// prime and nonPrime array

// function primeNonPrime(a){
//     prime=[]
//     nonPrime=[]
//     for(i of a){  //i
//         for(j=2;j<i;j++){
//             if(i%j==0){
//                 break
//             }
//         }
//         i==j?prime.push(i):nonPrime.push(i)

//     }
//     console.log(prime);
//     console.log(nonPrime);
// }
// primeNonPrime([3,5,6,7,8,9,2])

// expenses=[10000,9000,13000,11000,12000]

// //1- greatest 
// greatest=0              //13000
// for(i of expenses){ //12000
//     if(i>greatest){
//         greatest=i
//     }
// }
// console.log(greatest);


//2- lowest
// lowest=expenses[0]
// for(i of expenses){
//     if(i<lowest){
//         lowest=i
//     }
// }
// console.log(lowest);

// a=
// e=

// function findElmnt(a,e){
//     count=0
//     for(i of a){
//         count++
//         if(i==e){
//             return "present"+count
//         }
//     }
//     return "not present"+count
// }
// console.log(findElmnt([3,5,7,8,9,12,43,56,0,6,34],12));
// console.log(findElmnt([3,5,7,8,9,12,43,56,0,6,34],120));  //11

// a=
// sum=

// function pairSum(a,sum){
//     count=0
//     for(i of a){  //i=3
//         for(j of a){  //j=1
//             count++
//             if(i+j==sum){
//                 console.log(i,j);
//             }
//         }
//     }
//     console.log(count);
// }
// pairSum([1,3,2,5,6,4],9)  //36

// [1,3,2,5,6,4]
// sum=9
// sort   [1,2,3,4,5,6]

// s=9


// a=[1,3,2,5,6,4]
// count=0
// sum=9
// a.sort((a,b)=>a-b)
// low=0
// upper=a.length-1 
// while(low<=upper){
//     count++
//     s=a[low]+a[upper]
//     if(sum==s){
//         console.log(a[low],a[upper]);
//         low++
//         upper--
//     }
//     else if(s<sum){
//         low++
//     }
//     else{
//         upper--
//     }
// }
// console.log(count);

// sum=9
// a=[1,3,2,5,6,4]
// a=[1,2,3,4,5,6]


// s=9









// a=[1,4,6,8,9,2,34]
// e=17



// linear searching   n
// binary searching   n/2






// e=1

// sort  // [1,2,3,4,5,6]
//   [1]

// me=1



// function binary(a, e) {    //[3,5,7,8,9,12,43,56,0,6,34]
//     count=0
//     a.sort((n1, n2) => n1 - n2)    //[0,3,5,6,7,8,9,12,34,43,56]
//     console.log(a);
    
//     low = 0                         //low=0
//     upper = a.length - 1        //upper=10

//     while (low <= upper) {
//         count++
//         middIndex = Math.floor((low + upper) / 2)   //mid=3    =6
//         if (a[middIndex] == e) {
//             return "found"+count
//         }
//         else if (e > a[middIndex]) {
//             low = middIndex + 1    //low=3
//         }
//         else if (e < a[middIndex]) {
//             upper = middIndex - 1   //upper=4
//         }
//     }
//     return "not found"+count

// }
// console.log(binary([3,5,7,8,9,12,43,56,0,6,34],6));




