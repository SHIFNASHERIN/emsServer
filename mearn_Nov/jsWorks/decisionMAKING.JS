// if

//  true/false
// if(condition){
//     // code
// }

// var num=-5
// if(num>0){
//     console.log("hello");
// }
// console.log("outside if");

// // if - else 
// var num=15
// if(num>20){
//     console.log("number is greater than 20");
// }
// else{
//    console.log("number is less than 20"); 
// }

// console.log("outside");

// var num=6
// // 1 3 5 7 9
// // 2 4 6 8 
// if(num%2==0){
//     console.log(num,"is even");
// }
// else{
//     console.log(num,"is odd");
// }

// // student
// var name="anu"
// var age=16
// // 18 / 18 above   eligible for vaccination
// // below 18 not eligible for vaccination 

// if(age>=18){
//     console.log(name,"is eligible for vaccination");
// }
// else{
//     console.log(name,"is not eligible for vaccination");
// }

// var num=0
// if(num>0){
//     console.log("pos");
// }
// else if(num==0){
//     console.log("zero");
// }
// else{
//     console.log("neg");
// }

// var num1=3
// var num2=3

// if(num1>num2){
//     console.log("num1 is greater");
// }
// else if(num1==num2){
//     console.log("equal");
// }
// else{
//     console.log("num2 is greater");
// }

// var num=2
// // num divisible by 3   - fizz
// // num divisible by 5   - buzz
// // num divisible by 15   -fizzbuzz

// // 15  fizzbuzz
// // 10  buzz
// // 6   fizz
// // 2   invalid case
// if(num%15==0){
//     console.log("fizzbuzz");
// }
// else if(num%5==0){
//     console.log("buzz");
// }
// else if(num%3==0){
//     console.log("fizz");
// }
// else{
//     console.log("invalid case");
// }


var score=16

if(score>100){
    console.log("invalid score");
}
else if(score>=90){
    console.log("A+");
}
else if(score>=80){
    console.log("A");
}
else if(score>=70){
    console.log("B+");
}
else if(score>=60){
    console.log("B");
}
else{
    console.log("fail");
}
// 90 - 100 - A+
// 80 - 89 -  A
// 70 - 79 - B+
// 60 - 69 - B
// 60 bel  - fail
// 100 above  - invalid score



