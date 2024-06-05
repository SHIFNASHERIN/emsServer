// fixedAmount=10000
// withdraw=1500
// if(withdraw<=fixedAmount){
//     console.log("your ac has been debited with amount",withdraw);
//     console.log("current balance is ",fixedAmount-withdraw);
    
// }
// else{
//     console.log("insufficient balance");
// }

// num=9
// 2,4,6,8
// 1 3 5 7

// score1=57
// score2=64
// score3=59

// // total score
// total=score1+score2+score3
// console.log("total score is",total);
// // avg score
// console.log("avg score is",total/3);


// swapping

// num1=10
// num2=20
// console.log("before swapping num1 =",num1);   //10
// console.log("before swapping num2 =",num2);   //20

// // swap
// // num3=num1 
// // num1=num2
// // num2=num3  

// num1=num1+num2  // num1=30
// num2=num1-num2  // num2=10
// num1=num1-num2  // num1=20


// console.log("after swapping num1 =",num1);   //20
// console.log("after swapping num2 =",num2);   //10


// num=60
// if(num%2==0){
//     console.log("even number",num);
// }
// else{
//     console.log("odd number",num);
// }

// num=10
// if(num<0){
//     console.log("neg");
// }
// else if(num==0){
//     console.log("zero");
// }
// else{
//     console.log("pos");
// }

// num1=100
// num2=100
// if(num1>num2){
//     console.log("num1 greater");
// }
// else if(num2>num1){
//     console.log("num2 greater");
// }
// else{
//     console.log("equal");
// }

// score=67
// if(score>100){
//     console.log("invalid");
// }
// else if(score>=90){
//     console.log("A+");
// }
// else if(score>=80){
//     console.log("A");
// }
// else if(score>=70){
//     console.log("B+");
// }
// else if(score>=60){
//     console.log("B");
// }
// else{
//     console.log("fail");
// }


// n=30 
// divisible by  3   - fizz
// divisible by 5    - buzz
//  ,,       by  15  - fizzbuzz

// 30    fizzbuzz
// 15    fizzbuzz
// 10    buzz
// 9     fizz
// invalid

n=4
if(n%15==0){
    console.log("fizzbuzz");
}
else if(n%5==0){
    console.log("buzz");
}
else if(n%3==0){
    console.log("fizz");
}
else{
    console.log("invalid");
}
