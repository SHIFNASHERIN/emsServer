// s="Luminar Technolab"







// // linear data structure

// console.log(s[0]);
// console.log(s[4]);

// console.log(s.length);


// console.log("........................");

// for(i of s){
//     console.log(i);
// }
// console.log("........................");
// for(i in s){
//     console.log(i);
// }
// console.log("........................");

// for(i in s){
//     console.log(s[i]);
// }



// s="luminar"
// a=""
// for(i of s){   //i=u
//     a=a+i  //a=luminar
// }
// console.log(a);

// s="luminar technolab"   
// search='n'  //2      l   2          b 1

// count=0
// for(i of s){  //i=b
//     if(i==search){
//         count++   //count=2
//     }
// }
// console.log(count);


// function countLetter(s,search){
//     count=0
//     for(i of s){
//         if(i==search){
//             count++
//         }
//     }
//     return count
// }

// console.log(countLetter("hellohi","l"));


// countVow("luminar")    //3 

// function countVow(s){
//     count=0
//     for(i of s){
//         if(i=="a" || i=='e' || i=="i" || i=="o" || i=='u'){
//             count++
//         }
//     }
//     console.log(count);
// }

// countVow("luminar")
// countVow("helloohi")

// removeVow("luminar")   //  lmnr
// removeVow("apple")   // ppl

// function removeVow(s){  //s="apple"
//     n=""   //n=
//     for(i of s){  //i=e
//         if(i=="a" || i=='e' || i=="i" || i=="o" || i=='u'){
//             continue
//         }
//         else{
//             n=n+i   //n=ppl
//         }
//     }
//     return n
// }
// console.log(removeVow("luminar"));
// console.log(removeVow("apple"));


// function  countOfVowAndCons(s){
//     v=""
//     c=""
//     for(i of s){

//         i=="a" || i=="e" || i=="i" || i=="o" || i=="u"?v=v+i:c=c+i

//     }
//     return "count of v "+v.length+"  count of c "+c.length
// }

// console.log(countOfVowAndCons("luminar"))

// vowels =3
// cons = 4
// function elementSearch(s, e) {
//     f = 0

//     for (i of s) {
//         if (i == e) {
//             f = 1
//             break
//         }
//     }
//     return f == 1 ? "present" + count : "not present" + count
// }
// console.log(elementSearch("luminar technolab", "a"));
   //present    not present

//    5.6   5  
// 5.1   5

// function middleElement(s) {

//     index=Math.floor((s.length-1)/2)
//     console.log(s[index]);



// }

// middleElement("luminar")   //i   i/n   i

// function commonElements(s1,s2){
//     for(i of s1){
//         for(j of s2){
//             if(i==j){
//                 console.log(i);
//             }
//         }
//     }
// }

// commonElements("abcd","cdef")

// s="hello hi"
// console.log(s.startsWith("hi"));
// console.log(s.endsWith("i"));

// function checkMail(mail){
//     return mail.endsWith("@gmail.com")?"valid":"invalid"
// }

// console.log(checkMail("shifna@gmail.com"));

// function phoneValidation(phn){
//     console.log(phn.startsWith("+91")&&phn.length==13?"valid":"invalid");
// }

// phoneValidation("+999876543210")