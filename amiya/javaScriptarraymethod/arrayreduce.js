a = [1,2,3,4,5,6,7]
//find the highest number from the array
highest = a.reduce((n1,n2)=>n1>n2? n1:n2)
console.log("highest number in the array : ",highest);

console.log("-------------------------------");
//find the lowest number from the array

lowest = a.reduce((n1,n2)=>n1<n2? n1:n2)
console.log("lowest number is :", lowest);

console.log("-------------------------------");

//find sum of the array
sum = a.reduce((n1,n2)=>n1+n2)
console.log("sum of the given array is :",sum);
console.log("-------------------------------");

//find the average of the given array
average = a.reduce((n1,n2)=>n1+n2)/7
console.log("average of given arrage: ", average);
console.log("-------------------------------");
